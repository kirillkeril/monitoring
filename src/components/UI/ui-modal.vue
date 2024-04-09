<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  onOpen?: () => void;
  onClose?: () => void;
}

const { onClose, onOpen } = defineProps<Props>();
const emit = defineEmits<{
  open: [close: () => void]
  close: [close: () => void]
}>();

const modalOpen = ref(false);

function openModal() {
  if (onOpen) onOpen();
  modalOpen.value = true;
  emit("open", closeModal);

}
function closeModal() {
  if (onClose) onClose();
  modalOpen.value = false;
  emit("close", closeModal);
}
</script>

<template>
  <div class="openModal" @click="openModal">
    <slot></slot>
  </div>
  <Teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div class="modal__content">
        <slot name="content"></slot>
      </div>
      <div class="backdrop" @click="closeModal"></div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate(0, 0);
  &__content {
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    overflow-y: auto;
    overflow-x: hidden;
    width: fit-content;
    z-index: 15;

    padding: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;

    min-width: 200px;
    min-height: 200px;

    border-radius: 10px;
  }
}
.backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(30, 30, 30, 0.32);
  z-index: 10;
  overflow: hidden;
}
</style>