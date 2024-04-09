<template>
  <div class="calendar">
    <header class="calendar-header">
      <h2>Календарь отчетов</h2>
    </header>
    <div class="calendar">
      <DatePicker :model-value="date" @update:modelValue="e => changeDate(e)" :attributes="attrs" borderless/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {DatePicker} from 'v-calendar';
import {ref} from "vue";

const emit = defineEmits(['date-changed']);

const date = ref(new Date());
const attrs = ref([{
  highlight: 'purple',
  dates: [new Date(2024, 2, 22)],
}]);

function changeDate(date: Date) {
  emit('date-changed', date);
}
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.calendar-header {
  font-size: 24px;
  font-weight: bold;
  font-family: "Golos Text Bold", serif;
}
</style>