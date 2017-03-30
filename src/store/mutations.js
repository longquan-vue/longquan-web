import {GET_MINE, GET_WELFARE, PAGE,GET_USER_LIST} from './mutation-types'
import {defpage, defUser} from '../constant'
export default {
    state: {
        user: {},
        welfare: {},
        page: {...defpage},
        userList:[],
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
        },
        [GET_USER_LIST] (state, userList) {
            if(!!userList){
                state.userList =userList.list;
                delete userList.list;
                state.page = {...state.page,...userList}
            }
        }
    }
}