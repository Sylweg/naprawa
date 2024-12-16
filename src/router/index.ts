import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PageTwo from '@/views/PageTwo.vue';
import PageFour from '@/views/PageFour.vue';
import PageThree from '@/views/PageThree.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/page-two',
    name: 'PageTwo',
    component: PageTwo
  },
  {
    path: '/page-three',
    name: 'PageThree',
    component: PageThree
  },
  {
    path: '/page-four',
    name: 'PageFour',
    component: PageFour
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
