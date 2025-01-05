import Auth from '../../../network/auth';
import CheckUserAuth from './check-user-auth';
import { showSuccessMessage, showErrorMessage } from '../../../utils/utils';

const Register = {
  async init() {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false,
    );

    const toggglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('validationUserPassword');
    toggglePassword.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', passwordType);

      const togglePasswordIcon = document.getElementById('togglePasswordIcon');
      togglePasswordIcon.classList.toggle('fa-eye-slash');
    });
  },

  async _getRegistered() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        showSuccessMessage(
          'Register Success',
          'Congratulations, you have succesfully registered a new account !!!',
          this._goToLoginPage(),
        );
      } catch (error) {
        console.error(error);
        showErrorMessage(`Register Failed`, error.response.data.message);
      }
    }
  },

  _getFormData() {
    const name = document.querySelector('#validationUserName');
    const email = document.querySelector('#validationUserEmail');
    const password = document.querySelector('#validationUserPassword');

    return {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToLoginPage() {
    window.location.href = '/auth/login.html';
  },
};

export default Register;
