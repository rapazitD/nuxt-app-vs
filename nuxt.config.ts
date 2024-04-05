// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ '@nuxtjs/tailwindcss', 'nuxt-svgo' ],
  svgo: {
    defaultImport: 'component'
  },
  app: {
    head: {
      title: 'Vue School | The #1 source for learning Vue.js from experts',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {name: 'description', content: 'The prefect  place to learn Vue and Nuxt'}
      ]
    }
  },
  css: ['./public/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
