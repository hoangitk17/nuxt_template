//https://nuxt.com/docs/guide/directory-structure/middleware

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('auth middleware', to, from)
})
