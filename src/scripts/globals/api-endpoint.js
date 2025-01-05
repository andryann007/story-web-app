import Config from './config';

const ApiEndpoint = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,
  GET_ALL_STORY: `${Config.BASE_URL}/stories`,
  GET_STORY_DETAIL: (id) => `${Config.BASE_URL}/stories/${id}`,
  POST_STORY: `${Config.BASE_URL}/stories`,
};

export default ApiEndpoint;
