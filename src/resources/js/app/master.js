import Master from '../components/Master.vue';
import { createApp } from 'vue';

const app = createApp({});
app.component('master', Master);
app.mount('#app');