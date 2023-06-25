<script setup>
const { data: posts } = await useAsyncData('posts', () => 
    queryContent('/blog').find()
)
</script>
<template>
    <h1 class=" text-3xl font-bold my-8">
        Blog Posts
    </h1>
    <p class="my-4">I like to write about anything</p>
   <section class=" grid md:grid-cols-3 mt-8 gap-10">
        <Post :posts="posts" />
   </section>
</template>