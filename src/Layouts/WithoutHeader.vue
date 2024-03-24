<template>
  <div class="page">
    <div></div>
    <div class="page-content">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import Footer from "../components/Footer/Footer.vue";
</script>

<style lang="scss">
.page {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100dvh;
}

.page-content {
  padding: 24px 32px;
  min-height: 100%;
}
</style>