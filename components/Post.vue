<script setup>
defineProps(['posts'])
</script>
<template>
    <div v-for="post in posts" :key="post._id" 
        class=" bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75">
        <nuxt-link :to="post._path" :aria-label="post.title" class="text-blue-500 text-2xl">
            <img src="~/assets/images/default.jpg" class="object-cover aspect-video" alt="">
        </nuxt-link>
        <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
            <p class="text-gray-700 mb4">{{ post.description }}</p>
            <nuxt-link :to="post._path" :aria-label="post.title"
                class="inline-block bg-blue-600 py-2 px-4 rounded float-right text-white mb-8 hover:bg-blue-700">
                Read More
            </nuxt-link>
        </div>
        
    </div>
</template>