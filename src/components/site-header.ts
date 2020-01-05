import {
  html,
  LitElement,
  customElement,
  property
} from 'lit-element'


@customElement('site-header' as string)
export class SiteHeader extends LitElement {
  
  @property({ type: String })
  emote = ``

  render() {
    return html`
      <header
        id="Hero"
        data-wrap
      >

        <h1>${this.emote} LitElement ${this.emote}</h1>

        <p>Web Components built with LitElement and lit-html.</p>

      </header>
    `
  }

  createRenderRoot() {
    return this
  }
}
