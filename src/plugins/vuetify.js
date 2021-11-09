import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify);

export default new Vuetify({
  theme: { dark: false },
  icons: { iconfont: 'fa' || 'md' }
});
