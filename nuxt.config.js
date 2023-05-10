export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr:false,


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'burooj-drones',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    
    
    
  ],
  styleResources: {
    scss: [
      
           'bootstrap/scss/bootstrap.scss', 
           '~assets/scss/abstracts.scss/_mixin.scss',
           '~assets/scss/abstracts.scss/_variables.scss',
           '~assets/scss/base.scss/_reset.scss',
           '~assets/scss/base.scss/_typography.scss', 
          
           
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/bootstrap.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/en',
      '~/components/ar',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    //'@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    //'@nuxt/content',
  
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    hardSource: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    }
  },

}
