//业务逻辑处理
import router from '../router'
import {mineApi, findApi, delUserApi, getByIdApi} from '../api/userApi'
import {welfareApi} from '../api/welfareApi'
import {GET_USER, GET_WELFARE, PAGE, GET_USER_LIST, CHANE_SELECT, DEL_USER} from './mutation-types'

// go
const go = ({commit}, [name, id]) => router.push({name, params: {id}})
//清除page
const clearPage = ({commit}) => commit(PAGE);
//更改page
const changePage = ({commit}, data) => commit(PAGE, data);
//更改查询字段
const changeSelect = ({commit, state}, data) => {
    console.log(data)
    commit(CHANE_SELECT, data);
}

//获取我的信息
const getUser = async({commit, state}) => {
    const {params:{id}}=state.route
    const user = await getByIdApi(id);
    commit(GET_USER, user);
};
//findUserList 获取用户列表
const findUserList = async({commit, state}) => {
    const userList = await findApi(state.page);
    commit(GET_USER_LIST, userList);
};
//删除用户
const delUser = async({commit, state}, data) => {
    console.log(data[0], data[1])
    delUserApi(data[0], data[1]);
    // const delUserOne = await delUserApi();
    commit(DEL_USER);
};


//获取福利兑换列表
const getWelfare = async({commit}) => {
    const welfare = await welfareApi();

    commit(GET_WELFARE, welfare);
};


export default {
    getUser, getWelfare, findUserList, changePage, clearPage, changeSelect, delUser, go
}