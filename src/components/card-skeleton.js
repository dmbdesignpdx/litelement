import {
  LitElement,
  html,
  css,
  customElement,
} from 'lit-element'


const styles = css`
  :host {
    display: block;
    grid-column: span 4;
    margin-block-start: 30px;
  }

  [data-background] {
    block-size: 100px;
    padding: 30px;
    border-radius: 10px;
    background: #EEE;
  }

  [data-title] {
    inline-size: 40%;
    block-size: 1em;
    border-radius: 100px;
    background: #F00;
  }

  [data-copy] {
    margin-block-start: 1.8em;
    inline-size: 80%;
    block-size: 0.8em;
    border-radius: 100px;
    background: #AAA;
  }
`


@customElement('card-skeleton')
export class CardSkeleton extends LitElement {

  static styles = [
    styles,
  ]

  render() {
    return html`
      <div data-background>
        <div data-title></div>
        <div data-copy></div>
      </div>
    `
  }
}
