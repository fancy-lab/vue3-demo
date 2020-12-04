<template>
  <div id="the-header">
    <div class="c-title">
      Admin [Vue3]
    </div>
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
  background-color: green;
  height: 38px;
  display: flex;
  align-items: center;
}
</style>
