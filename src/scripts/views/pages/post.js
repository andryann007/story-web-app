import CheckUserAuth from './auth/check-user-auth';
import Stories from '../../network/stories';
import { showSuccessMessage, showErrorMessage } from '../../utils/toast-message';

const Post = {
  async init() {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const postStoryForm = document.querySelector('#postStoryForm');
    postStoryForm.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        postStoryForm.classList.add('was-validated');
        this._postStory();
      },
      false,
    );
  },

  async _postStory() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      try {
        await Stories.postStory(formData);
        showSuccessMessage(
          'Post Story Success',
          `Congratulations, you have succesfully post a new story !!!`,
          this._goToHomePage(),
        );
      } catch (error) {
        console.log(error);
        showErrorMessage(`Post Story Failed`, error.response.data.message);
      }
    }
  },

  _getFormData() {
    const descriptionInput = document.querySelector('#validationStoryDescription');
    const imageInput = document.querySelector('#validationStoryImage');

    return {
      description: descriptionInput.value,
      photo: imageInput.files[0],
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToHomePage() {
    window.location.href = '/';
  },
};

export default Post;
