// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@unocss/nuxt',   '@nuxt/content',  '@nuxt/image-edge',
    ],
    unocss: {
        preflight: true,
        uno: true,
    }
    })
    