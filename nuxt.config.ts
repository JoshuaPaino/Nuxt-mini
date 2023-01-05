// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@unocss/nuxt',   '@nuxt/content'
    ],
    unocss: {
        preflight: true,
        uno: true,
    }
    })
    