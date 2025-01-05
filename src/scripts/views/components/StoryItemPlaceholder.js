import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class StoryItemPlaceholder extends LitWithoutShadowDom {
  render() {
    return html`
      <div id="storyListPlaceholder">
        <h1 class="pt-3 mt-2 text-center placeholder-glow">
          <span class="placeholder col-4"></span>
        </h1>

        <div class="container-fluid p-3">
          <div class="row mb-5 g-3 justify-content-center">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-3 m-3">
              <div class="card">
                <img
                  src="./images/photo-placeholder.png"
                  class="card-img-top card__image__placeholder mx-auto d-block"
                  alt="Placeholder story images"
                />
                <div class="card-body">
                  <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                  </h5>
                  <p class="card-text placeholder-glow short__story__description">
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                  </p>
                  <button
                    type="button"
                    class="btn btn-navy disabled placeholder col-6 float-end"
                  ></button>
                </div>
                <div class="card-footer text-end placeholder-glow">
                  <span class="placeholder col-6"></span>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-3 m-3">
              <div class="card">
                <img
                  src="./images/photo-placeholder.png"
                  class="card-img-top card__image__placeholder mx-auto d-block"
                  alt="Placeholder story images"
                />
                <div class="card-body">
                  <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                  </h5>
                  <p class="card-text placeholder-glow short__story__description">
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                  </p>
                  <button
                    type="button"
                    class="btn btn-navy disabled placeholder col-6 float-end"
                  ></button>
                </div>
                <div class="card-footer text-end placeholder-glow">
                  <span class="placeholder col-6"></span>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-3 m-3">
              <div class="card">
                <img
                  src="./images/photo-placeholder.png"
                  class="card-img-top card__image__placeholder mx-auto d-block"
                  alt="Placeholder story images"
                />
                <div class="card-body">
                  <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                  </h5>
                  <p class="card-text placeholder-glow short__story__description">
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                  </p>
                  <button
                    type="button"
                    class="btn btn-navy disabled placeholder col-6 float-end"
                  ></button>
                </div>
                <div class="card-footer text-end placeholder-glow">
                  <span class="placeholder col-6"></span>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-3 m-3">
              <div class="card">
                <img
                  src="./images/photo-placeholder.png"
                  class="card-img-top card__image__placeholder mx-auto d-block"
                  alt="Placeholder story images"
                />
                <div class="card-body">
                  <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                  </h5>
                  <p class="card-text placeholder-glow short__story__description">
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                  </p>
                  <button
                    type="button"
                    class="btn btn-navy disabled placeholder col-6 float-end"
                  ></button>
                </div>
                <div class="card-footer text-end placeholder-glow">
                  <span class="placeholder col-6"></span>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-3 m-3">
              <div class="card">
                <img
                  src="./images/photo-placeholder.png"
                  class="card-img-top card__image__placeholder mx-auto d-block"
                  alt="Placeholder story images"
                />
                <div class="card-body">
                  <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                  </h5>
                  <p class="card-text placeholder-glow short__story__description">
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                  </p>
                  <button
                    type="button"
                    class="btn btn-navy disabled placeholder col-6 float-end"
                  ></button>
                </div>
                <div class="card-footer text-end placeholder-glow">
                  <span class="placeholder col-6"></span>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-3 m-3">
              <div class="card">
                <img
                  src="./images/photo-placeholder.png"
                  class="card-img-top card__image__placeholder mx-auto d-block"
                  alt="Placeholder story images"
                />
                <div class="card-body">
                  <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                  </h5>
                  <p class="card-text placeholder-glow short__story__description">
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                  </p>
                  <button
                    type="button"
                    class="btn btn-navy disabled placeholder col-6 float-end"
                  ></button>
                </div>
                <div class="card-footer text-end placeholder-glow">
                  <span class="placeholder col-6"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('story-item-placeholder', StoryItemPlaceholder);
