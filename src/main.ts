import { createApp } from 'vue'
import { createPinia } from 'pinia'

import * as components from 'vuetify/components' // ✅ 关键
import * as directives from 'vuetify/directives' // ✅ 关键

import App from './App.vue'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#121212',
          primary: '#BB86FC',
          secondary: '#03DAC6',
          accent: '#FF4081',
          error: '#CF6679',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)

app.mount('#app')
