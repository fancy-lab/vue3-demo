<template>
  <div id="the-menu">
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
      <a-menu-item v-for="menu in menus" :key="menu.name" @click="goto(menu)"> {{ menu.name }} </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { routers } from '@/router';

interface Menu {
  name: string;
  url: string;
}

export default defineComponent({
  name: 'TheMenu',

  setup() {
    const menus: Menu[] = [];
    routers.forEach(({ meta: { name }, path: url }) => {
      menus.push({ name, url });
    });
    const selectedKeys = ref([menus[0].name]);

    function setSelectedKey(key: string) {
      selectedKeys.value[0] = key;
    }

    return {
      selectedKeys,
      setSelectedKey,
      menus,
    };
  },

  methods: {
    goto(menu: Menu) {
      this.setSelectedKey(menu.name);
      this.$router.push(menu.url);
    },
  },
});
</script>

<style lang="less">
#the-menu {
}
</style>
