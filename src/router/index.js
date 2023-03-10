import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import AddProduct from '../views/AddProduct.vue'
import Customization from '../views/Customization.vue'
import Installation from '../views/Installation.vue'
import Analytics from '../views/Analytics.vue'
import Website from '../views/Website.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/add-product',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/customization',
      name: 'Customization',
      component: Customization
    },
    {
      path: '/installation',
      name: 'Installation',
      component: Installation
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics
    },
    {
      path: '/website',
      name: 'Website',
      component: Website
    },
  ]
})

export default router
