import { createApp } from 'vue'
import App from './App.vue'
import TheUserList from './views/TheUserList'

import './theme.css'

import VueAxios from 'vue-axios';
import api from './plugins/api';

createApp(App).use(VueAxios, api).component('the-userlist', TheUserList).mount('#app')

// .use(VueAxios, api)