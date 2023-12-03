import { createRouter, createWebHistory } from 'vue-router'
import HomeContents from '@/components/pages/views/HomeContents.vue'
import AnimeContants from '@/components/pages/views/AnimeContants.vue'
import LineContents from '@/components/pages/views/echart/LineContents.vue'
import TodoContents from '@/components/pages/views/TodoContents.vue'
import EducationContents from '@/components/pages/views/EducationContents.vue'
import marsContents from '@/components/pages/views/marsContents.vue'

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
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoContents
    },
    {
      path: '/quize',
      name: 'quize',
      component: EducationContents
    },
    {
      path: '/mars',
      name: 'mars',
      component: marsContents
    }
  ]
})

export default router
