import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about-us',
      name: 'About',      
      component: AboutView
    },
    {
      path: '/test',
      name: 'TestPage',
      component: () => import('../views/TestPage.vue')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      component: () => import('../views/Contact Us.vue')
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('../views/WelcomePage.vue')
    },
    {
      path: '/profile',
      name: 'My Profile',
      component: () => import('../views/My Profile.vue')  
    },
  ]
})

export default router