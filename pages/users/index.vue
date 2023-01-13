<template>
  <div>
    <template v-if="pending"><p>loading...</p></template>
    <template v-else-if="error"
      ><p>{{ error }}</p></template
    >
    <template v-else>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.id }}: {{ user.name }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
type User = {
  id: number
  name: string
}
const users = ref<User[]>([])
const pending = false
const error = null

onMounted(async () => {
  const { data, pending, error } = await useFetch("/api/users")
  users.value = data.value as User[]
  return { users, pending, error }
})
</script>