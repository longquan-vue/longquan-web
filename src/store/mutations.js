//操纵数据，修改

import {GET_USER, GET_WELFARE, PAGE, GET_USER_LIST, CHANE_SELECT,DEL_USER,GET_ACTIVITY_LIST,
    GET_ENTER_LIST,GET_ACTIVITY_DETAIL,DELETE_ACTIVITY,GET_HEALTH_LIST,GET_MINE,GET_MINE_WELFARE,
    GET_WELFARE_DETAIL} from './mutation-types'
import {defpage, defUser ,defActivity} from '../constant'
export default {
    state: {
        mine:{},
        mineWelfare:[],  //我的福利
        user: {},
        welfare: {},
        welfareDetail:{},
        page: {...defpage},
        userList: [],
        activityList: [],  //活动列表
        enterList:[],     //活动报名列表
        activityDetail: {},  //活动详情
        healthList:[]    //活动列表
    },
    mutations: {
        [GET_MINE] (state, mine) {
            state.mine = mine ? {...state.mine, ...mine} : defUser;
        },
        [GET_MINE_WELFARE] (state, mineWelfare) {   //我的福利
            if (!!mineWelfare) {
                console.log(mineWelfare);
                state.mineWelfare = mineWelfare.list;
                delete mineWelfare.list;
                state.page = {...state.page, ...mineWelfare}
            }
        },
        [GET_USER] (state, user) {
            state.user = user ? {...state.user, ...user} : defUser;
        },
        [GET_WELFARE] (state, welfare) {   //获取福利列表
            state.welfare = welfare;
        },
        [GET_WELFARE_DETAIL] (state, welfareDetail) {   //获取福利详情
            state.welfareDetail = welfareDetail;
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
        },
        [GET_ACTIVITY_LIST] (state, activityList) {  //处理 活动 列表
            if (!!activityList) {
                state.activityList = activityList.list;
                delete activityList.list;
                state.page = {...state.page, ...activityList}
            }
        },
        [GET_ENTER_LIST] (state, enterList) {  //处理 活动报名列表
            if (!!enterList) {
                state.enterList = enterList.list;
                delete enterList.list;
                state.page = {...state.page, ...enterList}
            }
        },
        [GET_ACTIVITY_DETAIL] (state, activityDetail) {    //获取活动详情
            state.activityDetail = activityDetail ? {...state.activityDetail, ...activityDetail} : defActivity;
        },
        [DELETE_ACTIVITY](state,index){   //删除活动
            console.log('这是删除操作');
        },
        [GET_HEALTH_LIST](state, healthList){  //健身项目列表
            if (!!healthList) {
                state.healthList = healthList.list;
                delete healthList.list;
                state.page = {...state.page, ...healthList}
            }
        },

    }
}