import {mapActions} from '../../utils/vuex'
import {ALERT,ALERT_CLOSE} from '../../store/mutation-types'


export const alert = ({commit},option={}) => {
  commit(ALERT, {...def,...option})

}
const close = ({commit},idx) =>commit(ALERT_CLOSE, idx)

export default mapActions({
  close
})

