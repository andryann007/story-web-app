import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import { getUserToken, destroyUserToken } from '../../utils/storage';
import Config from '../../globals/config';
import CheckUserAuth from '../pages/auth/check-user-auth';

class NavLinkAuth extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-nowrap"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <div class="me-2 d-inline-block">
            <img
              id="imgUserLogged"
              style="width: 30px;height: 30px"
              class="img-fluid rounded-pill"
              src="./images/profile.png"
              alt="User Name"
            />
          </div>
          <span id="nameUserLogged">${getUserToken(Config.USER_NAME)}</span>
        </a>
        <ul class="dropdown-menu">
          <a class="dropdown-item" id="userLogOut" @click=${this._userLogOut}> ${msg(`Logout`)} </a>
        </ul>
      </li>
    `;
  }

  _userLogOut(event) {
    event.preventDefault();
    destroyUserToken(Config.USER_TOKEN_KEY);
    destroyUserToken(Config.USER_NAME);
    CheckUserAuth.checkLoginState();
  }
}

customElements.define('nav-link-auth', NavLinkAuth);
