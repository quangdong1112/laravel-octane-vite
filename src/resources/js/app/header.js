import NavHeader from '../components/NavHeader.vue';
import { createApp } from 'vue';

const app = createApp({});
app.component('navheader', NavHeader);
app.mount('#header');