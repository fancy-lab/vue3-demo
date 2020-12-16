<template>
  <div id="the-menu">
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
      <a-menu-item v-for="menu in menus" :key="menu.name" @click="goto(menu)"> {{ menu.name }} </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Menu {
  name: string;
  url: string;
}

export default defineComponent({
  name: 'TheMenu',

  setup() {
    const menus: Menu[] = [{ name: 'ref', url: '/ref' }];
    const selectedKeys = [menus[0].name];

    return {
      selectedKeys,
      menus,
    };
  },

  methods: {
    goto(menu: Menu) {
      this.$router.push(menu.url);
    },
  },
});
</script>

<style lang="less">
#the-menu {
}
</style>
