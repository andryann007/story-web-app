import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class PasswordWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    value: { type: String, reflect: true },
    inputId: { type: String, reflect: true },
    minLength: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.type = 'password';
    this.required = false;
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Attribute "invalidFeedbackMessage" must be implemented in element ${this.localName}`,
      );
    }
  }

  render() {
    return html`
      <div class="input-group">
        <input
          id=${this.inputId || nothing}
          class="form-control"
          type=${this.type}
          value=${this.value || nothing}
          minlength=${this.minLength || nothing}
          ?required=${this.required}
          @input=${(e) => (this.value = e.target.value)}
        />

        <button class="btn btn-outline-navy" type="button" id="togglePassword">
          <i id="togglePasswordIcon" class="fa fa-eye"></i>
        </button>

        ${this._validFeedbackTemplate()}
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      </div>
    `;
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html` <div class="valid-feedback">${this.validFeedbackMessage}</div> `;
    }

    return html``;
  }
}

customElements.define('password-with-validation', PasswordWithValidation);
