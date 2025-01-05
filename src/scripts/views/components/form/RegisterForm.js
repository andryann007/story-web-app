import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class RegisterForm extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="m-auto container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 mx-auto card bg-white bg-opacity-50">
            <h1 class="my-3 text-center">${msg('Register')}</h1>
            
            <form class="card row row-cols-1 mx-3 my-2" id="registerForm" novalidate>
              <div class="col-12 g-3 px-3 py-2">
                <label for="validationUserName" class="form-label">${msg(`Name`)}</label>

                <input-with-validation
                  type="text"
                  inputId="validationUserName"
                  invalidFeedbackMessage="Name field must not empty !!!"
                  required
                ></input-with-validation>
              </div>

              <div class="col-12 g-3 px-3 py-2">
                <label for="validationUserEmail" class="form-label">${msg(`Email`)}</label>

                <input-with-validation
                  type="email"
                  inputId="validationUserEmail"
                  invalidFeedbackMessage="Email field must have email format & not empty !!!"
                  required
                ></input-with-validation>
              </div>

              <div class="col-12 g-3 px-3 py-2">
                <label for="validationUserPassword" class="form-label">${msg(`Password`)}</label>

                <password-with-validation
                  type="password"
                  inputId="validationUserPassword"
                  invalidFeedbackMessage="Password field must not empty & not less than 8 characters !!!"
                  minLength="8"
                  required
                ></password-with-validation>
              </div>

              <div class="col-12 p-3">
                <button class="btn btn-navy float-end" type="submit">${msg('Register')}</button>
              </div>
            </form>

            <div class="fw-bold text-center my-3 p-3">
              ${msg('Already have an account?')} <a href="/login.html">${msg('Login')}</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('register-form', RegisterForm);
