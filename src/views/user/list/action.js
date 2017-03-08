import {mapActions} from '../../../utils/vuex'
import {USER_FIND_ALL} from '../../../store/mutation-types'
import {findAllApi} from '../../../api/userApi'
const init = async({commit}) => {
  const res = await findAllApi()
  commit(USER_FIND_ALL, res)
}
const clear = ({commit}) => {
  commit(USER_FIND_ALL)
}
export default mapActions({
  init,
  clear
})

