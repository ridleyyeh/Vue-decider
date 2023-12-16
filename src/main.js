import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
import Toaster from "@meforma/vue-toaster";


const app = createApp(App)


app.use(Toaster)
app.use(router)
app.mount('#app')
