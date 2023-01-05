<template>
    <header class="border-b flex flex-col-reverse bg-gray-50/10 w-full py-2 px-4 top-0 z-1 gap-4 items-center sticky backdrop-blur-md md:flex-row md:py-6 md:gap-0 md:justify-between 2xl:px-12">
        <nav class="flex gap-4">
            <nuxt-link class="font-normal text-lg text-black hover:text-gray-800" to="/">
                Home
            </nuxt-link>
            <nuxt-link class="font-normal text-lg text-black hover:text-gray-800" to="/about">
                About
            </nuxt-link>
        </nav>
        <img src="/logo.png" class="h-8" alt="" />
        <div class="flex gap-4">
            <nuxt-link class="font-normal text-lg text-black hover:text-gray-800" to="/">
                Portfolio
            </nuxt-link>
            <nuxt-link class="font-normal text-lg text-black hover:text-gray-800" to="/">
                Blog
            </nuxt-link>
        </div>
    </header>
</template>