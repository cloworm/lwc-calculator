import { LightningElement, api } from 'lwc';

export default class CalculatorButton extends LightningElement {
  variant;
  _value;

  @api
  set value(value) {
    this._value = value;

    if (this._value === 'DEL' || this._value === 'RESET') {
      this.variant = 'accent';
    } else if (this._value === '=') {
      this.variant = 'warn';
    }
  }
  get value() {
    return this._value;
  }
}
