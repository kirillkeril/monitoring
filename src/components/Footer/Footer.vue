<script lang="ts" setup>

</script>

<template>
  <footer class="footer">
    <div class="info">
      <p>ИС "Мониторинг статистических отчетов"</p>
      <div>
        <p>Телефон: <a href="tel:8(342)215-18-62">8 (342) 215-18-62</a> (доб. 338)</p>
        <p>E-mail: <a href="mailto:its@pspu.ru">its@pspu.ru</a></p>
      </div>
      <p>© ФГБОУ ВО "ПГГПУ", Управление информатизации, 2024</p>
    </div>
    <div class="logo">
      <a href="https://pspu.ru">
        <img alt="logo" src="/logo.png">
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../style";

.footer {
  width: 100%;
  background-color: $transparentGrey;
  display: flex;
  justify-content: space-between;
  padding: 18px 40px;

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 80px;
  }
}
</style>