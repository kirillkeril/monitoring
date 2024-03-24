<script lang="ts" setup>

import MenuItem from "./MenuItem.vue";
import DropMenu from "../UI/drop-menu.vue";
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <header class="header">
    <menu>
      <menu-item :active="route.path == '/'" color="purple" href="/">Главная</menu-item>
      <menu-item :active="route.path == '/calendar'" color="purple" href="/calendar">Календарь</menu-item>
    </menu>
    <div class="personal">
      <drop-menu :options="[{name: 'Личный кабинет', href: '/account'}, {name: 'Выйти', href: undefined}]">
        Фамилия И.О.
      </drop-menu>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../style";

.header {
  background-color: $transparentGrey;
  width: 100%;
  padding: 0 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  menu {
    display: flex;
  }
}

a {
  text-decoration: none;
}
</style>