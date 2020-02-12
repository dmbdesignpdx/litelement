import {
  html,
  LitElement,
  customElement,
  property,
  css,
  CSSResult,
  TemplateResult,
} from 'lit-element';

import { pre } from '../styles';


@customElement(`card-primary`)
export class CardPrimary extends LitElement {

  @property({ type: String })
  title =  ``;

  @property({ type: String })
  copy =  ``;
  

  static styles: Array<CSSResult> = [
    pre,
    css`
      :host {
        display: block;
        grid-column: span 4;
        margin-block-start: 30px;
      }

      article {
        block-size: 100%;
        padding: 30px;
        box-sizing: border-box;
        contain: layout;
        border-radius: 10px;
        background: #EEE;
        box-shadow: 0 2px 5px hsla(0,0%,0%,0.2);
      }

      h1 {
        font-size: 1.2rem;
        color: red;
      }

      p {
        margin-block-start: 1em;
      }
    `
  ]

  render(): TemplateResult {
    return html`
      <article>
        <h1>${this.title}</h1>
        <p>${this.copy}</p>
      </article>
    `;
  }
}
