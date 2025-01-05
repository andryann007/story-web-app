import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class PostForm extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="m-auto container-fluid py-5">
        <div class="row">
          <div class="col-12 col-md-6 mx-auto mt-5">
            <h1 class="my-3 text-center">${msg('Post Story')}</h1>

            <form class="card row row-cols-1 mx-3 my-3" id="postStoryForm" novalidate>
              <div class="col-12 g-3 px-3 py-2">
                <label class="form-label fw-bold fs-6" for="validationStoryDescription"
                  >${msg('Story Description')}</label
                >
                <textarea-with-validation
                  inputId="validationStoryDescription"
                  invalidFeedbackMessage="Story Description field must not be empty !!!"
                  required
                ></textarea-with-validation>
              </div>

              <div class="col-12 g-3 px-3 py-2">
                <input-image-with-preview
                  inputId="validationStoryImage"
                  invalidFeedbackMessage="Story Image must not be empty !!!"
                  defaultImage="./images/upload.png"
                  defaultImageAlt="Upload image placeholder"
                  required
                ></input-image-with-preview>
              </div>

              <div class="col-12 p-3">
                <button class="btn btn-navy float-end" type="submit">${msg('Submit')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('post-form', PostForm);
