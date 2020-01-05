import {
  LitElement,
  html,
  customElement,
  property,
  css,
} from 'lit-element'


@customElement('site-nav' as string)
export class SiteNav extends LitElement {

  static styles = css`
    nav {
      display: flex;
      block-size: 90px;
      padding-inline: 30px;
      position: fixed;
      inset-block-start: 0;
      inset-inline: 0;
      z-index: 99;
      justify-content: start;
      align-items: center;
      background: #FFF;
    }

    a {
      margin-inline-end: 1em;
    }
    
    a:first-of-type {
      margin-inline-end: auto;
    }
  `

  @property({ type: String })
  home = `/home`

  render() {
    return html`
      <nav>
        <a href=${this.home}>Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    `
  }
}
