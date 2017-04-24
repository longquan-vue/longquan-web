import Vue from 'vue'
import Router from 'vue-router'
import routes from "./routers"
import {CREATE} from '../constant'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})
router.afterEach(route => {
  if (route.meta && route.params.id == CREATE) {
    document.title = "添加" + route.meta.substr(2)
  } else if (route.meta) {
    document.title = route.meta
  }
})
export default router
