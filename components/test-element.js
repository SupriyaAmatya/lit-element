import { LitElement, html, css } from 'lit-element';

export class TestElement extends LitElement {
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
        color: red; 
        padding: 1rem; 
        background: whitesmoke
      }
    `;
  }

  static get properties() {
    return {
      message: { type: String },
      array: { type: Array },
      disabled: { type: Boolean },
      value: { type: String }
    }
  }

  constructor() {
    super();

    this.message = "Hello World";
    this.array = ['red', 'blue', 'green', 'orange'];
    this.value = "Some text"
    // this.disabled = true
  }

  render() {
    return html`
      <h2 class="test">Hello From test Element</h2>

      <p>${this.message}</p>

      <ul>
        ${this.array.map(i => html`<li>${i}</li>`)}
      </ul>
      
      ${this.disabled
        ? html`<p>Truthy value</p>`
        : html`<p>Falsy value</p>`}
      
      <div>
        <label>Input: </label>
        <input type="text" .value="${this.value}" ?disabled="${this.disabled}">
      </div>

      <h3>Slot rendering</h3>
      <slot></slot>
      <slot name="one"></slot>
    `;
  }
  // createRenderRoot() {
  //   /**
  //    * Render template without shadow DOM. Note that shadow DOM features like
  //    * encapsulated CSS and slots are unavailable.
  //    */
  //     return this;
  //   }
}

customElements.define('test-element', TestElement);
