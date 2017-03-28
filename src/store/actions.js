import {mineApi} from '../api/userApi'
import {welfareApi} from '../api/welfareApi'
import {GET_MINE,GET_WELFARE,PAGE} from './mutation-types'

//清除
const clear=({commit})=>commit(PAGE)

//获取用户信息
const getMine = async({commit}) => {
   const user = await mineApi();

    commit(GET_MINE,user);
}

//获取福利兑换列表
const getWelfare = async({commit}) => {
    const welfare = await welfareApi();

    commit(GET_WELFARE,welfare);
}


export default {
    getMine,getWelfare
}