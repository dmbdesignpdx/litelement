import {
  LitElement,
  html,
  css,
  customElement,
  property,
} from 'lit-element'
import { pre } from '../styles'


const styles = css`
  :host {
    display: block;
    margin-block-start: 10vh;
    background: #EEE;
  }

  footer {
    padding-block: 60px 90px;
  }
`


@customElement('site-footer')
export class SiteFooter extends LitElement {

  @property({ type: String })
  home = `/home`

  static styles = [
    pre,
    styles,
  ]

  render() {
    return html`
      <footer data-wrap>
        <a href=${this.home}>Home</a>
      </footer>
    `
  }
}
