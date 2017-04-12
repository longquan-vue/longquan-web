//操纵数据，修改
import {SET_DATA, GET_DATA_LIST, DEL_DATA, GET_MINE, PAGE} from './mutation-types'
import {defData} from '../constant'
export default {
  state: {
    login: {},
    page: {...defData.page},
    list: [],
    data: {}
  },
  mutations: {
    [GET_MINE] (state, login) {
      state.login = login;
    },
    [SET_DATA] (state, data) { // 修改值
      state.data = data ? {...state.data, ...data} : {};
    },
    [GET_DATA_LIST] (state, list) {   //获取列表
      if (list) {
        if (state.page.series) {
          state.list = [...state.list, ...list.list];
        } else {
          state.list = list.list;
        }
        delete list.list;
        state.page = {...state.page, ...list}
      } else {
        state.list = []
      }
    },
    [DEL_DATA] (state, idx) {   //删除数据
      if (state.list[idx]) {
        console.log(idx);
        state.list.splice(idx, 1)
      }
    },
    [PAGE] (state, page) {
      state.page = page ? {...state.page, ...page} : defData.page;
    },
  }
}
