import Vue from 'vue'
import App from './App.vue'
import 'bootstrap' 
import jquery from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


window.$ = window.jquery =jquery
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false





new Vue({
  render: h => h(App),
}).$mount('#app')
