import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { allLocales } from '../../../generated/locale-codes';
import { getLocale, localeNames, setLocaleFromUrl } from '../../localization';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <ul class="navbar-nav justify-content-center">
        <nav-link content="${msg('Home')}" to="/"></nav-link>
        <nav-link content="${msg('Post Story')}" to="/post.html"></nav-link>
        <nav-link
          content="${msg('About Me')}"
          to="https://id.linkedin.com/in/andryan007"
        ></nav-link>

        <nav-link content="${msg(`Login`)}" to="/login.html" id="loginMenu"></nav-link>

        <li class="nav-item ms-2 me-3">
          <select class="form-select" aria-label="Select language" @change=${this._localeChanged}>
            ${allLocales.map((locale) => {
              return html`
                <option value=${locale} ?selected=${locale === getLocale()}>
                  ${localeNames[locale]}
                </option>
              `;
            })}
          </select>
        </li>

        <nav-link-auth class="d-none" id="userLoggedMenu"></nav-link-auth>
      </ul>
    `;
  }

  _localeChanged(event) {
    const newLocale = event.target.value;

    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);

      window.history.pushState(null, '', url.toString());
      setLocaleFromUrl();
    }
  }
}

customElements.define('nav-links', NavLinks);
