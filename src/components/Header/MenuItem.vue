<script lang="ts" setup>
interface Props {
  href: string;
  color: 'purple' | 'orange' | 'transparent';
  active: boolean;
}

const {href, color} = withDefaults(defineProps<Props>(), { active: false, });
</script>
<template>
  <router-link class="link" :class="color + ' ' + (active ? 'active' : '')" :to="href">
    <slot/>
  </router-link>
</template>

<style lang="scss" scoped>
@import "../../style";
.link {
  width: max-content;
}
.link.purple {
  display: block;
  padding: 16px;
  color: $purple;
  background-color: transparent;
}
.link.orange {
  color: $orange;
  background-color: transparent;
}
.link.active.purple {
  color: white;
  background-color: $purple;
}
.link.active.orange {
  color: white;
  background-color: $orange;
}
</style>