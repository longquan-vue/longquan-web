import {request} from './ajax'
const BASE_PATH = '/user';
// 获取登录二维码
export const userLoginApi = () => request({
  method: "get",
  url: `${BASE_PATH}/login2`,
});
// 获取我的资料
export const mineApi = () => request({
  method: "get",
  url: `${BASE_PATH}/mine`,
});
// 签到
export const signApi = () => request({
  url: `${BASE_PATH}/sign`,
});
// 修改我的资料
export const updateUserApi = (data) => request({
  url: `${BASE_PATH}/update`,
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

//我的福利
export const mineWelfareApi = (id, del, data) => request({
  url: `/history/welfare/${id}/${del}`,
  data
});

//我的积分
export const mineScoreApi = (id, del, data) => request({
  url: `/history/score/${id}/${del}`,
  data
});
//签到历史记录
export const getSignApi = (id, data, del = 0) => request({
  url: `/history/sign/${id}/${del}`,
  data
});
//签到周历史记录
export const getWeekSignApi = () => request({
    method: "get",
    url: `/history/weekSign`,
});

//我的消息
export const mineMsgApi = (data) => request({
  url: `/history/msg`,
  data
});
//我的活动
export const mineActivityApi = (del, data) => request({
  url: `/history/activity/${del}`,
  data
});
//我的健身
export const mineHealthApi = (del, data) => request({
  url: `/history/sport/${del}`,
  data
});
//我的收藏招聘信息
export const mineRecruitApi = (del, data) => request({
    url: `/history/getRecurit/${del}`,
    data
});
//删除API
export const deleteApi = (id, del) => request({
  method: "delete",
  url: `/history/delete/${id}/${del}`,
});
//用户统计
export const userCountApi = () => request({
  url: `${BASE_PATH}/account`,
});
//签到统计
export const signCountApi = () => request({
  url: `${BASE_PATH}/signAccount`,
});
