import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/Toolbar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:() => import(/*Router 1*/ './views/Router.vue'),
      children:[
        {
          path: '',
          name: 'home',
          component: () => import( './views/Home.vue')
        },
        {
          path: '/aplicacion',
          name: 'aplicacion',
          component:() => import( './views/Apli/RouterApp.vue'),
          children:[
            {
              path: 'productos',
              name: 'productos',
              component: () => import( './views/Apli/Productos.vue')
            },
            {
              path: 'especifica',
              name: 'especifica',
              component: () => import( './views/Apli/Especifica.vue')
            },
            {
              path: 'agregar/:code',
              name: 'agregar',
              component: () => import( './views/Apli/Agregar.vue')
            },
            {
              path: 'ayuda',
              name: 'ayuda',
              component: () => import( './views/Apli/Ayuda.vue')
            },
            {
              path: 'comprar/:id',
              name: 'comprar',
              component: () => import( './views/Apli/Comprar.vue')
            },
            {
              path: 'pagar',
              name: 'pagar',
              component: () => import( './views/Apli/Pagar.vue')
            }
          ]
        }
      ]
    }]
})
