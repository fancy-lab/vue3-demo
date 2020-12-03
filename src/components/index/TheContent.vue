<template>
  <div id="the-content">
    content
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
.the-content {
  background-color: yellow;
}
</style>
