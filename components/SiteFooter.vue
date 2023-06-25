<script setup>
const links = [
    { name: 'Github', href: 'https://github.com', icon:'uil:github'},
    { name: 'Twitter', href: 'https://twitter.com', icon:'uil:twitter'},
    { name: 'Facebook', href: 'https://facebook.com', icon:'uil:facebook'},
    { name: 'LinkedIn', href: 'https://linkedin.com', icon:'uil:linkedin'},
    { name: 'Instagram', href: 'https://instagram.com', icon:'uil:instagram'},
]
</script>
<template>
    <footer class="bg-gray-800">
        <section class="mx-auto max-w-7xl text-gray-300 flex flex-row px-2 sm:px-4 lg:py-6 ">
            <p class=" flex-1 ">&copy; Your name 2013. All Rights Reserves</p>
            <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
                <a v-for="link in links" :key="link.name" :href="link.href">
                <Icon :name="link.icon" size="1.5rem" class="text-gray-500" />
            </a>
            </div>
        </section>
    </footer>
</template>