import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginPageAdmin from '../views/loginPageAdmin.vue'
import loginPageUser from '../views/loginUser.vue'
import bioPage from '../views/bioPage.vue'
import loginPageChoice from '../views/loginPageChoice.vue'
import projects from '../views/projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/loginAdmin', component:  loginPageAdmin, name: 'LoginAdmin' },
    { path: '/loginUser', component: loginPageUser, name: 'LoginUser'},
    { path: '/bio', component: bioPage, name: 'BioPage'},
    { path: '/loginChoice', component: loginPageChoice, name: 'LoginPageChoice'},
    { path: '/projects', component: projects, name: 'Projects'},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router

