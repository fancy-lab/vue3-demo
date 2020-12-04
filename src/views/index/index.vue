<template>
  <div id="the-index">
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

<style lang="less">
#the-index {
  display: grid;
  grid-auto-columns: 200px 1fr;
  grid-template-areas:
    'TheHeader TheHeader'
    'TheMenu TheContent';
}

#the-header {
  grid-area: TheHeader;
}

#the-menu {
  grid-area: TheMenu;
}

#the-content {
  grid-area: TheContent;
}
</style>
