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

  pwa: {
    meta: {
      theme_color: '#000000'
    }
  },

  srcDir: 'src',

  typescript: {
    typeCheck: true
  }
})
