import {MUTATION_NAME} from "../mutations"
import {mapGetters} from '../../../utils/vuex'

const user = (state) => state[MUTATION_NAME].user

export default mapGetters({
  user,
})
