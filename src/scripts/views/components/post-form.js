import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class PostForm extends LitElement {
  createRenderRoot() {
    return this;
  }

  static styles = css`
    #validationStoryImageChange {
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  `;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="container-fluid p-3">
        <h1 class="pt-5 mt-3 text-center">${msg('Post Story')}</h1>

        <div class="row">
          <div class="col-12 col-md-6 mx-auto">
            <form class="card row row-cols-1 my-3" id="postStoryForm" novalidate>
              <div class="col-12 g-3 px-3 py-2">
                <label class="form-label fw-bold fs-6" for="validationStoryDescription">${msg('Story Description')}</label>
                <textarea class="form-control" id="validationStoryDescription" placeholder="Story Description" rows="3" required></textarea>
                <div class="invalid-feedback">${msg('Story Description field must not be empty !!!')}</div>
              </div>

              <div class="col-12 g-3 px-3 py-2">
                <label for="validationStoryImage" class="form-label fw-bold fs-6">${msg('Story Images')}</label>
                <div class="text-center mb-3" id="storyImageContainer">
                  <img
                    class="img-fluid w-50 h-50"
                    src="./images/upload.png"
                    alt="Upload Images Illustration"
                    id="validationStoryImageImg"
                  />

                  <div 
                    class="w-100 h-100 d-none"
                    id="validationStoryImageChange"
                  ></div>
                </div>

                <input 
                  type="file"
                  class="form-control"
                  id="validationStoryImage"
                  accept="image/*"
                  aria-label="upload story image" 
                  required
                /> 
                <div class="invalid-feedback">${msg('Story Image must not be empty !!!')}</div>
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