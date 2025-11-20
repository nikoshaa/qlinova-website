export default defineNuxtConfig({
  nitro: {
    preset: 'static',
  },

  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
