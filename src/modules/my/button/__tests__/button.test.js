import { createElement } from 'lwc'
import Button from 'my/button';

describe('my-button', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('displays number values', () => {
    const element = createElement('my-screen', {
      is: Button
    });
    element.value = '7';
    document.body.appendChild(element);

    const value = element.shadowRoot.querySelector('.value');
    expect(value.textContent).toEqual('7');
  })
})
