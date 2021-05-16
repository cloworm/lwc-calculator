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

  it('computes 2+2 = 4', async () => {
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

  it('computes 5-10 = -5', async () => {
    const element = createElement('my-screen', {
      is: Calculator
    });
    document.body.appendChild(element);

    const five = createEvent('buttonclick', '5');
    const minus = createEvent('buttonclick', '-');
    const ten = createEvent('buttonclick', '10');
    const equals = createEvent('buttonclick', '=');
    const keypad = element.shadowRoot.querySelector('my-keypad');
    keypad.dispatchEvent(five);

    const screen = element.shadowRoot.querySelector('my-screen');

    await Promise.resolve();
    expect(screen.value).toEqual('5');

    keypad.dispatchEvent(minus);

    await Promise.resolve();
    expect(screen.value).toEqual('5-');

    keypad.dispatchEvent(ten);

    await Promise.resolve();
    expect(screen.value).toEqual('5-10');

    keypad.dispatchEvent(equals);

    await Promise.resolve();
    expect(screen.value).toEqual('-5');
  })

  it('computes 2*3 = 6', async () => {
    const element = createElement('my-screen', {
      is: Calculator
    });
    document.body.appendChild(element);

    const two = createEvent('buttonclick', '2');
    const times = createEvent('buttonclick', 'x');
    const three = createEvent('buttonclick', '3');
    const equals = createEvent('buttonclick', '=');
    const keypad = element.shadowRoot.querySelector('my-keypad');
    keypad.dispatchEvent(two);

    const screen = element.shadowRoot.querySelector('my-screen');

    await Promise.resolve();
    expect(screen.value).toEqual('2');

    keypad.dispatchEvent(times);

    await Promise.resolve();
    expect(screen.value).toEqual('2*');

    keypad.dispatchEvent(three);

    await Promise.resolve();
    expect(screen.value).toEqual('2*3');

    keypad.dispatchEvent(equals);

    await Promise.resolve();
    expect(screen.value).toEqual('6');
  })

  it('computes 3/2 = 1.5', async () => {
    const element = createElement('my-screen', {
      is: Calculator
    });
    document.body.appendChild(element);

    const three = createEvent('buttonclick', '3');
    const divide = createEvent('buttonclick', '/');
    const two = createEvent('buttonclick', '2');
    const equals = createEvent('buttonclick', '=');
    const keypad = element.shadowRoot.querySelector('my-keypad');
    keypad.dispatchEvent(three);

    const screen = element.shadowRoot.querySelector('my-screen');

    await Promise.resolve();
    expect(screen.value).toEqual('3');

    keypad.dispatchEvent(divide);

    await Promise.resolve();
    expect(screen.value).toEqual('3/');

    keypad.dispatchEvent(two);

    await Promise.resolve();
    expect(screen.value).toEqual('3/2');

    keypad.dispatchEvent(equals);

    await Promise.resolve();
    expect(screen.value).toEqual('1.5');
  })
})
