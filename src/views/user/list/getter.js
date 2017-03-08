import {MUTATION_NAME} from "../mutations"
import {mapGetters} from '../../../utils/vuex'

const userList = (state) => state[MUTATION_NAME].userList

export default mapGetters({
  userList,
})
