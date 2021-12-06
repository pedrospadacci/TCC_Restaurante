import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/bebidas',
    name: 'Bebidas',
    component: () => import(/* webpackChunkName: "bebidas" */ '../views/Bebidas.vue')
  },
  {
    path: '/pizzas',
    name: 'Pizzas',
    component: () => import(/* webpackChunkName: "pizzas" */ '../views/Pizzas.vue')
  },
{
  path: '/entradas',
  name: 'Entradas',
  component: () => import(/* webpackChunkName: "entradas" */ '../views/Entradas.vue')
},
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
{
  path: '/administrador',
  name: 'Administrador',
  component: () => import(/* webpackChunkName: "administrador" */ '../views/Administrador.vue')
},
  {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
