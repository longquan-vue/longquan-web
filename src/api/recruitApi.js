import {request} from './ajax'
const BASE_PATH = '/recruit';


//获取招聘列表
export const findRecruitApi = (data) => request({
    url: `${BASE_PATH}/find`,
    data
});
//获取招聘详情
export const findRecruitDetailApi = (id) => request({
    method: "get",
    url: `${BASE_PATH}/find/${id}`,
});
//创建招聘
export const createRecruitApi = (data) => request({
    url: `${BASE_PATH}/create`,
    data
});
//查询报名列表
export const findEntryListByIdApi = (id,data) => request({
    url: `${BASE_PATH}/entryList/${id}`,
    data
});
//修改招聘
export const updateApi = (data) => request({
    method: "put",
    url: `${BASE_PATH}/update`,
    data
});
//删除招聘
export const delRecruitApi = (id, del=1) => request({
    method: "delete",
    url: `${BASE_PATH}/delete/${id}/${del}`,
});

//报名招聘
export const entryRecruitApi = (id,data) => request({
    url: `${BASE_PATH}/entry/${id}`,
    data
});
