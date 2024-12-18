import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Global from './components/ComponentRegistration/Global.vue'

const app = createApp(App);

app.component('Global', Global);

app.mount('#app');

