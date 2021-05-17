import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
  /** @type {number} */
  displayValue;
  /** @type {number} */
  total = 0;
  /** @type {string} */
  operator = null;
  /** @type {boolean} */
  replace = true;

  /**
   * Route keypad clicks to their handlers
   * @param {Object} event 
   * @return {void}
   */
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
   * Applies math operators
   * @param {string} operator
   * @returns {void}
   */
  handleOperator(operator) {
    if (this.operator) {
      this.handleEquals();
    }

    this.operator = operator;
    this.replace = true;
  }

  /**
   * Handles numbers
   * @param {number} number
   * @returns {void}
   */
  handleNumber(number) {
    if (this.replace) {
      this.displayValue = number;

      if (!this.total) {
        this.total = this.displayValue;
      }
    } else {
      this.displayValue = Number(this.displayValue.toString() + number.toString());
    }

    this.replace = false;
  }

  /**
   * Handles delete
   * 
   */
  handleDelete() {
    if (this.displayValue && this.displayValue.toString().length > 0) {
      this.displayValue = +this.displayValue.toString().slice(0, -1);
    }
  }

  handleReset() {
    this.total = 0;
    this.displayValue = null;
    this.replace = true;
    this.operator = null;
  }

  handleEquals() {
    if (!this.displayValue || !this.operator) {
      this.displayValue = null;
      return;
    }
    
    switch (this.operator) {
      case '+':
        this.total = this.total + this.displayValue;
        this.displayValue = this.total;
        break;

      case '-':
        this.total = this.total - this.displayValue;
        this.displayValue = this.total;
        break;

      case '*':
        this.total = this.total * this.displayValue;
        this.displayValue = this.total;
        break;

      case '/':
        this.total = this.total / this.displayValue;
        this.displayValue = this.total;
        break;
    
      default:
        break;
    }
  }
}
