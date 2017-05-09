import {request} from './ajax'
const BASE_PATH = '/activity';


//获取活动列表
export const findActivityApi = (data, del) => request({
  url: `${BASE_PATH}/find/${del}`,
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
export const findEntryListByIdApi = (id, data) => request({
  url: `${BASE_PATH}/entryList/${id}`,
  data
});
//修改活动
export const updateActivityApi = (data) => request({
  url: `${BASE_PATH}/update`,
  data
});
//删除活动
export const deleteActivityApi = (id, del) => request({
  method: "delete",
  url: `${BASE_PATH}/delete/${id}/${del}`,
});

//报名活动
export const entryActivityApi = (id) => request({
  url: `${BASE_PATH}/entry/${id}`,
});
//取消报名活动
export const cancelEntryActivityApi = (id) => request({
  url: `${BASE_PATH}/cancelEntry/${id}`,
});
// 导出活动报名表单
export const exportEntryApi = (id, data) => request({
  url: `${BASE_PATH}/exportEntry/${id}`,
  data
});

//签到活动
export const signActivityApi = (id) => request({
  url: `${BASE_PATH}/sign/${id}`,
});
