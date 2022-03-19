<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
// import Button from './components/base/Button/Button.vue';
import { Button } from '@cbaxterpackages/vue-library-sandbox';
</script>

<template>
  <HelloWorld first-name="Jenn" last-name="Baxter" />
  <!-- <Button label="First Buttonsss" size="md" theme="primary" :loading="false" />
  <Button label="Second Button" theme="secondary" />
  <Button theme="primary" size="sm" label="Colin" /> -->
  <Button label="Test Button" />
</template>
