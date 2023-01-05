<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 gap-8 2xl:px-0">
        <template v-for="proj in Projects" :key="proj.id">
            <div class="group">
                <img :src="`~/assets/img/${proj.image}.png`" class="rounded-lg cursor-pointer object-cover h-12 h-120 w-full transform-gpu transition-all duration-300 ease-in-out will-change-transform group-hover:scale-102 group-hover:group-odd:rotate-2 group-hover:group-even:-rotate-2" :alt="proj.alt" width="200" height="480" />
            <div class="flex flex-col py-2">
                <h2 class="text-lg w-full text-gray-800-inline">
                    {{proj.name}}
                </h2>
                <p class="text-base w-full text-gray-800/60 inline">
                  {{proj.name}}
                </p>
            </div>
            </div>
        </template>
    </div>
</template>

<script setup>
const Projects = [
  {
    id: 1,
    name: "Work",
    alt: "Work",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 2,
    name: "Blog",
    alt: "Work",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 3,
    name: "Contact",
    alt: "Work",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 4,
    name: "Contact",
    alt: "Work",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 2,
    name: "Blog",
    alt: "Work",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 3,
    name: "Contact",
    alt: "Work",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 4,
    name: "Contact",
    alt: "Work",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 2,
    name: "Blog",
    alt: "Work",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 3,
    name: "Contact",
    alt: "Work",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 4,
    name: "Contact",
    alt: "Work",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 2,
    alt: "Work",
    name: "Blog",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 3,
    alt: "Work",
    name: "Contact",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
  {
    id: 4,
    alt: "Work",
    name: "Contact",
    desc: "work",
    to: "/",
    image: "Metaverse",
  },
];

</script>