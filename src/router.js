import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function load (view) {
  return () => import(`./views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'shortener' }
    },
    {
      path: '/url_shortener',
      name: 'shortener',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: load('UrlShortener')
    },
    {
      path: '/:shorty',
      component: load('Navigator')
    }
  ]
})
