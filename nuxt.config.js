import i18n from "./i18n";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "burooj-drones",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Burooj Air is a drone company based in Saudi Arabia, specializing in industrial and commercial drone solutions." },
      { hid: 'og:title', property: 'og:title', content: 'Burooj Air - Drone Company in Saudi Arabia' },
      { hid: 'og:description', property: 'og:description', content: 'Burooj Air is a drone company based in Saudi Arabia, specializing in industrial and commercial drone solutions.' },
      { hid: 'og:image', property: 'og:image', content: '/images/BuroojAir.png' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.buroojair.com/' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Burooj Air - Drone Company in Saudi Arabia' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Burooj Air is a drone company based in Saudi Arabia, specializing in industrial and commercial drone solutions.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/images/BuroojAir.png' },
      { name: "format-detection", content: "telephone=no" },
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],
  styleResources: {
    scss: [
      "bootstrap/scss/bootstrap.scss",
      "~assets/scss/abstracts.scss/_mixin.scss",
      "~assets/scss/abstracts.scss/_variables.scss",
      "~assets/scss/base.scss/_reset.scss",
      "~assets/scss/base.scss/_typography.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      "~/components",
      // "~/components/en",
      // "~/components/ar"
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
    // https://go.nuxtjs.dev/axios
    //'@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    //'@nuxt/content',
    "@nuxtjs/i18n",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    hardSource: false,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
  },

  i18n,
};
