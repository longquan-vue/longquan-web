import Vue from 'vue'
import Router from 'vue-router'
import routes from "./routers"
import {CREATE} from '../constant'
import {title} from '../../config'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})
router.afterEach(({meta, params}) => {
  if (!meta) {
    document.title = title
  } else if (meta.title && params.id == CREATE) {
    document.title = `${title} - 添加${meta.title.substr(2)}`
  } else if (meta.title) {
    document.title = `${title} - ${meta.title}`
  }
})
export default router
