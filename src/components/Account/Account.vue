<script lang="ts" setup>
import {withDefaults} from 'vue';
import UiInput from "../UI/ui-input.vue";
import moment from 'moment';

interface Props {
  person?: {
    name: string,
    lastname: string,
    patronymic: string,
    username: string,
    telegram: string,
    post: "Должность",
    department: "Подразделение",
    role: "role",
    registerDate: Date,
  };
}

const {person} = withDefaults(defineProps<Props>(), {
  person: {
    name: 'Имя',
    lastname: 'Фамилия',
    patronymic: 'Отчествович',
    username: 'test@test.com',
    telegram: 'aaa',
    post: "Должность",
    department: "Подразделение",
    role: "role",
    registerDate: new Date(2024, 4, 1)
  }
});

const copyTelegram = () => navigator.clipboard.writeText(`t.me/${person.telegram}`);
</script>

<template>
  <div class="account">
    <header>
      <h2>{{ person.lastname }} {{ person.name }} {{ person.patronymic }}</h2>
    </header>
    <main>
      <div class="row">
        <div class="field">
          <span>Роль:</span>
          <span>{{ person.role }}</span>
        </div>
        <div class="field">
          <span>Логин:</span>
          <span>{{ person.username }}</span>
        </div>
      </div>
      <div class="row">
        <div class="field">
          <span>Должность:</span>
          <span>{{ person.post }}</span>
        </div>
        <div class="field">
          <span>Подразделение:</span>
          <span>{{ person.department }}</span>
        </div>
      </div>
      <div class="row">
        <div class="field">
          <span>Телеграм:</span>
          <span
              class="telegram"
              @click="copyTelegram"
          >
            <span>t.me/</span>
            <span>
              <ui-input :value="person.telegram" class="inp" disabled/>
              <!--              <ui-input v-model="person.telegram" class="inp"/>-->
            </span>
          </span>
        </div>
      </div>
      <div class="row">
        <div class="field">
          <span>Дата регистрации:</span>
          <span>{{ moment(person.registerDate).format('DD.MM.YYYY') }}</span>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style";

.account {
  max-width: 600px;

  header {
    margin-bottom: 22px;

    * {
      font-family: "Golos Text SemiBold", sans-serif;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }

  .field {
    display: flex;
    align-items: center;
    gap: 12px;

    > *:first-child {
      font-family: "Golos Text SemiBold", sans-serif;
    }
  }
}

.telegram {
  background-color: $purple;
  color: white;
  padding: 3px 8px;
  line-height: 6px;
  box-sizing: border-box;
  z-index: 1;

  *:first-child {
    color: white;
  }

}

.inp:deep(input) {
  outline: none;
  color: white;
  background-color: rgba(60, 33, 140, 0.16);
  z-index: 2;
}
</style>