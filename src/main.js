import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './theme.css'

import VueAxios from 'vue-axios';
import api from './plugins/api';

createApp(App)
  .use(router)
  .use(VueAxios, api)
  .mount('#app')