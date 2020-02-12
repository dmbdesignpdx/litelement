import {
  LitElement,
  html,
  css,
  customElement,
  property,
  CSSResult,
  TemplateResult,
} from 'lit-element';

import { pre } from '../styles';


const styles: CSSResult = css`
  header {
    display: flex;
    block-size: 60vh;
    contain: layout;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    margin-block-start: 1em;
  }
`;


@customElement('site-header')
export class SiteHeader extends LitElement {
  
  @property({ type: String })
  emote = ``;

  static styles: Array<CSSResult> = [
    pre,
    styles,
  ];

  render(): TemplateResult {
    return html`
      <header
        id="Hero"
        data-wrap
      >

        <h1>${this.emote} LIT ${this.emote}</h1>

        <p>Web Components built with LitElement and lit-html.</p>

        <input type="text">

      </header>
    `;
  }
}
