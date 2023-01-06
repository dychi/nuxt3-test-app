<template>
  <div>
    <h1>posts: {{ postId }}</h1>
    <p><NuxtLink to="/posts">一覧に戻る</NuxtLink></p>
  </div>
</template>

<script setup>
const route = useRoute()

const postId = route.params.id
</script>