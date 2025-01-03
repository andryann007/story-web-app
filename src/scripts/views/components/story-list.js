import { LitElement, html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class StoryList extends LitElement {
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <h1 class="pt-3 mt-2 text-center">${msg('Story List')}</h1>
      
      <div class="container-fluid p-3">
        <div id="storyList" class="row mb-5 g-3 justify-content-center">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('story-list', StoryList);