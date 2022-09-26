const production = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  css: ['@/css/tailwind.css'],

  modules: ['@kevinmarrec/nuxt-pwa'],

  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
      ...(production ? { cssnano: {} } : {})
    }
  },

  srcDir: 'src',

  typescript: {
    typeCheck: true
  }
})
