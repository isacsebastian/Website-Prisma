// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device'
  ],

  css: ['~/assets/styles/main.scss'],

  googleFonts: {
    families: {
      Inter: [300, 400, 600, 700],
      'Plus Jakarta Sans': [300, 400, 600, 700]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true
  },

  image: {
    format: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 375,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Prisma - Agencia Web',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Agencia web especializada en diseño y animaciones' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
