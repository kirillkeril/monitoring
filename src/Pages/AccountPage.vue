<template>
  <Default>
    <main class="main">
      <div class="account">
        <Account/>
      </div>
      <div class="reports">
        <header>
          <h2>Отчеты</h2>
          <div class="controls">
            <span>Фильтр</span>
            <select>
              <option disabled selected>Сданы</option>
            </select>
          </div>
        </header>
        <ReportList :reports="[{
          id: 1,
          type: 'type',
          status: 'Сдан',
          uploadAccepted: false,
          completed: false,
          assignedDate: new Date(2024,3,2),
          responsiblePerson: 'Ответственный И.О.',
          assignedPerson: 'Назначенный И.О.',
          deadline: new Date(2024,4,18),
          name: 'Отчет о ходе приемной компании',
        }]"/>
      </div>
    </main>
  </Default>
</template>
<script lang="ts" setup>
import Default from "../Layouts/Default.vue";
import Account from "../components/Account/Account.vue";
import ReportList from "../components/Report/ReportList.vue";
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  gap: 16px;
}

.main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 64px;
  width: 95vw;
  height: 100%;
}

.reports {
  flex: 1;

  header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-family: "Golos Text SemiBold", sans-serif;
    }
  }

  main {
    display: flex;
    justify-content: center;
    gap: 32px;
    align-items: flex-start;
  }

  .col {
    flex: 1;
  }
}

.account {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>