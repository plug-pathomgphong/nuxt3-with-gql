// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/content",
    "@vite-pwa/nuxt",
    '@nuxtjs/apollo'
  ],
  runtimeConfig:{
    githubToken: process.env.GITHUB_TOKEN
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: "Nuxt 3 Protfolio",
      short_name: "Protfolio",
      description: "Testing Nuxt 3 PWA",
      theme_color: "#4DBA87",
      icons: [
        {
          src: "./images/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./images/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./images/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./images/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      start_url: ".",
      display: "standalone",
      background_color: "#000000",
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: process.env.VITE_DEV_PWA === 'true',
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module', // classic, module
    },
    /* PWA options */
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "nord",
      preload: ["ts", "js", "css", "java", "json", "bash", "vue"],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  apollo: {
    clients: {
      default: {
        tokenName:'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    },
  },
});
