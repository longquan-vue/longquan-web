import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'
import {localStorage} from './store/localstorage'

sync(store, router)

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  localStorage
})
