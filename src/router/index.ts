import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Homepage = () => import('@/pages/Homepage.vue');
const Verbs = () => import('@/pages/Verbs.vue');
const Videos = () => import('@/pages/Videos.vue');
const YoutubeVideoViewer = () => import('@/pages/YoutubeVideoViewer.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos,
  },
  {
    path: '/verbs',
    name: 'Verbs',
    component: Verbs,
  },
  {
    path: '/videos/youtube/:videoId',
    name: 'YoutubeVideoViewer',
    component: YoutubeVideoViewer,
  },
];

const router = createRouter({
  history: createWebHistory(__webpack_public_path__),
  routes,
});

export default router;
