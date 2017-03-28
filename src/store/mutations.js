import {GET_MINE, GET_WELFARE, PAGE} from './mutation-types'
import {defpage, defUser} from '../constant'
export default {
    state: {
        user: {},
        welfare: {},
        page: {}
    },
    mutations: {
        [GET_MINE] (state, user) {
            state.user = user ? {...state.user, ...user} : defUser;
        },
        [GET_WELFARE] (state, welfare) {
            state.welfare = welfare;
        },
        [PAGE] (state, page) {
            state.page = page ? {...state.page, ...page} : defpage;
        }
    }
}