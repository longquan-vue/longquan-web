import {mapGetters} from 'vuex'

const userList = (state) => state.userList

export default mapGetters({
  userList,
})
