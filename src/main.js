import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://api.realworld.io/api/';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/json';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
