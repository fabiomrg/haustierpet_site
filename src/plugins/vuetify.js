// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#FFFFFF',
        secondary: '#050B1F',
        accent: '#ff8080',
      },
      dark: {
        primary: '#4f6b4b',
        secondary: '#0B1C3D',
        accent: '#204165',
      },
    },
  },
})
