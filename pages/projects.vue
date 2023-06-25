<script setup>
const query = gql`{
  viewer {
    repositories(first: 8, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        id
        name
        description,
        createdAt,
        url,
        forks{
          totalCount
        },
        watchers{
          totalCount
        },
        stargazers{
          totalCount
        }
      }
    }
  }
}`

const { data } = useAsyncQuery(query)
console.log(data)
</script>
<template>
    <div>
        <h1>My projects</h1>
        <p>Here are some of my projects on Github.</p>
        <section class="grid grid-cols-2 gap-10">
            <div v-for="project in data?.viewer.repositories.nodes" :key="project.id"
                class="flex flex-col justify-between p-8 border-4 my-4 rounded-lg">
                <a :href="project.url" target="_blank">
                    <h2 class=" text-2xl text-indigo-800 font-semibold mb-2 hover:underline">{{ project.name }}</h2>
                </a>
                <p class=" flex-1">{{ project.description }}</p>
                <div class="mt-4">
                    <Icon name="ph:star-fill"/> Stars: {{ project.stargazers.totalCount }}
                    <Icon name="pajamas:fork"/> Forks: {{ project.forks.totalCount }}
                    <Icon name="mdi:eye"/> Watchers: {{ project.watchers.totalCount }}
                </div>
            </div>
        </section>
</div></template>