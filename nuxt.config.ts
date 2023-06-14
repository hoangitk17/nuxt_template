// https://nuxt.com/docs/api/configuration/nuxt-config

import eslintPlugin from 'vite-plugin-eslint';
export default defineNuxtConfig({
  devtools: { enabled: true },
  // vite: {
  //   server: {
  //     port: 3000,
  //   },
  //   plugins: [
  //     eslintPlugin({
  //       cache: true,
  //       fix: true,
  //       failOnError: false,
  //     })
  //   ]
  // },
  typescript: {
    shim: false,
  },
  modules: [

    // With options
    ['@nuxtjs/eslint-module', {
      cache: true,
      fix: true,
      failOnError: false,
      include: ['./**/*.{js,jsx,ts,tsx,vue}']
    }],
    '@pinia/nuxt'
  ],

  // https://nuxt.com/docs/guide/going-further/runtime-config
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
})
