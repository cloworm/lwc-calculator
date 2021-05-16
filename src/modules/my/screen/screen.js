import { LightningElement, api } from 'lwc';

export default class Screen extends LightningElement {
  @api value = 0;

  get displayValue() {
    return this.value.toLocaleString();
  }
}
