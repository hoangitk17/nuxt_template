// https://nuxt.com/docs/api/configuration/nuxt-config
const DEFAULT_PORT = 3001
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/global.scss" as *;',
        },
      },
    },
  },
  devServer: {
    port: (process.env.NUXT_PUBLIC_PORT as any) || DEFAULT_PORT,
  },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  modules: [
    // With options
    '@pinia/nuxt',
    [
      '@nuxtjs/eslint-module',
      {
        cache: true,
        fix: true,
        failOnError: false,
        lintOnStart: false,
      },
    ],
  ],

  // https://nuxt.com/docs/guide/going-further/runtime-config
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      port: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
})
