<script lang="ts" setup>
interface Props {
  onClick?: (e: Event) => void;
  color: 'purple' | 'orange';
}
const {onClick, color} = defineProps<Props>();
</script>

<template>
  <button @click="onClick" :class="color">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
@import "../../style";
button {
  color: white;
  padding: 6px 14px;
  border-radius: 4px;
  border: none;
  outline: none;

  box-shadow: 1px 1px rgba(77, 72, 92, 0.32);
}
</style>