import moment from 'moment';
import Swal from 'sweetalert2';

const convertDateFormat = (oldDateFormat) => {
  moment.updateLocale();
  const newFormattedDate = moment(oldDateFormat).format('MM/DD/YYYY');
  return newFormattedDate;
};

const setUserToken = (key, value) => {
  return sessionStorage.setItem(key, value);
};

const getUserToken = (key) => {
  return sessionStorage.getItem(key);
};

const destroyUserToken = (key) => {
  return sessionStorage.removeItem(key);
};

const showSuccessMessage = (title, message, action) => {
  return Swal.fire({
    title: title,
    text: message,
    icon: 'success',
  }).then((result) => {
    if (result.isConfirmed) {
      return action;
    } else {
      return false;
    }
  });
};

const showErrorMessage = (title, message) => {
  return Swal.fire({
    title: title,
    text: message,
    icon: 'error',
  });
};

export {
  convertDateFormat,
  setUserToken,
  getUserToken,
  destroyUserToken,
  showSuccessMessage,
  showErrorMessage,
};
