import {request} from './ajax'
const BASE_PATH = '/welfare'

//获取积分福利兑换列表
export const welfareApi = (data = {page: 1, pageSize: 10, sort: [], order: [], filed: [], keyWord: []},del = 0) => request({
  url: `${BASE_PATH}/find/${del}`,
  data
});
//创建福利
export const createApi = (data) => request({
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
export const updateApi = (data) => request({
  method: "put",
  url: `${BASE_PATH}/update`,
  data
});
//删除福利
export const deleteApi = (id, del) => request({
  method: "delete",
  url: `${BASE_PATH}/${id}/${del}`,
});
