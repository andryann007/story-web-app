import Config from './config';

const ApiEndpoint = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,
  GET_ALL_STORY: '/stories',
  GET_STORY_DETAIL: (id) => `/stories/${id}`,
  POST_STORY: '/stories',
};

export default ApiEndpoint;
