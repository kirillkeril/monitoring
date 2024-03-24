<template>
  <WithoutHeader>
    <div class="auth">
      <AuthCard/>
    </div>
  </WithoutHeader>
</template>
<script lang="ts" setup>
import AuthCard from "../components/Auth/AuthCard.vue";
import WithoutHeader from "../Layouts/WithoutHeader.vue";
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>