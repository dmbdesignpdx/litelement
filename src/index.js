import './layout/head'
import './layout/site-root'

import './components/site-nav'
import './components/card-primary'
import './components/site-header'
import './components/site-footer'

import './components/card-skeleton'


const ns = document.querySelector(`#remove`)
ns.parentElement.removeChild(ns)
