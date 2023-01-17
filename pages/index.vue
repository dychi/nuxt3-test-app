<template>
  <div>
    <h1>タイトル</h1>
    <p>counter: {{ counter }}</p>
    <button class="btn" @click="counter++">+ increment</button>
    <button class="btn" @click="counter--">- decrement</button>
  </div>
</template>

<script setup>
const counter = useState("counter", () => Math.round(Math.random() * 100))
</script>