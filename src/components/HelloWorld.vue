<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ firstName: string, lastName: string }>();
const fullName = computed(() => {
  return `${props.firstName} ${props.lastName}`
})
</script>

<template>
  <h1>{{ firstName }}</h1>
  <h2>{{ fullName }}</h2>
</template>

<style scoped>

</style>
