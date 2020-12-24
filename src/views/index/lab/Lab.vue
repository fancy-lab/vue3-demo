<template>
  <a-tabs type="card">
    <a-tab-pane key="1" tab="Tab 1"> Content of Tab Pane 1 </a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2"> Content of Tab Pane 2 </a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3"> Content of Tab Pane 3 </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Lab',

  renderTracked({ key, target, type }) {
    console.log('renderTracked', { key, target, type });
  },

  renderTriggered({ key, target, type }) {
    console.log('renderTriggered', { key, target, type });
  },
});
</script>
