import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index';

import '@/init';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
