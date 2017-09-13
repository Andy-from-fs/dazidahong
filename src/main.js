import Vue from 'vue'
import VueRoute from 'vue-router'
import Router from './lib/route.js';
import App from './App.vue'

export default new Vue({
  el: '#app',
  render: h => h(App)
})
