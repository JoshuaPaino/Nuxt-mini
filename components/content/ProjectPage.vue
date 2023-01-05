<template>
    <div class="flex h-auto w-full py-16 px-4 items-center justify-center xl:h-[80vh] xl:py-0">
        <Layout>
            <div class="flex flex-col-reverse gap-8 xl:flex-row">
                <div class="w-full group xl:w-1/2">
                    <nuxt-img format="webp" :src="`${MdImage}`" fit="cover" :alt="`${MdImageName}`" class="rounded-lg object-cover h-140 w-full transition-all group-hover:-rotate-2 transform-gpu duration-300 ease-in-out will-change-transform md:h-120 group-hover:scale-102" />
                </div>
                <div class="flex flex-col w-full gap-4 justify-center xl:w-1/2">

                    <p class="text-gray-800">Go Back</p>
                
                <h1 class="text-gray-800 text-6xl">
                    {{ ProjTitle }}
                </h1>
                <p class="font-normal text-xl text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    <br />
                    <br />
                    {{ ProjDesc}}
                </p>
                <div class="flex flex-col lg:flex-row w-full items-center gap-4 text-center gap-4">
                    <a :href="ViewLink" target="_blank" rel="noopener" class="lg:mt-4 md:w-1/2 w-full bg-gradient-to-tl  rounded-full mx-auto from-violet-500 to-sky-500 p-2 hover:bg-gradient-to-tl hover:from-violet-400 hover:to-sky-400"><button>View Live</button></a>
                    <a :href="GitLink" class="lg:mt-4 md:w-1/2 border border-black w-full p-2 border-gradient-to-tl rounded-full  hover:bg-sky-300"  target="_blank" rel="noopener"><button >Visit Git</button></a>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script setup lang="ts">

defineProps<{
  ViewLink: string,
  GitLink: string,
  FrameworkIcon: string,
  MdImage: string,
  MdImageName: string,
  ProjDesc: string,
  ProjTitle: string,
}>()
</script>
