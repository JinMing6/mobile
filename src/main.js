import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
import '@/utils/mobileRem'
import router from '@/router'

const app = createApp(App)

app.use(router)

app.mount('#app')