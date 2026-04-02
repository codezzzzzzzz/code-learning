import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/item',
    name: 'item',
    component: () => import('../views/Item.vue')
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('../views/Score.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router