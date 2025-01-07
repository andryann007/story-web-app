import Swal from 'sweetalert2';

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

export { showSuccessMessage, showErrorMessage };
