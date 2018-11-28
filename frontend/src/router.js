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
      /*children:[
        {
          path: '',
          name: 'home',
          component: () => import( './views/Home.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import( './views/About.vue')
        }
  ]*/
    }]
})
