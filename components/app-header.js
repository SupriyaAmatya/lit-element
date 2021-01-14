import {LitElement, html} from 'lit-element';

class AppHeader extends LitElement{
  render(){
    return html `<h1 style="text-align: center">App header component</h1>`
  }
}

customElements.define('app-header', AppHeader);
