// main.js

import Vue from 'vue';
import App from './src/App.vue';
import store from './src/store/store';

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})