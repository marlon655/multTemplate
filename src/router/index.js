import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import ProductSingleView from '../views/ProductSingleView.vue';
import BagView from '../views/BagView.vue'
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
  {
    path: '/produto/:name',
    name: 'produto',
    component: ProductSingleView
  },
  {
    path: '/sacola',
    name: 'sacola',
    component: BagView
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
