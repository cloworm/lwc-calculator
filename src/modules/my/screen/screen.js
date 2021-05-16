import { LightningElement, api } from 'lwc';
export default class Screen extends LightningElement {
  /**
   * @type {number}
   */
  @api value = 0;

  /**
   * Getter returns formatted value
   * @return {string}
   */
  get displayValue() {
    return this.value ? this.value.toLocaleString() : '0';
  }
}
