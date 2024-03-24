<template>
  <Default>
    <main class="main">
      <div class="reports">
        <header>
          <h2>Отчеты в текущем месяце</h2>
        </header>
        <main>
          <div class="col">
            <h3>На этой неделе</h3>
            <ReportList :reports="reports.filter(r => r.id % 2 == 0)"/>
          </div>
          <div class="col">
            <h3>В этом месяце</h3>
            <ReportList :reports="reports"/>
          </div>
        </main>
      </div>
      <div class="about">
        <h2>Описание ИС</h2>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras in dapibus elit. Maecenas accumsan, odio quis ullamcorper sodales,
          ante orci commodo nulla, ut dignissim nisi elit ut sem. In finibus mauris lorem,
          eget lacinia magna aliquet hendrerit. In ultrices ligula felis, non auctor eros vestibulum
          laoreet. Sed tincidunt urna leo, nec fringilla ligula condimentum euismod. Donec laoreet
          pellentesque facilisis. Nunc pulvinar eu augue a dictum. Donec aliquet, risus id pulvinar
          porta, sem ex luctus nisi, nec pellentesque dui ex nec augue. Curabitur semper tellus ante,
          a posuere lorem rutrum vitae. Nulla viverra, elit quis iaculis accumsan,
          nisi felis condimentum leo, vel volutpat libero nulla ut odio.
          Quisque vehicula sollicitudin ornare.
          Integer blandit lacus at convallis fringilla. Donec pretium velit metus, sit amet
          scelerisque enim aliquam ac. Praesent interdum libero nec ultrices feugiat. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Curabitur odio sapien, mattis et dignissim et, finibus ac sapien.
          Suspendisse nec blandit justo, vel auctor arcu. Fusce aliquam lectus in lorem auctor,
          non ultrices odio finibus. Donec sem mi, euismod ornare vehicula sed,
          sodales eu neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </div>
      </div>
    </main>
  </Default>
</template>

<script lang="ts" setup>

import ReportList from "../components/Report/ReportList.vue";
import Default from "../Layouts/Default.vue";

const reports = [
  {
    name: 'Наименование',
    deadline: new Date('2024-03-20'),
    assignedPerson: 'Фамилия И,О.',
    responsiblePerson: 'Фамилия И,О.',
    assignedDate: new Date('2024-03-18'),
    completed: new Date('2024-03-19'),
    status: 'Сдан',
    type: 'тип',
    id: 1,
    uploadAccepted: false,
  }, {
    name: 'Наименование',
    deadline: new Date('2024-03-20'),
    assignedPerson: 'Фамилия И,О.',
    responsiblePerson: 'Фамилия И,О.',
    assignedDate: new Date('2024-03-18'),
    completed: new Date('2024-03-19'),
    status: 'Сдан',
    type: 'тип',
    id: 2,
    uploadAccepted: false,
  },
  {
    name: 'Наименование',
    deadline: new Date('2024-03-20'),
    assignedPerson: 'Фамилия И,О.',
    responsiblePerson: 'Фамилия И,О.',
    assignedDate: new Date('2024-03-18'),
    completed: new Date('2024-03-19'),
    status: 'Сдан',
    type: 'тип',
    id: 3,
    uploadAccepted: false,
  }, {
    name: 'Наименование',
    deadline: new Date('2024-03-20'),
    assignedPerson: 'Фамилия И,О.',
    responsiblePerson: 'Фамилия И,О.',
    assignedDate: new Date('2024-03-18'),
    completed: new Date('2024-03-19'),
    status: 'Сдан',
    type: 'тип',
    id: 4,
    uploadAccepted: false,
  }
];
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 64px;
}

.reports {
  flex: 1;
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
.about {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>