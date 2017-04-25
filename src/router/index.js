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
  if (route.meta.title && route.params.id == CREATE) {
    document.title = "添加" + route.meta.title.substr(2)
  } else if (route.meta.title) {
    document.title = route.meta.title
  } else {
    document.title = '龙泉总工会'
  }
})
export default router
