import {mapActions} from 'vuex'

import {USER_FIND_ALL} from '../../../constant'

const init = ({commit}) => {
  commit(USER_FIND_ALL, [{id: 1, name: 'a1', sex: 1}, {id: 1, name: 'a1', sex: 1}, {id: 1, name: 'a1', sex: 1}])
}
const clear = ({commit}) => {
  commit(USER_FIND_ALL)
}
export default mapActions({
  init,
  clear
})

