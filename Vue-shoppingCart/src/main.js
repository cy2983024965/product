
import Vue from 'vue'
import App from './App'
import store from "./store"

import "./css/style.css"

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
