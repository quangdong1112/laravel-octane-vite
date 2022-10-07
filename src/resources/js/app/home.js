import HomeContent from '../pages/Home.vue';
import { createApp } from 'vue';

const app = createApp({});
app.component('content', HomeContent);
app.mount('#home');