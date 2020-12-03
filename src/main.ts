import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import i18n from '@/locale/i18n';
import store from './store';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(Antd)
  .use(i18n)
  .mount('#app');
