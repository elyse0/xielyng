import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Homepage = () => import('@/pages/Homepage.vue');
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
    path: '/videos/youtube/:videoId',
    name: 'YoutubeVideoViewer',
    component: YoutubeVideoViewer,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
