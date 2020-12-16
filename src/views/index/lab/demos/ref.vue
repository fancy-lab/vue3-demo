<template>
  <button @click="push">push</button>
  <button @click="pop">pop</button>
  <h1 v-for="(item, index) in items" :key="index" :ref="setItemRef">item{{ index }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUpdate, onUpdated } from 'vue';

const useItems = () => {
  const items = ref(Array(3));

  function push() {
    items.value.push(undefined);
  }

  function pop() {
    items.value.pop();
  }

  return {
    items,
    push,
    pop,
  };
};

export default defineComponent({
  setup() {
    let itemRefs: unknown[] = [];

    const setItemRef = (el: unknown) => {
      itemRefs.push(el);
    };

    onBeforeUpdate(() => {
      itemRefs = [];
    });

    onUpdated(() => {
      console.log(itemRefs);
    });

    return {
      itemRefs,
      setItemRef,
      ...useItems(),
    };
  },
});
</script>
