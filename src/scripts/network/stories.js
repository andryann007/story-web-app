import axios from 'axios';
import ApiEndpoint from '../globals/api-endpoint';
import Config from '../globals/config';
import { getUserToken } from '../utils/utils';

const Stories = {
  async getAll() {
    return await axios.get(ApiEndpoint.GET_ALL_STORY, {
      headers: {
        Authorization: `Bearer ${getUserToken(Config.USER_TOKEN_KEY)}`,
      },
      params: {
        size: 9,
      },
    });
  },

  async getDetail(id) {
    return await axios.get(ApiEndpoint.GET_STORY_DETAIL(id), {
      headers: {
        Authorization: `Bearer ${getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },

  async postStory({ description, photo }) {
    const data = { description, photo };

    return await axios.post(ApiEndpoint.POST_STORY, data, {
      headers: {
        Authorization: `Bearer ${getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default Stories;
