// https://nuxt.com/docs/api/configuration/nuxt-config

import eslintPlugin from 'vite-plugin-eslint';
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      port: 3000,
    },
    plugins: [
      eslintPlugin({
        cache: true,
        fix: true,
        failOnError: false,
      })
    ]
  },
  typescript: {
    shim: false,
  },
})
