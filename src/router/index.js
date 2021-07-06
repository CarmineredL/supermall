import vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('views/Home/Home')
const category = () => import('views/Category/Category')
const profile = () => import('views/Profile/Profile')
const shopcart = () => import('views/Shopcart/Shopcart')
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
vue.use(VueRouter)
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  }, {
    path: '/category',
    component: category
  }, {
    path: '/profile',
    component: profile
  },
  {
    path: '/shopcart',
    component: shopcart
  }
]
const router = new VueRouter({
  routes,
  mode: "history"
})
export default router
