import {request} from './ajax'
const BASE_PATH = '/echo';
//获取列表
export const findEchoApi = (data, del = 0) => request({
  url: `${BASE_PATH}/find/${del}`,
  data
});
//获取详情
export const getEchoApi = (id) => request({
  method: "get",
  url: `${BASE_PATH}/get/${id}`,
});
//创建
export const createEchoApi = (data) => request({
  url: `${BASE_PATH}/create`,
  data
});
//修改
export const updateEchoApi = (data) => request({
  url: `${BASE_PATH}/update`,
  data
});
//删除
export const delEchoApi = (id, del) => request({
  method: "delete",
  url: `${BASE_PATH}/delete/${id}/${del}`,
});
//关闭或显示
export const pauseEchoApi = (id) => request({
  url: `${BASE_PATH}/pause/${id}`,
});
