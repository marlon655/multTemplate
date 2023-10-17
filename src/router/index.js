import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import selectionPage from '../views/selectionPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: AboutView
  },
  {
    path: '/contato',
    name: 'contato',
    component: ContactView
  },
  /*{
    path: '/selecao',
    name: 'selecao',
    component: selectionPage
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
