import {MUTATION_NAME} from "./mutations"
import {mapGetters} from '../../utils/vuex'

const alerts = (state) => state[MUTATION_NAME].alerts

export default mapGetters({
  alerts,
})
