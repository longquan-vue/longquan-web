//业务逻辑处理
import router from '../router'
import {mineApi, findApi, getByIdApi, mineWelfareApi ,mineScoreApi ,mineMsgApi } from '../api/userApi'
import {welfareApi, findWelfareByIdApi} from '../api/welfareApi'
// import {
//     findActivityApi,
//     findEntryListByIdApi,
//     findActivityDetailApi,
//     createActivityApi,
//     deleteActivityApi
// } from '../api/activityApi'
import {fileApi} from '../api/fileApi'
// import {findHealthApi} from '../api/healthApi'


import {DEL_DATA, SET_DATA, GET_DATA_LIST, GET_MINE} from './mutation-types'
const clear = ({commit}) => {
    commit(SET_DATA)
    commit(GET_DATA_LIST)
}
//上传文件
const upload = ({commit, state}, data) => fileApi(data);
// const successActivity = ({commit, state}, {data}) => {
//     console.log(data);
//     commit(GET_ACTIVITY_DETAIL, {files: [...state.activityDetail.files, data]});
// };

// go
const go = ({commit}, [name, id]) => router.push({name, params: {id}});
// goto
const goto = ({commit}, [name, query]) => {
    console.log(1111);
    router.push({name, query})
};
//清除page
// const clearPage = ({commit}) => commit(PAGE);
//更改page
// const changePage = ({commit}, data) => commit(PAGE, data);
//更改查询字段
// const changeSelect = ({commit, state}, data) => {
//     console.log(data);
//     commit(CHANE_SELECT, data);
// };

//获取用户信息
const getUser = async({commit, state}) => {
    const {params:{id}}=state.route;
    const user = await getByIdApi(id);
    commit(SET_DATA, user);
};
//findUserList 获取用户列表
const findUserList = async({commit, state}) => {
    const userList = await findApi(state.page);
    commit(GET_DATA_LIST, userList);
};
//删除用户
// const delUser = async({commit, state}, data) => {
//     console.log(data[0], data[1]);
//     delUserApi(data[0], data[1]);
//     // const delUserOne = await delUserApi();
//     commit(DEL_USER);
// };
//获取我的信息
const getMine = async({commit,state}) => {
    if(!!state.login.id){
        return false;
    }
    const mine = await mineApi();
    if (!mine) {
        // TODO 处理未登录情况
    }
    commit(GET_MINE, mine);
};
//获取我的福利
const getMineWelfare = async({commit, state}) => {
    await getMine({commit,state});
    commit(GET_DATA_LIST, await mineWelfareApi(state.login.id, 0, state.page));
};
//获取我的积分记录
const getMineScore = async({commit,state}) => {
    await getMine({commit,state});
    commit(GET_DATA_LIST, await mineScoreApi(state.login.id, 0, state.page));
};

//获取我的消息记录
const getMineMsg = async({commit,state}) => {
    await getMine({commit,state});
    commit(GET_DATA_LIST, await mineMsgApi(state.page));
};


//
// //获取福利  兑换列表
const getWelfare = async({commit}) => {
    commit(GET_DATA_LIST, await welfareApi());
};
//获取福利   福利详情
const getWelfareDetail = async({commit, state}, data) => {
    const {query:{id, ticket, welfareId, used}}=state.route;
    console.log(welfareId);
    if (welfareId) {
        const welfareDetail = await findWelfareByIdApi(welfareId);
        commit(SET_DATA, {...welfareDetail, ticket, id, used});
    } else {
        commit(SET_DATA, data);
    }
};
//
//
// //获取活动相关数据   活动列表
// const getActivity = async({commit, state}) => {
//     const activity = await findActivityApi(state.page);
//
//     commit(GET_ACTIVITY_LIST, activity);
// };
// //获取活动相关数据   活动报名列表
// const getEnter = async({commit, state}) => {
//     const {params:{id}}=state.route;
//     const activityEnter = await findEntryListByIdApi(id, state.page);
//     commit(GET_ENTER_LIST, activityEnter);
// };
// //获取活动相关数据   活动详情
// const getActivityDetail = async({commit, state}) => {
//     const {params:{id}}=state.route;
//     console.log(state.route);
//     console.log(id);
//     if (id == 'creat') {
//         commit(GET_ACTIVITY_DETAIL);
//     } else {
//         const activityDetail = await findActivityDetailApi(id);
//         commit(GET_ACTIVITY_DETAIL, activityDetail);
//     }
// };
// //获取活动相关数据   创建活动
// const createActivity = async({commit, state}) => {
//     createActivityApi(state.activityDetail).then(function () {
//         this.$message.success('提交成功！');
//         window.location.reload();
//     }).catch(function () {
//         this.$message.error('提交失败！');
//     });
// };
//
// //获取活动相关数据   删除活动
// const deleteActivity = async({commit, state}, data) => {
//     console.log(data[0], data[1]);
//     deleteActivityApi(data[0], data[1]);
//     // const delUserOne = await delUserApi();
//     commit(DELETE_ACTIVITY);
// };
//
// //获取健身项目相关数据   列表
// const getHealth = async({commit, state}) => {
//     const health = await findHealthApi(state.page);
//
//     commit(GET_HEALTH_LIST, health);
// };
//
//
// const changeWC = ({commit}, data) => {
//     console.log(data);
//     commit(GET_ACTIVITY_DETAIL, data);
// };


export default {
    getMine,
    getMineWelfare,
    getUser,
    findUserList,
    go,
    goto,
    upload,
    clear,
    getWelfareDetail,  //获取福利详情
    getMineScore,  //获取我的积分记录
    getMineMsg,    //获取我的消息记录
    getWelfare,    //获取福利列表
}