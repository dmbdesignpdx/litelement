import { Head } from './layout/head';
import './layout/site-root';

import './components/site-nav';
import './components/card-primary';
import './components/site-header';
import './components/site-footer';

import './components/card-skeleton';


Head([
  {
    type: `meta`,
    name: `description`,
    content: `this is some text.`,
  },
]);

const ns: HTMLDivElement = document.querySelector(`#remove`);

ns.parentElement.removeChild(ns);
