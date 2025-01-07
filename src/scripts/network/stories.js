import axios from 'axios';
import ApiEndpoint from '../globals/api-endpoint';
import Config from '../globals/config';
import { getUserToken } from '../utils/storage';

const storyClient = axios.create({
  baseURL: Config.BASE_URL,
});

const Stories = {
  async getAll() {
    storyClient.interceptors.request.use(async (req) => {
      const accessToken = getUserToken(Config.USER_TOKEN_KEY);

      if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
        req.params = {
          ...req.params,
          size: 9,
        };
      }

      return req;
    });

    return await storyClient.get(ApiEndpoint.GET_ALL_STORY);
  },

  async getDetail(id) {
    storyClient.interceptors.request.use(async (req) => {
      const accessToken = getUserToken(Config.USER_TOKEN_KEY);

      if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
      }

      return req;
    });

    return await storyClient.get(ApiEndpoint.GET_STORY_DETAIL(id));
  },

  async postStory({ description, photo }) {
    storyClient.interceptors.request.use(async (req) => {
      const accessToken = getUserToken(Config.USER_TOKEN_KEY);

      if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
        req.headers['Content-Type'] = 'multipart/form-data';
      }

      return req;
    });

    const data = { description, photo };

    return await storyClient.post(ApiEndpoint.POST_STORY, data);
  },
};

export default Stories;
