// https://nuxt.com/docs/api/configuration/nuxt-config
const url =
  (process.env.ENV as string) === "development" ? "" : "/nuxt3-test-app"
export default defineNuxtConfig({
  app: {
    baseURL: url,
    cdnURL: url,
  },
  ssr: false,
  runtimeConfig: {
    public: {
      DEBUG: (process.env.ENV as string) === "development",
    },
  },
})
