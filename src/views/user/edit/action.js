import {mapActions} from '../../../utils/vuex'
import {USER_EDIT} from '../../../store/mutation-types'

const init = ({commit}) => {
  commit(USER_EDIT, {id: 1, name: 'a1', sex: 1})
}
const clear = ({commit}) => {
  commit(USER_EDIT)
}
export default mapActions({
  init,
  clear
})

