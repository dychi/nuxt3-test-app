import { worker } from "@/mocks/browser"

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  if (config.DEBUG) {
    await worker.start({
      onUnhandledRequest: "bypass",
    })
    console.log("worker started")
  }
})
