import {request} from "./ajax";
const BASE_PATH = '/leader';

//创建
export const createLeaderApi = (data) => request({
  url: `${BASE_PATH}/create`,
  data
});
//编辑
export const updateLeaderApi = (data) => request({
  url: `${BASE_PATH}/update`,
  data
});
//获取列表
export const findLeaderApi = (data) => request({
  url: `${BASE_PATH}/find`,
  data
});
//查询详情
export const getLeaderApi = (id) => request({
  method: 'get',
  url: `${BASE_PATH}/find/${id}`,
});
//删除
export const delLeaderApi = (id) => request({
  method: 'delete',
  url: `${BASE_PATH}/delete/${id}`,
});
