// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
// Vue.use(VueMaterial)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

import Axios from 'axios'
Vue.$http = Axios

Axios.defaults.baseURL = 'https://dev-iccs340-homework2.herokuapp.com/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true

Vue.config.productionTip = false

import UsersApi from '@/api/users.js'
UsersApi.checkLoggedIn()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
