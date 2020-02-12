import { css, CSSResult } from 'lit-element';

export const pre: CSSResult = css`
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
  padding-inline-start: 18px;
  padding-inline-end: 18px;
  margin-inline-start: auto;
  margin-inline-end: auto;
}

[data-grid] {
  display: grid;
  grid: auto-flow / repeat(12, 1fr);
  column-gap: 18px;
}

@media (min-width:540px) {

}

@media (min-width:766px) {

  [data-wrap],
  [data-grid] {
    padding-inline-start: 24px;
    padding-inline-end: 24px;
  }

  [data-grid] {
    column-gap: 24px;
  }

}


@media (min-width:810px) and (max-height:416px) {
  [data-wrap],
  [data-grid] {
    padding-inline-start: env(safe-area-inset-right);
    padding-inline-end: env(safe-area-inset-right);
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
    padding-inline-start: 30px;
    padding-inline-end: 30px;
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

`;

export const helpers: CSSResult = css`
.long {
  text-rendering: optimizeSpeed;
}

.clearme {
  clear: both;
}

.nobr {
  white-space: nowrap;
}
`;

export const support: CSSResult = css`
@supports (-webkit-app-region:drag) {

}

@supports (-webkit-marquee:revert) {

}

@supports (-moz-orient:vertical) {

}

@supports (-ms-ime-align:auto) {

}
`;


export const os: CSSResult = css`
@media (prefers-reduced-motion:reduce) {

}

@media (prefers-color-scheme:dark) {

}
`;
