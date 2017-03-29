import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'
import {localStorage} from './store/localstorage'
import animate from 'animate.css'

sync(store, router)

Vue.use(ElementUI)
Vue.use(Mint)
Vue.use(animate)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  localStorage
})
