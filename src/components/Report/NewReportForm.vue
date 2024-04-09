<template>
  <form class="form">
    <header class="header">
      <!--        <ui-input v-model="defaultReport.name" :disabled="false" placeholder="Наименование"/>-->
    </header>

    <main class="main">
      <div class="pair">
        <div class="label">
          <span class="key">Дата назначения</span>
          <span class="value">{{ moment(defaultReport.created_date).format("DD.MM.YYYY") }}</span>
        </div>
        <div class="label">
          <span class="key">Отчет назначен</span>
          <span class="value">{{ moment(defaultReport.created_date).format("DD.MM.YYYY") }}</span>
        </div>
      </div>
      <div class="pair">
        <div class="label">
          <span class="key">Тип отчета</span>
          <select>
            <option disabled selected>Выбрать</option>
            <option v-for="t in reportTypes" :value="t.id">{{ t.name }}</option>
          </select>
        </div>
      </div>
      <div class="pair">
        <div class="label">
          <span class="key">Ответственный</span>
          <select>
            <option disabled selected>Выбрать</option>
            <option v-for="t in peoples" :value="t.id">{{ t.name }}</option>
          </select>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="buttons">
        <ui-button color="purple">Создать отчет</ui-button>
      </div>
    </footer>
  </form>
</template>

<script setup lang="ts">
import UiButton from "../UI/ui-button.vue";
import moment from "moment/moment";
import {onMounted, ref, Ref} from "vue";

interface CreateReportBody {
  type_id: number,
  created_date: Date,
  start_date: Date,
  end_date: Date,
  created_by: number,
  uploaded: boolean,
  force_upload: boolean,
  link_file: string,
  reporter_id: number,
  status_id: number,
  token: string,
}

const defaultReport: CreateReportBody = {
  type_id: 0,
  created_date: new Date(),
  start_date: new Date(),
  end_date: new Date(),
  created_by: 0,
  uploaded: false,
  force_upload: false,
  link_file: "string",
  reporter_id: 0,
  status_id: 0,
  token: "string"
}

const reportTypes: Ref<{ id: number, name: string }[] | null> = ref(null);
const peoples: Ref<{ id: number, name: string }[] | null> = ref(null);

onMounted(() => {
  reportTypes.value = [{id: 0, name: 'Отчет о ходе приемной кампании'}]
  peoples.value = [{id: 0, name: 'Иван'}]
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex: 1 1 auto;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form {
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.label {
  display: flex;
  justify-content: flex-start;
  gap: 8px;

  .key {
    font-family: "Golos Text Bold", serif;
  }

  .value {
    font-family: "Golos Text Regular", sans-serif;
    color: #3C218C;
  }
}

.pair {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
</style>