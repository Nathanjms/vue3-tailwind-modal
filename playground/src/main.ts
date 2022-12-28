import { createApp } from 'vue'
import App from './App.vue'
import InstallPlugin from 'vue3-tailwind-modal';
import '../../src/styles/main.scss';
import './style.css';


const app = createApp(App);
app.use(InstallPlugin());
createApp(App).mount('#app')
