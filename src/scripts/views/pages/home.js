import { createStoryItemTemplate } from '../templates/template-creator';
import CheckUserAuth from './auth/check-user-auth';
import Stories from '../../network/stories';
import { showErrorMessage } from '../../utils/utils';

const Home = {
  async init() {
    CheckUserAuth.checkLoginState();

    await this._initialData();
  },

  async _initialData() {
    try {
      const response = await Stories.getAll();
      const storyItems = response.data.listStory;

      const storyList = document.getElementById('storyList');
      const storyListPlaceholder = document.getElementById('storyListPlaceholder');
      const storyListContainer = document.getElementById('storyListContainer');
      storyList.innerHTML = '';

      for (const storyItem of storyItems) {
        storyList.innerHTML += createStoryItemTemplate(storyItem);
      }

      storyListPlaceholder.classList.add('d-none');
      storyListContainer.classList.remove('d-none');
    } catch (error) {
      console.log(error);
      showErrorMessage(`Get All Story Failed`, error.response.data.message);
    }
  },
};

export default Home;
