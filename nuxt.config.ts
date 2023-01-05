// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@unocss/nuxt',   '@nuxt/content',  '@nuxt/image-edge',
    ],
    unocss: {
        preflight: true,
        uno: true,
    },
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'My App',
          htmlAttrs: {
            lang: "en", 
          },
          meta: [
            { name: 'description', content: 'My amazing site.' }
          ],
        }
      }
    })
    