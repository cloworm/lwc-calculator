import { LightningElement, api } from 'lwc';

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
        button.classList.add('accent');
      }

      if (this.variant === 'warn') {
        button.classList.add('warn');
      }
    }
    this._hasRendered = true;
  }

  /**
   * Dispatch buttonclick event with value clicked
   */
  handleClick(event) {
    let value = event.target.dataset.value;
    value = /^-?\d+$/.test(value) ? +value : value;
    this.dispatchEvent(new CustomEvent('buttonclick', { detail: value, bubbles: true, composed: true }));
  }
}
