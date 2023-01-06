<template>
  <div>
    <h1>タイトル</h1>
    <p>counter: {{ counter }}</p>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup>
const counter = useState("counter", () => Math.round(Math.random() * 100))
</script>