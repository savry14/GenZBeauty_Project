import { createRouter, createWebHistory } from 'vue-router'

import Login from '../forms/Login.vue'
import Register from '../forms/Register.vue'

import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import Contact from '../pages/Contact.vue'
import Categories from '../pages/Categories.vue'
import CardDetail from '../pages/CardDetail.vue'


// Layouts
import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const routes = [
  {
    path: '/',
    component: AuthLayout,
    children: [
      { path: '', redirect: '/login' },
      { path: 'login', component: Login },
      { path: 'register', component: Register }
    ]
  },

  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'home', component: Home },
      { path: 'shop', component: Shop },
      { path: 'contact', component: Contact },
      { path: 'categories', component: Categories },
      { path: 'categories/face', component: Categories },
      { path: 'categories/body', component: Categories },
      { path: 'products/:id', component: CardDetail },
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
