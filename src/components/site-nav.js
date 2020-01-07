import {
  LitElement,
  html,
  customElement,
  property,
  css,
} from 'lit-element'

import { pre } from '../styles'


const styles = css`
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


@customElement('site-nav')
export class SiteNav extends LitElement {

  @property({ type: String })
  home = `/home`

  static styles = [
    pre,
    styles,
  ]

  render() {
    return html`
      <nav data-wrap>
        <a href=${this.home}>Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    `
  }
}
