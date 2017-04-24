import Vue from 'vue'
import Router from 'vue-router'
import routes from "./routers"
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})
router.afterEach(route => route.meta ? document.title = route.meta : '')
export default router
