/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
        margin: 24px auto;
      }
      p{
        border-radius: 4px;
        padding: 16px;
        border: 1px solid #55cff4;
        background: #d3edfc;
      }
      span{
        margin: 0 10px;
      }
    `;
  }

  static get properties() {
    return {
      message: { type: String },
      count: { type: Number },
    };
  }

  constructor() {
    super();

    this.count = 0;
  }

  render() {
    return html`
      <h2>App Counter</h2>
      <p>${this.message} </p>
      <button @click=${this._onClick} part="button">
        +
      </button>
      <span> ${this.count} </span>
      <button @click=${this._onClickReduce} part="button">
        -
      </button>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
  _onClickReduce() {
    this.count--;
  }
}

window.customElements.define('app-element', AppElement);
