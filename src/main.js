import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './Router';
import './assets/styles.scss'
import i18n from '@/localization/index'



Vue.config.productionTip = false;    

new Vue({
  i18n,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
