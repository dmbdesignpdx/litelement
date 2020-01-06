import {
  LitElement,
  html,
  css,
  customElement,
  property,
  CSSResult,
  TemplateResult,
} from 'lit-element'
import { pre } from '../styles'


@customElement('site-footer' as string)
export class SiteFooter extends LitElement {

  @property({ type: String })
  home = `/home`

  static styles: Array<CSSResult> = [
    pre,
    css`
      :host {
        display: block;
        margin-block-start: 10vh;
        background: #EEE;
      }

      footer {
        padding-block: 60px 90px;
      }
    `
  ]

  render(): TemplateResult {
    return html`
      <footer data-wrap>
        <a href=${this.home}>Home</a>
      </footer>
    `
  }
}
