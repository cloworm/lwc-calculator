import { createElement } from 'lwc'
import Screen from 'my/screen';

describe('my-screen', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('displays the value 0 by default', () => {
    const element = createElement('my-screen', {
      is: Screen
    });
    document.body.appendChild(element);

    const value = element.shadowRoot.querySelector('.value');
    expect(value.textContent).toEqual('0');
  })

  it('formats values', () => {
    const element = createElement('my-screen', {
      is: Screen
    });
    element.value = 1000;
    document.body.appendChild(element);

    const value = element.shadowRoot.querySelector('.value');
    expect(value.textContent).toEqual('1,000');
  })
})
