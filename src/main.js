import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './Router';
import './assets/styles.scss'
import i18n from '@/localization/index'
import store from '@/store'

new Vue({
  i18n,
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app');
