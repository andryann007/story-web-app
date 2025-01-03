import { createStoryItemTemplate } from '../templates/template-creator';
import STORY_DUMMY from '../../../public/data/DATA.json';

const Home = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    let STORIES = [];

    const isStorageExist = () => {
      if (typeof Storage === undefined) {
        alert('Maaf, browser anda tidak mendukung fitur local storage !!!');
        return false;
      } else {
        return true;
      }
    };

    if (isStorageExist) {
      if (!localStorage.getItem('stories')) {
        localStorage.setItem('stories', JSON.stringify(STORY_DUMMY));

        STORIES = JSON.parse(localStorage.getItem('stories'));
      } else {
        STORIES = JSON.parse(localStorage.getItem('stories')) || [];
      }
    }

    const storyList = document.getElementById('storyList');
    storyList.innerHTML = '';

    for (const storyItem of STORIES.listStory) {
      storyList.innerHTML += createStoryItemTemplate(storyItem);
    }
  }
};

export default Home;