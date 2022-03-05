<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/base/Button/Button.vue';
</script>

<template>
  <HelloWorld first-name="Jenn" last-name="Baxter" />
  <Button label="First Button" size="md" theme="primary" :loading="false" />
  <Button label="Second Button" theme="secondary" />
</template>

<style>

</style>
