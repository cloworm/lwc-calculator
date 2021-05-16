import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
  displayValue = null;
  tempNum = '';
  expression = '';
  total = 0;

  handleButtonClick(event) {
    const value = event.detail;

    switch (value) {
      case 'DEL':
        this.handleDelete();
        break;

      case 'RESET':
        this.handleReset();
        break;

      case '+':
        this.handleOperator('+');
        break;

      case '-':
        this.handleOperator('-');
        break;

      case '/':
        this.handleOperator('/');
        break;

      case 'x':
        this.handleOperator('*');
        break;

      case '=':
        this.handleEquals();
        break;

      default:
        this.handleNumber(value);
        break;
    }
  }

  /**
   * Handles operator click
   * @param {string} operator
   * @returns {void}
   */
  handleOperator(operator) {
    this.displayValue = this.displayValue === null ?
      null :
      this.displayValue + operator;
  }

  /**
   * Handles number click
   * @param {string} number
   * @returns {void}
   */
  handleNumber(number) {
    if (!this.displayValue) {
      this.displayValue = number;
    } else {
      this.displayValue += number;
    }
  }

  handleDelete() {
    if (this.displayValue.length > 0) {
      this.displayValue = this.displayValue.slice(0, -1);
    }
  }

  handleReset() {
    this.displayValue = null;
    this.total = 0;
  }

  handleEquals() {
    // eslint-disable-next-line no-eval
    this.total = eval(this.displayValue);
    this.displayValue = this.total.toString();
  }
}
