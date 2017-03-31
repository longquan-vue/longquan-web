import {request} from './ajax'
const BASE_PATH = '/user';
// 获取我的资料
export const mineApi = () => request({
    method: "get",
    url: `${BASE_PATH}/mine`,
});
// 签到
export const signApi = () => request({
    method: "put",
    url: `${BASE_PATH}/sign`,
});
// 修改我的资料
export const updateApi = (data) => request({
    method: "put",
    url: `${BASE_PATH}/mine`,
    data
});
// 查询指定id用户,0：不刪；1：回收站 ;2:永久删除
export const getByIdApi = (id) => request({
    method: "get",
    url: `${BASE_PATH}/get/${id}`,
});
// 条件查询列表
export const findApi = (data) => request({
    url: `${BASE_PATH}/find`,
    data
});
//删除用户
export const delUserApi = (id, del) => request({
    method: "delete",
    url: `${BASE_PATH}/delete/${id}/${del}`,
});
