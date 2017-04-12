import {request} from './ajax'
const BASE_PATH = '/activity';


//获取活动列表
export const findActivityApi = (data) => request({
    url: `${BASE_PATH}/find`,
    data
});
//获取活动详情
export const findActivityDetailApi = (id) => request({
    method: "get",
    url: `${BASE_PATH}/get/${id}`,
});
//创建活动
export const createActivityApi = (data) => request({
    url: `${BASE_PATH}/create`,
    data
});
//查询报名列表
export const findEntryListByIdApi = (id,data) => request({
    url: `${BASE_PATH}/entryList/${id}`,
    data
});
//修改活动
export const updateApi = (data) => request({
    method: "put",
    url: `${BASE_PATH}/update`,
    data
});
//删除活动
export const deleteActivityApi = (id, del) => request({
    method: "delete",
    url: `${BASE_PATH}/${id}/${del}`,
});