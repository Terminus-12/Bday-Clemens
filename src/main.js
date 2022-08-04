import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/main.css";

const app = createApp(App)
app.use(Router)
app.mount('#app')
