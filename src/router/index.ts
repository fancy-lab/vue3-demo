import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/views/index/index.vue';

const INDEX_ROUTES = [
  {
    path: '/lab',
    meta: {
      name: 'Lab',
    },
    component: () => import('@/views/index/lab/Lab.vue'),
  },
  {
    path: '/ref',
    meta: {
      name: 'Ref',
    },
    component: () => import('@/views/index/lab/demos/ref.vue'),
  },
  {
    path: '/setup',
    meta: {
      name: 'Setup',
    },
    component: () => import('@/views/index/lab/demos/setup.vue'),
  },
  {
    path: '/async-components',
    meta: {
      name: 'Async Components',
    },
    component: () => import('@/views/index/lab/demos/async-components.vue'),
  },
  {
    path: '/attrs',
    meta: {
      name: 'Attrs',
    },
    component: () => import('@/views/index/lab/demos/attrs.vue'),
  },
  {
    path: '/others',
    meta: {
      name: 'Others',
    },
    component: () => import('@/views/index/lab/demos/others.vue'),
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

export { INDEX_ROUTES as routers };
export default router;
