//操纵数据，修改

import {SET_DATA, GET_DATA_LIST, DEL_DATA, GET_MINE ,PAGE} from './mutation-types'
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
        // [GET_MINE_WELFARE] (state, mineWelfare) {   //我的福利
        //     if (!!mineWelfare) {
        //         console.log(mineWelfare);
        //         state.mineWelfare = mineWelfare.list;
        //         delete mineWelfare.list;
        //         state.page = {...state.page, ...mineWelfare}
        //     }
        // },
        [SET_DATA] (state, data) { // 修改值
            state.data = data ? {...state.data, ...data} : {};
        },
        [GET_DATA_LIST] (state, list) {   //获取列表
            if (!!list) {
                state.list = [...state.list,...list.list];
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
        // [GET_WELFARE_DETAIL] (state, welfareDetail) {   //获取福利详情
        //     state.welfareDetail = welfareDetail;
        // },
        [PAGE] (state, page) {
            if (page.page>page.pages){
                return false;
            }else {
                page.page++;
            }
            state.page = page ? {...state.page, ...page} : defData.page;
        },
        // [GET_USER_LIST] (state, userList) {
        //     if (!!userList) {
        //         state.userList = userList.list;
        //         delete userList.list;
        //         state.page = {...state.page, ...userList}
        //     }
        // },
        // [CHANE_SELECT](state, {key, value}){
        //     console.log(key, value);
        //     const i = state.page.filed.indexOf(key);
        //     // console.log(i);
        //     if (value == '0' && i > 0) {          // 如果选择的全部,就删除当前的字段  也可以加上(说明当前已经有了当前字段) && i > -1
        //         state.page.filed.splice(i, 1);
        //         state.page.keyWord.splice(i, 1)
        //     } else if (value != '0' && i > -1) {  // 如果已经选择，就保持不变
        //         state.page.keyWord[i] = value
        //     } else if (value != '0' && i == -1) {   //如果在里面不存在，就添加进去
        //         state.page.filed.push(key);
        //         state.page.keyWord.push(value)
        //     }
        //     console.log(state.page)
        // },
        // [DEL_USER](state){
        //     console.log('这是删除操作')
        // },
        // [GET_ACTIVITY_LIST] (state, activityList) {  //处理 活动 列表
        //     if (!!activityList) {
        //         state.activityList = activityList.list;
        //         delete activityList.list;
        //         state.page = {...state.page, ...activityList}
        //     }
        // },
        // [GET_ENTER_LIST] (state, enterList) {  //处理 活动报名列表
        //     if (!!enterList) {
        //         state.enterList = enterList.list;
        //         delete enterList.list;
        //         state.page = {...state.page, ...enterList}
        //     }
        // },
        // [GET_ACTIVITY_DETAIL] (state, activityDetail) {    //获取活动详情
        //     state.activityDetail = activityDetail ? {...state.activityDetail, ...activityDetail} : defActivity;
        // },
        // [DELETE_ACTIVITY](state, index){   //删除活动
        //     console.log('这是删除操作');
        // },
        // [GET_HEALTH_LIST](state, healthList){  //健身项目列表
        //     if (!!healthList) {
        //         state.healthList = healthList.list;
        //         delete healthList.list;
        //         state.page = {...state.page, ...healthList}
        //     }
        // },
        // [GET_SCORE_LIST](state, scoreList){  //我的积分记录
        //     if (!!scoreList) {
        //         state.scoreList = scoreList.list;
        //         delete scoreList.list;
        //         state.page = {...state.page, ...scoreList}
        //     }
        // },

    }
}