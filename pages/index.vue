<script setup>
const { data: posts } = await useAsyncData('latest-posts', () => 
    queryContent('/blog').sort({data:1}).limit(3).find()
)
</script>
<template>
    <section>
        <h1 class="text-5xl font-bold mt-20">Hello</h1>
        <p class="text-base text-gray-900 p-2 italic">Developer</p>
    </section>
    <section>
        I'am dev
    </section>
    <section class="grid md:grid-cols-3 mt-8 gap-10 ">
        <Post :posts="posts"/>
    </section>
</template>