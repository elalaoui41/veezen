export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SurveyProject-15-22-2022',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noindex, nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //'@/static/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/init.js', mode: 'client' },
  ],

  // router middleware
  router: {
    middleware: 'auth',
    linkActiveClass: 'active'
  },

  ssr: true,

  // server middleware
  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' }
  ],

  // middleware
  middleware: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "vue-toastification/nuxt",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/api/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
