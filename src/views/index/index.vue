<template>
  <div>
    <TheHeader />
    <TheMenu />
    <TheContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheHeader from '@/components/index/TheHeader.vue';
import TheMenu from '@/components/index/TheMenu.vue';
import TheContent from '@/components/index/TheContent.vue';

export default defineComponent({
  name: 'index',
  components: { TheHeader, TheMenu, TheContent },
});
</script>

<style></style>
