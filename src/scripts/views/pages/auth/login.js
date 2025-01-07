import Auth from '../../../network/auth';
import CheckUserAuth from './check-user-auth';
import Config from '../../../globals/config';
import { setUserToken } from '../../../utils/storage';
import { showSuccessMessage, showErrorMessage } from '../../../utils/toast-message';

const Login = {
  async init() {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');
        await this._getLogged();
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

  async _getLogged() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });

        setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token);
        setUserToken(Config.USER_NAME, response.data.loginResult.name);

        showSuccessMessage(
          'Login Success',
          `Congratulations ${response.data.loginResult.name}, you have succesfully logged in with your account !!!`,
          this._goToHomePage(),
        );
      } catch (error) {
        console.error(error);
        showErrorMessage(`Login Failed`, error.response.data.message);
      }
    }
  },

  _getFormData() {
    const email = document.querySelector('#validationUserEmail');
    const password = document.querySelector('#validationUserPassword');

    return {
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToHomePage() {
    window.location.href = '/';
  },
};

export default Login;
