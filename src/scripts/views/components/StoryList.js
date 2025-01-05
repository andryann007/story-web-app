import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class StoryList extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div id="storyListContainer" class="d-none">
        <h1 class="pt-3 mt-2 text-center">${msg('Story List')}</h1>

        <div class="container-fluid p-3">
          <div id="storyList" class="row mb-5 g-3 justify-content-center">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('story-list', StoryList);
