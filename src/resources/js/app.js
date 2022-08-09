import './bootstrap';
import '../sass/app.scss'
import { createApp } from 'vue/dist/vue.esm-bundler';

import App from './App.vue';
const app = createApp(App);

app.mount('#app');
