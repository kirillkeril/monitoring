<template>
  <Default>
    <div class="wrapper">
      <Calendar @date-changed="updatePickedDate"/>
      <div class="calendar-list">
        <header class="calendar-list-header">
          <h2>Список отчетов на {{ moment(pickedDate).format("DD.MM.YYYY") }}</h2>
        </header>
        <div>
          <ReportList :reports="reports.filter(r => r.deadline == pickedDate)"/>
        </div>
        <footer>
          <div class="buttons">
            <ui-modal>
              <template #default>
                <ui-button color="purple">Создать отчет</ui-button>
              </template>
              <template #content>
                <new-report-form/>
              </template>
            </ui-modal>
          </div>
        </footer>
      </div>
    </div>
  </Default>
</template>

<script setup lang="ts">
import Default from "../Layouts/Default.vue";
import Calendar from "../components/Calendar/Calendar.vue";
import ReportList from "../components/Report/ReportList.vue";
import {Report} from "../types/report.ts";
import {Ref, ref} from "vue";
import moment from "moment/moment";
import UiButton from "../components/UI/ui-button.vue";
import NewReportForm from "../components/Report/NewReportForm.vue";
import UiModal from "../components/UI/ui-modal.vue";

const pickedDate: Ref<Date> = ref(new Date());

const reports: Report[] = [];

function updatePickedDate(date: Date) {
  pickedDate.value = date;
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.calendar-list {
  width: 50%;

  &-header {
    font-size: 24px;
    font-weight: bold;
    font-family: "Golos Text Bold", sans-serif;

  }
}

.buttons {
  display: flex;
  justify-content: center;

  &:deep(*) {
    display: flex;
    flex: 1;
    justify-content: center;
  }
}
</style>