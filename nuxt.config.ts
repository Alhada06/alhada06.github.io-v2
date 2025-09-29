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
    "@nuxtjs/i18n",
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

  i18n: {
    strategy: "no_prefix",

    langDir: "locales",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "pt", name: "Português", file: "pt.json" },
    ],

    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      // cookieCrossOrigin: true,
      cookieKey: "i18n_locale",
      redirectOn: "root", // recommended
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
