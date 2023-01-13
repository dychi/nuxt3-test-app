// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   baseURL: "/nuxt3-test-app",
  //   cdnURL: "/nuxt3-test-app",
  // },
  ssr: false,
  vite: {
    define: {
      "process.env.DEBUG": true,
    },
  },
})
