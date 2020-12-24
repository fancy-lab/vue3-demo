<template>
  <TempComponent />
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUpdate, onUpdated, h } from 'vue';

export default defineComponent({
  components: {
    TempComponent: () => {
      return h('h1', 'this is temp component');
    },
  },
  setup() {
    return {};
  },
});
</script>
