import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import pinia from './stores/pinia'
import '@fortawesome/fontawesome-free/js/all'
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
