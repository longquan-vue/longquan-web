/**
 * Created by zhongcheng on 2017/3/27 0027.
 */
import {request} from './ajax'
const BASE_PATH = '/welfare'

//获取积分福利兑换列表
export const welfareApi = (data={page:1,pageSize:10,sort:[],order:[],filed:[],keyWord:[]}) => {
    return request({
        method:"post",
        url: `${BASE_PATH}/find`,
        data
    })
}
