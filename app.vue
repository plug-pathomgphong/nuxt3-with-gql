<script setup >
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
  themeColor: '#1F2937'
})
</script>
<template>
  <div class="flex flex-col min-h-screen" >
    <VitePwaManifest />
    <SiteHeader />
    <main class="mx-auto max-w-7xl px-2 grow w-full items-start sm:px-6 lg:px-8 ">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>
