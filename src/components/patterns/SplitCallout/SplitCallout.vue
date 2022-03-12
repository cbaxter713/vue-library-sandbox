<script setup lang="ts">
export interface SplitCalloutProps {
  title: string;
  copy: string;
  image: string;
  rightAligned?: boolean;
}

const props = defineProps<SplitCalloutProps>();
</script>

<template>
  <div :class="['split-callout', { 'align-right': rightAligned }]">
    <div class="content">
      <h2>{{ title }}</h2>

      <p>{{ copy }}</p>
    </div>
    <img alt="some text" :src="image" />
  </div>
</template>

<style scoped lang="scss">
.split-callout {
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  &.align-right {
    flex-direction: row-reverse;
  }
}
</style>
