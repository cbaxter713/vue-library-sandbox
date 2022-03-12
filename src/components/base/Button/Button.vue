<script setup lang="ts">
export interface ButtonProps {
  label: string;
  loading?: boolean;
  theme: "primary" | "secondary" | "action";
  size: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "md",
  theme: "primary",
});

// const props = defineProps({
//   label: String,
//   /**
//    * Whether or not it is loading
//    */
//   loading: Boolean,
//   theme: {
//     type: String,
//     default: 'primary'
//   },
//   size: String
// });
</script>

<template>
  <button :class="[`btn btn-${theme} btn-size-${size}`, { loading: loading }]">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
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

  &-primary {
    background-color: $color-primary;
  }

  &-secondary {
    background-color: $color-secondary;
  }

  &-action {
    background-color: orange;
  }

  &-size-sm {
    height: 2rem;
  }

  &-size-lg {
    height: 4rem;
  }
}
</style>
