<script lang="ts" setup>
import {ref, Ref} from "vue";

interface Props {
  options: { name: string, href: string }[];
}

const {options} = defineProps<Props>();
const active: Ref<boolean> = ref(false);
</script>

<template>
  <div :class="active ? 'active' : ''" class="drop-menu">
    <div class="body" @click="() => active = !active">
      <slot/>
    </div>
    <div class="menu">
      <ul v-show="active" style="width: max-content">
        <li v-for="o in options" class="item">
          <router-link :to="o.href ?? '/'">{{ o.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style";

.drop-menu {
  position: relative;

  .menu {
    opacity: 0;
    transition: 500ms ease-in opacity;
    position: absolute;

    display: flex;

    //left: 0;
    right: 0;
    top: 25px;

    ul {
      list-style: none;
    }
  }
}

.body {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  color: $purple;
}

.body:after {
  display: block;
  width: 24px;
  height: 24px;
  content: '';
  background: url("/chewron-down.svg");
  transform: rotate(0deg);
  transition: 500ms ease-in transform;
}

.drop-menu.active {
  .menu {
    opacity: 1;
  }

  .body:after {
    transform: rotate(90deg);
  }
}

.item {
  width: 100%;
  background-color: $orange;
  padding: 4px 8px;
  text-align: right;

  a {
    width: 100%;
    display: block;
    color: white;
    text-decoration: none;
  }
}
</style>