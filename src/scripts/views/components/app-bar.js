import { LitElement, html } from 'lit';
import { allLocales } from '../../../generated/locale-codes';
import { getLocale, localeNames, setLocaleFromUrl } from '../../localization';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class AppBar extends LitElement {
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg fixed-top bg-white text-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="favicon.png"
              alt=""
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />
            <strong>Story App</strong>
          </a>

          <button
            class="navbar-toggler ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-navbar"
            aria-controls="main-navbar"
            aria-expanded="false"
            aria-label="Main Navbar Toggle"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse p-2" id="main-navbar">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item ms-2">
                <a class="nav-link" href="/">${msg('Home')}</a>
              </li>
              <li class="nav-item ms-2">
                <a class="nav-link" href="/post.html">${msg('Post Story')}</a>
              </li>
              <li class="nav-item ms-2">
                <a class="nav-link" href="https://id.linkedin.com/in/andryan007" target="_blank" rel="noopener">${msg('About Me')}</a>
              </li>
              <li class="nav-item ms-2">
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
            </ul>
          </div>
        </div>
      </nav>
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

customElements.define('app-bar', AppBar);