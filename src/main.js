import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store'
import {sync} from 'vuex-router-sync'
sync(store, router)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
