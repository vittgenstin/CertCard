import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import Ctd from './plugin/Ctd'

/*
  If you don't want to use mock-server
  you want to use MockJs for mock api
  you can execute mockXHR()

  Currently MockJs Will be used in the production enviroment,
  please remove it before going online!!!
*/
import { mockXHR } from '../mock'

import * as filters from '@/filters'

Vue.use(Ctd)
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
