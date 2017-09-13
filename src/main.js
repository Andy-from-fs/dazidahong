import 'babel-polyfill';
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './lib/route.js';

Vue.use(VueRouter);

export default new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
