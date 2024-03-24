<template>
  <div class="list">
    <ReportCard v-for="r in reports" :key="r.id" :report="r"/>
  </div>
</template>

<script lang="ts" setup>
import {Report} from "../../types/report.ts";
import ReportCard from "../Report/ReportCard.vue";

interface Props {
  reports: Report[];
}

const {reports} = defineProps<Props>();
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}
</style>