import {USER_FIND_ALL, USER_EDIT} from '../../store/mutation-types'
export const MUTATION_NAME = 'user'

export default {
  [MUTATION_NAME]: {
    state: {
      user: {},
      userList: []
    },
    mutations: {
      [USER_FIND_ALL] (state, list) {
        state.userList = list ? list : []
      },
      [USER_EDIT] (state, user) {
        state.user = user ? user : {}
      }
    }
  }
}
