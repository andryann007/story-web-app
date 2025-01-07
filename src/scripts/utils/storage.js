const setUserToken = (key, value) => {
  return sessionStorage.setItem(key, value);
};

const getUserToken = (key) => {
  return sessionStorage.getItem(key);
};

const destroyUserToken = (key) => {
  return sessionStorage.removeItem(key);
};

export { setUserToken, getUserToken, destroyUserToken };
