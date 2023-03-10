import { createRouter, createWebHistory } from 'vue-router'
import AddProduct from '../views/AddProduct.vue'
import Customization from '../views/Customization.vue'
import Installation from '../views/Installation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ]
})

export default router
