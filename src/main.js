import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { store } from './store/finna.js';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
