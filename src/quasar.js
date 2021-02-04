import Vue from 'vue'

import 'quasar/dist/quasar.css'
import 'quasar/dist/quasar.ie.polyfills'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import lang from 'quasar/lang/zh-hant.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Quasar, Notify } from 'quasar'

Vue.use(Quasar, {
  config: {
    notify: {}
  },
  plugins: {
    Notify
  },
  lang: lang,
  iconSet: iconSet
})
