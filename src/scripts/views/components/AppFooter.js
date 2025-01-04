import { LitElement, html, css } from 'lit';

class AppFooter extends LitElement {
  static styles = css`
    .my__footer {
      font-family: "Oswald", Verdana, sans-serif;
      text-align: center;
      color: white;
    }
  `;

  render() {
    return html`
      <p class="my__footer">Copyright &copy; Andryan 2024</p>
    `;
  }
}

customElements.define('app-footer', AppFooter);