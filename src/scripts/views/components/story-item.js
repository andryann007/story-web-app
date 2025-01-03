import { LitElement, html } from 'lit';
import { convertDateFormat } from '../../utils/utils';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class StoryItem extends LitElement {
  createRenderRoot() {
    return this;
  }

  static properties = {
    _id : {
      type: String,
    },
    _name : {
      type: String,
    },
    _description : {
      type : String,
    },
    _photoUrl : {
      type : String,
    },
    _createdAt : {
      type : String,
    }
  };

  static get observedAttributes() {
    return ['id', 'name', 'description', 'photo-url', 'created-at'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;
    this.render();
  }

  constructor() {
    super();

    this._id = this.getAttribute('id');
    this._name = this.getAttribute('name');
    this._description = this.getAttribute('description');
    this._photoUrl = this.getAttribute('photo-url');
    this._createdAt = this.getAttribute('created-at');

    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="modal" id="${this._id}-modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${this._name} ${msg('Story Detail')}</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close Modal"
                    ></button>
                </div>

                <div class="modal-body">
                    <div id="${this._id}" class="card">
                        <img src="${this._photoUrl}" class="card-img-top" alt="${this._name} story images">
                        <div class="card-body">
                            <h5 class="card-title modal-title">${this._name}</h5>
                            <p class="card-text modal-description">${this._description}</p>
                        </div>
                        <div class="card-footer text-muted text-end modal-footer">
                          ${msg('Posted at')} : ${convertDateFormat(this._createdAt)}
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-navy" data-bs-dismiss="modal">${msg('Close')}</button>
                </div>
            </div>
        </div>
      </div>

      <div id=${this._id} class="card">
          <img src="${this._photoUrl}" class="card-img-top" alt="${this._name} story images">
          <div class="card-body">
              <h5 class="card-title">${this._name}</h5>
              <p class="card-text short-story-description">${this._description}</p>
              <button type="button" id="${this._id}" class="btn btn-navy float-end" data-bs-toggle="modal" data-bs-target="#${this._id}-modal">${msg('Detail')}</button>
          </div>
          <div class="card-footer text-muted text-end">
            ${msg('Posted at')} : ${convertDateFormat(this._createdAt)}
          </div>
      </div>
    `;
  }
}

customElements.define('story-item', StoryItem);