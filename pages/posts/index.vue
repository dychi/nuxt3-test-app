<template>
  <div>
    <h1>投稿一覧</h1>
    <li v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>

<script setup>
const { data: posts } = await useFetch(
  "https://jsonplaceholder.typicode.com/todos"
)
console.log(posts)
</script>