import {
  LitElement,
  html,
  customElement,
  property,
  css,
  CSSResult,
  TemplateResult,
} from 'lit-element'

import { pre } from '../styles'


@customElement('site-nav' as string)
export class SiteNav extends LitElement {

  static styles: Array<CSSResult> = [
    pre,
    css`
      :host {
        display: block;
        block-size: 90px;
        position: fixed;
        inset-block-start: 0;
        inset-inline: 0;
        z-index: 99;
        background: #FFF;
        border-block-end: 1px solid black;
      }
      
      nav {
        display: flex;
        block-size: 100%;
        justify-content: start;
        align-items: center;
      }

      a {
        margin-inline-end: 1em;
      }
      
      a:first-of-type {
        margin-inline-end: auto;
      }
  `
  ]

  @property({ type: String })
  home = `/home`

  render(): TemplateResult {
    return html`
      <nav data-wrap>
        <a href=${this.home}>Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    `
  }
}
