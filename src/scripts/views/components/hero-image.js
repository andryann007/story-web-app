import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class HeroImage extends LitElement {
  static styles = css`
    .hero {
      position: relative;
      text-align: center;
      margin-top: 75px;
    }

    .hero-image { 
      width: 100%;
      height: 600px;
      min-width: 1000px;
      max-height: 650px;
      margin: 0 auto;
      object-fit: cover;
      overflow: hidden;
      opacity: 0.95;
    }

    .hero-text {
      position: absolute;
      border-radius: 8px;
      background-color: black;
      padding: 24px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.9;
      color: white;
      text-align: center;
    }
            
    .hero-text > h1 {
      font-family: "Merriweather", Verdana, sans-serif;
      font-size: 36px;
      height: 80px;
    }
    
    .hero-text > p {
      font-family: "PlayfairDisplay", Verdana, sans-serif;
      font-size: 20px;
    }

    @media screen and (max-width: 576px) {
      .hero {
        margin-top: 60px;
      }

      .hero-image {
        min-width: 100%;
        max-height: 600px;
        width: 100%;
        height: 550px;
      }
      .hero-text {
        width: 75%;
        padding: 8px;
      }
      .hero-text > h1 {
        font-size: 20px;
        height: 60px;
      }
      .hero-text > p {
        font-size: 16px;
      }
    }

    @media screen and (min-width: 576px) and (max-width: 1200px) {
      .hero {
        margin-top: 60px;
      }
      .hero-image { 
        min-width: 100%;
        max-height: 550px;
        width: 100%;
        height: 500px;
      }
      .hero-text {
        padding: 12px;
      }
      .hero-text > h1 {
        font-size: 24px;
        height: 70px;
      }
      .hero-text > p {
        font-size: 18px;
      }
    }
  `;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div id="hero" class="hero">
        <img class="hero-image"
          src="./images/hero-image-1.jpg" alt="hero image">

        <div class="hero-text">
            <h1>${msg('Welcome to')} Story App</h1>
            <p>${msg('Do you have any interesting / memorable story?')}</p>
            <p>${msg('With this website you can save & share your stories without missing any precious moments in each of your stories')}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-image', HeroImage);