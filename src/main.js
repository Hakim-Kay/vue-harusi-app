import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { registerSW  } from "virtual:pwa-register";

const updateSW = registerSW({
    onNeedRefresh() {
        // Show a prompt to user
    },
    onOfflineReady() {
        // Show a ready to work offline to user
    },
})

createApp(App).mount('#app')
