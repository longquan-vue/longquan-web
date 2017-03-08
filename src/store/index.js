import Vue from 'vue'
import Vuex from 'vuex'
import logger from '../common/logger'
import states from './states'

const store = {}
states.map(({name, state, mutations}) => {
  store.state = {...store.state, [name]: state}
  store.mutations = {...store.mutations, ...mutations}
})


Vue.use(Vuex)
export default new Vuex.Store({
  ...store,
  plugins: process.env.NODE_ENV !== 'production' ? [logger] : [],
  strict: process.env.NODE_ENV !== 'production'
})
