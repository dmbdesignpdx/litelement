import {
  html,
  render,
  TemplateResult
} from 'lit-html'
import { until } from 'lit-html/directives/until'


const accent: string = `🔥`

const starships: Promise<TemplateResult> =
  fetch(`https://swapi.co/api/starships`)
    .then(res => res.status === 200 && res.json())
    .then(data => data.results
      .map(item => html`<card-primary .data=${item}></card-primary>`)
    )

const root: TemplateResult = html`

  <site-header .emote=${accent}></site-header>

  <site-nav .home=${"/"}></site-nav>

  <main data-grid>

    ${until(starships, html`<p>Loading...</p>`)}

  </main>

  <footer></footer>

`


render(root, document.querySelector(`#root`))
