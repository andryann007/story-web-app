import { LitElement, html, css } from 'lit';


class AppFooter extends LitElement {
  static styles = css`
    .my-footer {
      font-family: "Oswald", Verdana, sans-serif;
      text-align: center;
      padding: 3px;
      background-color: black;
      color: white;
    }
  `;

  render() {
    return html`
      <div class="my-footer">
        <p>Copyright &copy; Andryan 2024</p>
      </div>
    `;
  }
}

customElements.define('app-footer', AppFooter);