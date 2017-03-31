//操纵数据，修改

import {GET_USER, GET_WELFARE, PAGE, GET_USER_LIST, CHANE_SELECT,DEL_USER} from './mutation-types'
import {defpage, defUser } from '../constant'
export default {
    state: {
        user: {},
        welfare: {},
        page: {...defpage},
        userList: [],
    },
    mutations: {
        [GET_USER] (state, user) {
            state.user = user ? {...state.user, ...user} : defUser;
        },
        [GET_WELFARE] (state, welfare) {
            state.welfare = welfare;
        },
        [PAGE] (state, page) {
            state.page = page ? {...state.page, ...page} : defpage;
        },
        [GET_USER_LIST] (state, userList) {
            if (!!userList) {
                state.userList = userList.list;
                delete userList.list;
                state.page = {...state.page, ...userList}
            }
        },
        [CHANE_SELECT](state, {key, value}){
            console.log(key,value);
            const i = state.page.filed.indexOf(key);
            // console.log(i);
            if (value == '0' && i > 0) {          // 如果选择的全部,就删除当前的字段  也可以加上(说明当前已经有了当前字段) && i > -1
                state.page.filed.splice(i, 1);
                state.page.keyWord.splice(i, 1)
            } else if (value != '0' && i > -1) {  // 如果已经选择，就保持不变
                state.page.keyWord[i] = value
            } else if (value != '0' && i == -1) {   //如果在里面不存在，就添加进去
                state.page.filed.push(key);
                state.page.keyWord.push(value)
            }
            console.log(state.page)
        },
        [DEL_USER](state){
            console.log('这是删除操作')
        }
    }
}