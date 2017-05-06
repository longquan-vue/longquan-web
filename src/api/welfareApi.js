import {request} from './ajax'
const BASE_PATH = '/welfare'

//获取积分福利兑换列表
export const welfareApi = (data, del = 0) => request({
  url: `${BASE_PATH}/find/${del}`,
  data
});
//创建福利
export const createWelfareApi = (data) => request({
  url: `${BASE_PATH}/create`,
  data
});
//查询福利详情
export const findWelfareByIdApi = (id) => request({
  method: "get",
  url: `${BASE_PATH}/find/${id}`,
});
//兑换福利
export const convertApi = (id) => request({
  url: `${BASE_PATH}/convert/${id}`,
});
//修改福利
export const updateWelfareApi = (data) => request({
  url: `${BASE_PATH}/update`,
  data
});
//删除福利
export const delWelfareApi = (id, del = 1) => request({
  method: "delete",
  url: `${BASE_PATH}/delete/${id}/${del}`,
});
//开启或暂停福利
export const pauseWelfareApi = (id) => request({
  url: `${BASE_PATH}/pause/${id}`,
});
//福利统计
export const welfareCountApi = (type = 2) => request({
  url: `${BASE_PATH}/account/${type}`,
});
