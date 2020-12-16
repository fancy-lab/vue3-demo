<template>
  <div id="the-content">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheContent',
});
</script>

<style lang="less">
#the-content {
  border: 10px solid #f0f0f0;
  padding: 5px;
  height: calc(100vh - 38px);
}
</style>
