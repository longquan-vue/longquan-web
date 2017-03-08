import {mapState} from 'vuex'

export function mapGetter(getter) {
  return function () {
    return getter.call(this, this.$store.state, this.$store.getters)
  }
}

export const mapGetters = mapState

export function mapActions(actions) {
  const res = {}
  Object.keys(actions).forEach(key => {
    res[key] = mapAction(actions[key])
  })
  return res
}

export function mapAction(action) {
  return function (...args) {
    return action.call(this, this.$store, ...args)
  }
}
