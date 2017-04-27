import {request} from './ajax'
const BASE_PATH = '/department';

//创建
export const createDepApi = (data) => request({
  url: `${BASE_PATH}/create`,
  data
});
//修改
export const updateDepApi = (data) => request({
  url: `${BASE_PATH}/update`,
  data
});
//修改
export const auditDepApi = (data) => request({
  url: `${BASE_PATH}/audit`,
  data
});
//搜索列表
export const findDepApi = (data, parentid = 0) => request({
  url: `${BASE_PATH}/find/${parentid}`,
  data
});
//获取详情
export const getDepApi = (id) => request({
  method: 'get',
  url: `${BASE_PATH}/get/${id}`
});
//删除
export const delDepApi = (id) => request({
  method: 'delete',
  url: `${BASE_PATH}/delete/${id}`
});
