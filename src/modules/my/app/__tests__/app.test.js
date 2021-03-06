// These tests are examples to get you started on how how to test
// Lightning Web Components using the Jest testing framework.
//
// See the LWC Recipes Open Source sample application for many other
// test scenarios and best practices.
//
// https://github.com/trailheadapps/lwc-recipes-oss

import { createElement } from 'lwc';
import MyApp from 'my/app';

describe('my-app', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('contains the calculator component', () => {
    const element = createElement('my-app', {
      is: MyApp
    });
    document.body.appendChild(element);

    const calculator = element.shadowRoot.querySelector('my-calculator');

    expect(calculator.target).not.toBeNull();
  });
});
