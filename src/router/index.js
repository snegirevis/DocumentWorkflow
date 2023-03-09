import { createRouter, createWebHistory } from 'vue-router'
import StartView from "@/views/StartView.vue"
import LoginView from "@/views/LoginView.vue"

const routes = [
  {
    path: '/',
    component: StartView
  },
  {
    path: '/login',
    component: LoginView
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
