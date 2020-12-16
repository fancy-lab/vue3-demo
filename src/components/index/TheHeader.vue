<template>
  <div id="the-header">
    <div class="c-title">Vue3 Playground</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader',
});
</script>

<style lang="less">
#the-header {
  height: 38px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  padding: 0 20px;

  .c-title {
    font-size: 15px;
    font-weight: bold;
  }
}
</style>
