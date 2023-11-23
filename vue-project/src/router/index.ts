import { createRouter, createWebHistory } from 'vue-router'
import HomeContents from '@/components/pages/views/HomeContents.vue'
import AnimeContants from '@/components/pages/views/AnimeContants.vue'
import LineContents from '@/components/pages/views/echart/LineContents.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeContents
    },
    {
      path: '/anime',
      name: 'anime',
      component: AnimeContants
    },
    {
      path: '/line',
      name: 'line',
      component: LineContents
    }
  ]
})

export default router
