// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/ionic", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@formkit/auto-animate/nuxt"],
  css: ['@ionic/vue/css/palettes/dark.always.css', '~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      title: 'Nuxonic',
      meta: [
        { name: 'description', content: 'Your app description here' },
        { name: 'keywords', content: 'your, keywords, here' },
        { name: 'author', content: 'Your Name' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Your App Title' },
        { property: 'og:description', content: 'Your app description here' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://yourwebsite.com' },
        { property: 'og:image', content: 'https://yourwebsite.com/image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@yourtwitterhandle' },
        { name: 'twitter:title', content: 'Your App Title' },
        { name: 'twitter:description', content: 'Your app description here' },
        { name: 'twitter:image', content: 'https://yourwebsite.com/image.jpg' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      ],
      noscript: [
        { children: 'This webapp requires JavaScript.' }
      ]
    }
  }
});
