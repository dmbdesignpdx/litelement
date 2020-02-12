import {
  LitElement,
  html,
  css,
  customElement,
  property,
  CSSResult,
  TemplateResult,
} from 'lit-element'
import { pre } from '../styles';


const styles: CSSResult = css`
  :host {
    display: block;
    margin-block-start: 10vh;
    background: #EEE;
  }

  footer {
    padding-block-start: 60px;
    padding-block-end: 90px;
  }
`;


@customElement('site-footer')
export class SiteFooter extends LitElement {

  @property({ type: String })
  home = `/home`;

  static styles: Array<CSSResult> = [
    pre,
    styles,
  ];

  render(): TemplateResult {
    return html`
      <footer data-wrap>
        <a href=${this.home}>Home</a>
      </footer>
    `;
  }
}
