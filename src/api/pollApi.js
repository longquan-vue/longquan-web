import {request} from './ajax'
const BASE_PATH = '/poll';

//创建投票调查
export const createPollApi = (data) => request({
  url: `${BASE_PATH}/create`,
  data
});
//编辑投票调查
export const updatePollApi = (data) => request({
  url: `${BASE_PATH}/update`,
  data
});
//获取投票调查列表
export const pollListApi = (data) => request({
  url: `${BASE_PATH}/find`,
  data
});
//查询详情
export const getPollApi = (id) => request({
  method: 'get',
  url: `${BASE_PATH}/get/${id}`,
});
//删除
export const delPollApi = (id, del = 1) => request({
  method: 'delete',
  url: `${BASE_PATH}/delete/${id}/${del}`,
});
