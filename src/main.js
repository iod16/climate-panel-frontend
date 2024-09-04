import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import vuetify from './plugins/vuetify';
import 'vuetify/styles';

axios.defaults.baseURL = 'http://mydashboard.local:8000';

const app = createApp(App);

app.use(vuetify);
app.config.globalProperties.$axios = axios;
app.mount('#app');
