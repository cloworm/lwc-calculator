import { LightningElement } from 'lwc';

export default class Screen extends LightningElement {
  value = 399981;

  get displayValue() {
    return this.value.toLocaleString();
  }
}
