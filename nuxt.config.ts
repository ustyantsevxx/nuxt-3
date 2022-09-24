export default defineNuxtConfig({
  modules: ['@nuxtjs/pwa'],

  css: ['@/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  srcDir: 'src'
})
