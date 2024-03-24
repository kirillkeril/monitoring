<script lang="ts" setup>
import UiInput from "../UI/ui-input.vue";
import UiButton from "../UI/ui-button.vue";
import axios from 'axios';
import {ref} from "vue";
import {useRouter} from "vue-router";

const form = {
  username: '',
  password: '',
}
const err = ref('');
const router = useRouter();

const login = async () => {
  err.value = '';
  console.log(form)
  if (!form.username || !form.password) {
    err.value = 'Введите данные для входа';
    return;
  }
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_PATH}/auth`, {...form});
    if (res.status.toString().startsWith('2')) {
      localStorage.setItem('token', res.token);
      localStorage.setItem('username', res.username);
      await router.push('/');
    }
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <div class="card">
    <header class="header">
      <h1>Войти</h1>
    </header>
    <main>
      <form @submit.prevent="login">
        <ui-input @update:model-value="err = ''" v-model="form.username">Логин</ui-input>
        <ui-input @update:model-value="err = ''" v-model="form.password" type="password">Пароль</ui-input>
        <footer>
          <div>
            <ui-button color="purple">Войти</ui-button>
          </div>
          <span class="err" v-show="err">{{ err }}</span>
        </footer>
      </form>
      <footer>
        <a href="/">Проблемы с входом?</a>
      </footer>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style";

.card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: $transparentGrey;

  padding: 16px 32px;
  width: fit-content;
  min-width: 420px;

  gap: 10px;

  header {
    font-size: 24px;
    line-height: 0;
    font-family: "Golos Text Regular", sans-serif;
  }

  main {
    width: 100%;


    form {
      display: flex;
      flex-direction: column;
      gap: 10px;

      padding: 10px;

      label {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      footer {
        margin-top: 6px;
        display: flex;
        justify-content: center;
      }
    }
  }

  footer {
    font-size: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 4px;

    .err {
      color: red;
    }

    a {
      color: $purple;
      text-decoration: none;
    }
  }
}
</style>