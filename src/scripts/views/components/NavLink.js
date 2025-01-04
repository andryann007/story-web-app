import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLink extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
    to: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('to')) {
      throw new Error(`Atribut "to" must be implemented in element ${this.localName}`);
    }
  }

  render() {
    return html`
      <li class="nav-item ms-2">
        <a class="nav-link" href="${this.to}">${this.content}</a>
      </li>
    `;
  }
}

customElements.define('nav-link', NavLink);