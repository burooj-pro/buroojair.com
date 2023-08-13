import i18n from "./i18n";

export default {
  target: "static",
  ssr: false,

  head: {
    title: "burooj-drones",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Burooj Air is a drone company based in Saudi Arabia, specializing in industrial and commercial drone solutions." },
      { hid: 'og:title', property: 'og:title', content: 'Burooj Air' },
      { hid: 'og:description', property: 'og:description', content: 'Drone company based in Saudi Arabia, specializing in industrial and commercial drone solutions.' },
      { hid: 'og:image', property: 'og:image', content: 'https://buroojair.com/images/BuroojAir.png' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.buroojair.com/' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Burooj Air' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Drone company based in Saudi Arabia, specializing in industrial and commercial drone solutions.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://buroojair.com/images/BuroojAir.png' },

      { name: "format-detection", content: "telephone=no" },
    ],
  },

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

  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],

  components: {
    dirs: [
      "~/components",
    ],
  },

  buildModules: [],

  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/i18n",
  ],

  axios: {
    baseURL: "/",
  },


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
