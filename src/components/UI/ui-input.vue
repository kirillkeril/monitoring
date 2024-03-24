<script lang="ts" setup>
import {v4} from 'uuid';
import {onMounted, Ref, ref} from "vue";

interface Props {
  placeholder?: string;
  type?: string;
  disabled: boolean;
}

const props = withDefaults(defineProps<Props>(), {  });
const id: Ref<string> = ref('');

const emit = defineEmits(['update:modelValue', 'change']);

onMounted(() => {
  id.value = v4();
})
</script>

<template>
  <label :for="id">
    <slot/>
    <input :disabled="disabled" @change="e => {emit('update:modelValue', e.target.value); emit('change', e.target.value);}" v-bind="$attrs" :id="id" :type="props.type" :placeholder="props.placeholder"/>
  </label>
</template>

<style lang="scss" scoped>
@import "../../style";
label {
  input {
    background-color: $transparentGrey;
    border: none;
    color: #4D485C;

    font-size: 12px;
    padding: 4px 6px;
  }
}
</style>