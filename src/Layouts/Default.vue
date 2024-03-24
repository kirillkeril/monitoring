<template>
  <div class="page">
    <Header/>
    <div class="page-content">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>

import Header from "../components/Header/Header.vue";
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  flex: 1;
}
</style>