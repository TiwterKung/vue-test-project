import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from "@/view/MainView.vue"
import LoginView from "@/view/LoginView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/view/layout/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/view/MainView.vue'),
        },
        {
          path : 'login',
          component: () => import('@/view/LoginView.vue')
        },
        {
          path : 'about',
          component: () => import('@/view/AboutView.vue')
        },
        {
          path : 'contact',
          component: () => import('@/view/ContactView.vue')
        },
        {
          path : 'signup',
          component: () => import('@/view/SignupView.vue')
        }
      ]
    },
    // {
    //   path: "/Login",
    //   name: "login",
    //   components: {
    //     default: LoginView,
    //   },
    // }
  ],
})

export default router
