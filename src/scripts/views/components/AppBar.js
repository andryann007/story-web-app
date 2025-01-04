import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class AppBar extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Attribute "brandName" must be implemented in element ${this.localName}`);
    }
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
            <nav-links class="ms-auto mb-2 mb-md-0"></nav-links>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);