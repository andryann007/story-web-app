const Post = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const storyImageInput = document.querySelector('#validationStoryImage');
    storyImageInput.addEventListener('change', () => {
      this._updateImagePreview();
    });

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

  _postStory() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);
    }
  },

  _getFormData() {
    const descriptionInput = document.querySelector('#validationStoryDescription');
    const imageInput = document.querySelector('#validationStoryImage');

    return {
      description: descriptionInput.value,
      image: imageInput.files[0],
    };
  },

  _updateImagePreview() {
    const photoImg = document.querySelector('#validationStoryImageImg');
    const photoImgChange = document.querySelector('#validationStoryImageChange');
    const photoImgInput = document.querySelector('#validationStoryImage');

    const photo = photoImgInput.files[0];
    if (!photo) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      photoImgChange.parentElement.classList.remove('d-none');
      photoImgChange.style.backgroundImage = `url('${event.target.result}')`;

      photoImg.classList.remove('w-50', 'h-50');
      photoImg.classList.add('w-100', 'h-100');
      photoImg.src = `${event.target.result}`;
    };

    reader.readAsDataURL(photo);
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },
};

export default Post;