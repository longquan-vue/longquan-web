//操纵数据，修改
import {SET_DATA, GET_DATA_LIST, DEL_DATA, GET_MINE, PAGE, CHANE_SELECT} from './mutation-types'
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
      state.login = login || {};
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
        state.list.splice(idx, 1)
      }
    },
    [PAGE] (state, page) {
      state.page = page ? {...state.page, ...page} : defData.page;
    },
    [CHANE_SELECT](state, {key, value}){
      const i = state.page.filed.indexOf(key);
      if (value == 'x' && i > -1) {          // 如果选择的全部,就删除当前的字段  也可以加上(说明当前已经有了当前字段) && i > -1
        state.page.filed.splice(i, 1);
        state.page.keyWord.splice(i, 1);
      } else if (value != 'x' && i > -1) {  // 如果已经选择，就保持不变
        state.page.keyWord[i] = value;
      } else if (value != 'x' && i == -1) {   //如果在里面不存在，就添加进去
        state.page.filed.push(key);
        state.page.keyWord.push(value);
      }
    },
  }
}
