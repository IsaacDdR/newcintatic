export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cintatic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  fontawesome: {
    icons: {
      solid: [
        'faQuestion',
        'faPhone',
        'faPiggyBank',
        'faDraftingCompass',
        'faMicrochip',
        'faHeadset',
        'faGlobe',
        'faBolt',
        'faPlay',
        'faLock',
        'faAngleDoubleRight',
      ],
      brands: ['faFacebook', 'faInstagram', 'faGoogle', 'faWhatsapp'],
    },
  },

  sitemap: {
    hostname: 'https://www.cintatic.com',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dl8qww4c7/image/upload/',
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/aos.client',
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false },
    { src: '@/plugins/vue-carousel', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxt/image',

    'nuxt-vite',

    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-scrollto/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    // 'nuxt-i18n',

    'nuxt-helmet',

    '@nuxtjs/robots',

    'nuxt-rfg-icon',

    '@nuxtjs/sitemap',
  ],

  /*
  i18n: {
    defaultLocale: 'es',
    locales: [
      {
        name: 'English',
        code: 'en',
        file: 'en-US.js',
      },
      {
        name: 'Español',
        code: 'es',
        file: 'es-ES.js',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
    },
    vueI18n: {
      fallbackLocale: 'es',
    },
    lazy: true,
    langDir: 'lang/',
  },
  */

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  server: {
    host: '0.0.0.0',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es',
    },
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCss: true,
  },
}
