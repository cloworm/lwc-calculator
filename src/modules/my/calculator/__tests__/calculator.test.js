import { createElement } from 'lwc'
import Calculator from 'my/calculator';

function createEvent(name, value) {
  return new CustomEvent(name, { detail: value });
}

describe('my-calculator', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('adds 2+2', async () => {
    const element = createElement('my-screen', {
      is: Calculator
    });
    document.body.appendChild(element);

    const two = createEvent('buttonclick', '2');
    const plus = createEvent('buttonclick', '+');
    const equals = createEvent('buttonclick', '=');
    const keypad = element.shadowRoot.querySelector('my-keypad');
    keypad.dispatchEvent(two);

    const screen = element.shadowRoot.querySelector('my-screen');

    await Promise.resolve();
    expect(screen.value).toEqual('2');

    keypad.dispatchEvent(plus);

    await Promise.resolve();
    expect(screen.value).toEqual('2+');

    keypad.dispatchEvent(two);

    await Promise.resolve();
    expect(screen.value).toEqual('2+2');

    keypad.dispatchEvent(equals);

    await Promise.resolve();
    expect(screen.value).toEqual('4');
  })
})
