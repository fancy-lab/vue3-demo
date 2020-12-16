import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/views/index/index.vue';

const INDEX_ROUTES = [
  {
    path: '/lab',
    meta: {
      name: 'lab',
    },
    component: () => import('@/views/index/lab/Lab.vue'),
  },
  {
    path: '/ref',
    component: () => import('@/views/index/lab/demos/ref.vue'),
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: INDEX_ROUTES,
  },
  {
    path: '/*',
    redirect: '/lab',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
