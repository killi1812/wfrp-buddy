/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */



// plugins
import { registerPlugins } from '@/plugins'


// extensions


// components
import App from './App.vue'

// composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
