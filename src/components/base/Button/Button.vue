<script setup lang="ts">
  export interface ButtonProps {
    label: string;
    loading?: boolean;
    theme: 'primary' | 'secondary' | 'action';
    size: 'sm' | 'md' | 'lg';
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    size: 'md',
    theme: 'primary'
  })
</script>

<template>
  <button :class="[`btn btn-${theme} btn-size-${size}`, {'loading': loading}]">
    {{ label }}
  </button>
</template>

<style scoped>
.btn {
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 0 2rem;
  border: 2px solid maroon;
  color: white;
  cursor: pointer;
}
</style>
