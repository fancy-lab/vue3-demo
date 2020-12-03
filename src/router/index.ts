import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/views/index/index.vue';

const INDEX_ROUTES = [
  {
    path: '/market/market',
    meta: {
      name: 'market',
    },
    component: () => import('@/views/index/market/Market.vue'),
  },
  {
    path: '/market/symbol',
    meta: {
      name: 'symbol',
    },
    component: () => import('@/views/index/market/Symbol.vue'),
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: INDEX_ROUTES,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
