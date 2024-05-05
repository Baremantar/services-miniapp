import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CallWaiter from "@/views/CallWaiter.vue";
import Orders from "@/views/Orders.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/call-waiter/',
      name: 'call-waiter',
      component: CallWaiter
    },
    {
      path: '/orders/',
      name: 'Orders',
      component: Orders
    },
  ]
})

export default router
