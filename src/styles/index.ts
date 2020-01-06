import { css } from 'lit-element'

export const pre = css`
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
dl,
menu,
dd,
hr,
pre,
button,
input,
select,
textarea,
fieldset,
legend,
figure,
blockquote,
iframe,
dialog {
  padding: 0;
  margin: 0;
  border: 0;
}

input,
select,
progress,
meter {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

ol,
ul {
  list-style: none;
}


a,
abbr {
  text-decoration: none;
}

dfn,
address {
  font-style: normal;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

input,
select,
button,
textarea {
  font: inherit;
}

video,
img,
object,
svg,
iframe,
embed {
  display: block;
}

a {
  font-weight: 700;
  color: inherit;
  white-space: nowrap;
}

a,
select,
button,
[role=button] {
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2;
  text-rendering: geometricPrecision;
}

p {
  letter-spacing: 0.01em;
  line-height: 1.5;
  -moz-hyphens: none;
  -webkit-hyphens: none;
  hyphens: none;
}

:focus {
  outline: 0;
}

::-moz-focus-inner {
  border: 0;
}

[data-wrap],
[data-grid] {
  padding-inline: 18px;
  margin-inline: auto;
}

[data-grid] {
  display: grid;
  grid: none / repeat(12, 1fr);
  column-gap: 18px;
}

@media (min-width:540px) {

}

@media (min-width:766px) {

  [data-wrap],
  [data-grid] {
    padding-inline: 24px;
  }

  [data-grid] {
    column-gap: 24px;
  }

}


@media (min-width:810px) and (max-height:416px) {
  [data-wrap],
  [data-grid] {
    padding-inline: env(safe-area-inset-right);
  }
}


@media (min-width:1022px) {

}

@media (min-width:1278px) {

  html {
    font-size: 1.25em;
  }

  [data-wrap],
  [data-grid] {
    inline-size: 84%;
    max-inline-size: 1436px;
    padding-inline: 30px;
  }

  [data-grid] {
    column-gap: 30px;
  }

}

@media (min-width:1678px) {

  html {
    font-size: 1.38em;
  }

}

`

export const helpers = css`
.long {
  text-rendering: optimizeSpeed;
}

.clearme {
  clear: both;
}

.nobr {
  white-space: nowrap;
}
`

export const support = css`
@supports (-webkit-app-region:drag) {

}

@supports (-webkit-marquee:revert) {

}

@supports (-moz-orient:vertical) {

}

@supports (-ms-ime-align:auto) {

}
`


export const os = css`
@media (prefers-reduced-motion:reduce) {

}

@media (prefers-color-scheme:dark) {

}
`

