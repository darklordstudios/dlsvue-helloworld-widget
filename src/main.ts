import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimveVue from 'primevue/config'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(PrimveVue)

app.mount('#app')
