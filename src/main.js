import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'
import {localStorage} from './store/localstorage'
import animate from 'animate.css'
import VueQuillEditor from 'vue-quill-editor'
import Vuelidate from 'vuelidate'
import Socket from './socket/index'
import VueCookie from 'vue-cookie'
import {AlertPlugin} from 'vux'

sync(store, router)

Vue.use(ElementUI)
Vue.use(AlertPlugin);
Vue.use(animate)
Vue.use(VueQuillEditor)
Vue.use(Vuelidate)
Vue.use(Socket)
Vue.use(VueCookie);


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  localStorage
})
