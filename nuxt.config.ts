export default defineNuxtConfig({
  css: ['@/css/tailwind.css'],

  modules: ['@kevinmarrec/nuxt-pwa'],

  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {}
    }
  },

  srcDir: 'src',

  typescript: {
    typeCheck: true
  }
})
