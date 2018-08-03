import Vue from 'vue'
import axios from './http.js'
import App from './App.vue'

Vue.prototype.axios=axios;

new Vue({
  el: '#app',
  render: h => h(App)
})
