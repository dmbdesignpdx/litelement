import {
  LitElement,
  html,
  css,
  customElement,
} from 'lit-element'
import { until } from 'lit-html/directives/until'

import { pre } from '../styles'


const styles = css``


@customElement('site-root')
export class SiteRoot extends LitElement {

  accent = `🔥`

  get hello() { 
    return fetch(`/data/hello.json`)
      .then(res => res.json())
      .then(data => data.map(item =>
        html`
          <card-primary
            .title=${item.title}
            .copy=${item.copy}
          ></card-primary>
        `  
      ))
  }

  get hold() {
    return html`
      <card-skeleton></card-skeleton>
      <card-skeleton></card-skeleton>
      <card-skeleton></card-skeleton>
    `
  }

  static get styles() {
    return [
      pre,
      styles,
    ]
  }

  render() {
    console.log(this)
    return html`
      <site-header .emote=${this.accent}></site-header>

      <site-nav .home=${"/"}></site-nav>

      <main data-grid>

        ${until(this.hello, this.hold)}

      </main>

      <site-footer .home=${"/"}></site-footer>`
  }
}
