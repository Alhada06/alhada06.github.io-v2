// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/alhada06.github.io-v2/",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/apollo",
  ],
  css: ["~/assets/css/main.css"],
  icon: {
    provider: "iconify",
    serverBundle: false,
  },
  apollo: {
    autoImports: true,
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint:
          "https://graphql.contentful.com/content/v1/spaces/" +
          process.env.NUXT_CONTENTFUL_SPACE,
        httpLinkOptions: {
          headers: {
            Authorization: `Bearer ${process.env.NUXT_CONTENTFUL_PUBLIC_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },

          credentials: "same-origin",
        },
        connectToDevTools: false,
        tokenName: "apollo:diogo-alhada.token",
        tokenStorage: "cookie",
        authType: "Bearer",
        authHeader: "Authorization",
      },
    },
  },
});
