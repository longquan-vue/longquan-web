import {ALERT,ALERT_CLOSE} from '../../store/mutation-types'
export const MUTATION_NAME = 'alert'

export default {
  [MUTATION_NAME]: {
    state: {
      alerts: [],
    },
    mutations: {
      [ALERT] (state, option) {
        state.alerts.push(option)
      },
      [ALERT_CLOSE](state, idx){
        state.alerts.splice(idx,1)
      }
    }
  }
}
