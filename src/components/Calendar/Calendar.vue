<template>
  <div class="calendar">
    <DatePicker v-model="date" :attributes="attrs" borderless/>
    {{ date }}
  </div>
</template>

<script lang="ts" setup>
import {DatePicker} from 'v-calendar';
import {ref} from "vue";

const date = ref(new Date());
const attrs = ref([{
  highlight: 'purple',
  dates: [new Date(2024, 2, 22)],
}]);
</script>

<style lang="scss" scoped>
</style>