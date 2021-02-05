<template>
  <!--  <button @click="push">push</button>-->
  <!--  <button @click="pop">pop</button>-->
  <h1>Setup Page</h1>
  <Child />
</template>

<script lang="ts">
import { defineComponent, onMounted, h } from 'vue';
import ParentSetup from '@/components/setup/ParentSetup';

const Child = defineComponent({
  name: 'Child',

  props: {
    childName: {
      type: String,
      default: 'default child name',
    },
  },

  extends: ParentSetup,

  setup() {
    console.log('child setup');

    onMounted(() => {
      console.log('child onMounted');
    });

    return {
      childSetup: true,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      push: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      pop: () => {},
    };
  },

  // render() {
  //   return h('div', this.childName);
  // },
});

export default defineComponent({
  components: { Child },
});
</script>
