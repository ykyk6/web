import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import animate from 'animate.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Swal from 'sweetalert2/src/sweetalert2.js'
// import eva from 'eva-icons'
// import SweetScroll from 'sweet-scroll'
// import Parallax from 'parallaxjs'
// import { Notify } from 'quasar'
import './quasar'

Vue.config.productionTip = false

axios.defaults.withCredentials = true

Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(animate)
Vue.use(vuescroll)

new Vue({
  mounted () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
