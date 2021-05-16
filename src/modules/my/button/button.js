import { LightningElement, api } from 'lwc';
import {
  ACCENT_FONT_SIZE,
  ACCENT_KEY_BACKGROUND,
  ACCENT_KEY_SHADOW,
  ACCENT_KEY_TEXT,
  WARN_FONT_SIZE,
  WARN_KEY_BACKGROUND,
  WARN_KEY_SHADOW,
  WARN_KEY_TEXT,
} from '../constants';

export default class Button extends LightningElement {
  /**
   * @type {number|string}
   */
  @api value;

  /**
   * Theme variant
   * @type {string}
   */
     @api variant;

  /**
   * @type {boolean}
   */
  _hasRendered;

  renderedCallback() {
    if (this._hasRendered) return;

    if (this.variant) {
      const button = this.template.querySelector('.button');
      const value = this.template.querySelector('.value');

      if (!button || !value) return;

      if (this.variant === 'accent') {
        button.style.setProperty('--key-bg-color', ACCENT_KEY_BACKGROUND);
        button.style.setProperty('--key-shadow-color', ACCENT_KEY_SHADOW);
        button.style.setProperty('--key-text-color', ACCENT_KEY_TEXT);
        value.style.fontSize = ACCENT_FONT_SIZE;
      }

      if (this.variant === 'warn') {
        button.style.setProperty('--key-bg-color', WARN_KEY_BACKGROUND);
        button.style.setProperty('--key-shadow-color', WARN_KEY_SHADOW);
        button.style.setProperty('--key-text-color', WARN_KEY_TEXT);
        value.style.fontSize = WARN_FONT_SIZE;
      }
    }
    this._hasRendered = true;
  }

  handleClick(event) {
    this.dispatchEvent(new CustomEvent('buttonclick', { detail: event.target.dataset.value, bubbles: true, composed: true }));
  }
}
