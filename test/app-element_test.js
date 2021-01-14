import {AppElement} from '../app-element.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('app-element', () => {
  test('is defined', () => {
    const el = document.createElement('app-element');
    assert.instanceOf(el, AppElement);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<app-element></app-element>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<app-element name="Test"></app-element>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<app-element></app-element>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
