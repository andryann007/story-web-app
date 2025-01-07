import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class AppFooter extends LitElement {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  static styles = css`
    .my__footer {
      font-family: 'Oswald', Verdana, sans-serif;
      text-align: center;
      color: white;
    }
  `;

  render() {
    return html` <p class="my__footer">${msg(`Copyright`)} &copy; Andryan 2024</p> `;
  }
}

customElements.define('app-footer', AppFooter);
