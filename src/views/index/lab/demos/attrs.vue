<template>
  <h1>name是prop, age是attr</h1>
  <TempComponent :name="name" :age="age" />
  <h1>name: {{ name }}, age: {{ age }}</h1>
  <button @click="updateName">update name</button>
  <button @click="updateAge">update age</button>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, watch, computed, onBeforeUpdate, onUpdated, h } from 'vue';

const TempComponent = defineComponent({
  name: 'TempComponent',

  props: {
    name: String,
  },

  setup(props, { attrs }) {
    const age = ref(attrs.age);

    // 只能在onUpdated里响应attrs的变化
    onUpdated(() => {
      age.value = attrs.age as number;
    });

    return {
      age,
    };
  },

  render() {
    return h('div', `name: ${this.name}, age: ${this.age}`);
  },
});

export default defineComponent({
  components: { TempComponent },

  setup() {
    const name = ref('abc');
    const age = ref(33);
    return {
      name,
      age,
    };
  },

  methods: {
    updateName() {
      this.name += '1';
    },

    updateAge() {
      this.age += 1;
    },
  },
});
</script>
