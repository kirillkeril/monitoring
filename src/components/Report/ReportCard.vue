<script lang="ts" setup>
import {Report} from "../../types/report.ts";
import moment from "moment/moment";

interface Props {
  report: Report;
}

const {report} = defineProps<Props>();
</script>

<template>
  <div class="card">
    <header><h4>{{ report.name }}</h4></header>
    <main>
      <div class="row">
        <span>Ответственный</span>
        <span>{{ report.responsiblePerson }}</span>
      </div>
      <div class="row">
        <span>Отчет назначен</span>
        <span>{{ report.assignedPerson }}</span>
      </div>
    </main>
    <footer>
      <div>
        <span>Срок: </span>
        <span>{{ moment(report.deadline).format('DD.MM.YYYY') }}</span>
      </div>
      <a href="/">Подробнее</a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style";

.card {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 12px 16px;
  border: 2px solid $orange;
  border-radius: 4px;

  header {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: $purple;
    }
  }
}

.row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  *:first-child {
    font-family: "Golos Text Bold", serif;
    text-align: left;
  }

  *:last-child {
    text-align: right;
  }
}
</style>