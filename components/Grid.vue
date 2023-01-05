<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 gap-8 2xl:px-0">
        <template v-for="post in posts" :key="post.id">
            <div class="group">
              <NuxtLink :to="post._path" >
                <img :src="post.image.src" class="rounded-lg cursor-pointer object-cover h-12 h-120 w-full transform-gpu transition-all duration-300 ease-in-out will-change-transform group-hover:scale-102 group-hover:group-odd:rotate-2 group-hover:group-even:-rotate-2" :alt="post.title" width="200" height="480" />
              </NuxtLink>
              
            <div class="flex flex-col py-2">
                <h2 class="text-lg w-full text-gray-800-inline">
                    {{post.title}}
                </h2>
                <p class="text-base w-full text-gray-800/60 inline">
                  {{post.description}}
                </p>
            </div>
            </div>
        </template>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/work").find()
);

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