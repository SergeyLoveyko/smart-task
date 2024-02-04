import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheUserList from './views/TheUserList'

import './theme.css'

import VueAxios from 'vue-axios';
import api from './plugins/api';

createApp(App)
  .use(router)
  .use(VueAxios, api)
  .component('the-userlist', TheUserList)
  .mount('#app')
