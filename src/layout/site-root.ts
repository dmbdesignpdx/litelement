import {
  LitElement,
  html,
  css,
  customElement,
  CSSResult,
  TemplateResult,
} from 'lit-element'

import { pre } from '../styles'


type Data = {
  name: string,
  model: string,
  manufacturer: string,
}

const accent: string = `🔥`

const data: Data = {
  name: `Hello there.`,
  model: `I am a card.`,
  manufacturer: `Some little info.`,
}

@customElement('site-root' as string)
export class SiteRoot extends LitElement {

  static styles: Array<CSSResult> = [
    pre,
    css``
  ]

  render(): TemplateResult {
    return html`
      <site-header .emote=${accent}></site-header>

      <site-nav .home=${"/"}></site-nav>

      <main data-grid>

        <card-primary .data=${data}></card-primary>

      </main>

      <site-footer .home=${"/"}></site-footer>`
  }
}
