import { defineComponent, ref, onMounted, onBeforeUpdate, onUpdated } from 'vue';

export default defineComponent({
  props: {
    parentName: {
      type: String,
      default: 'default parent name',
    },
  },

  setup() {
    console.log('parent setup');

    onMounted(() => {
      console.log('parent onMounted');
    });

    return {
      parentSetup: true,
    };
  },
});
