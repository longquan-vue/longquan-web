/**
 * Created by zhongcheng on 2017/4/6 0006.
 */
import {request} from './ajax'
const BASE_PATH = '/sports';

//获取健身项目列表
export const findHealthApi = (data) => request({
  url: `${BASE_PATH}/list`,
  data
});

//获取健身项目详情
export const findHealthDetailApi = (id) => request({
  method: "get",
  url: `${BASE_PATH}/get/${id}`,
});
//获取健身项目报名列表
export const findHealthEnterApi = (id, data) => request({
  url: `${BASE_PATH}/entryList/${id}`,
  data
});
//导出健身项目报名列表
export const exportHealthEntryApi = (id, data) => request({
  url: `${BASE_PATH}/export/${id}`,
  data
});
//创建健身项目
export const createHealthApi = (data) => request({
  url: `${BASE_PATH}/create`,
  data
});
//修改健身项目
export const updateHealthApi = (data) => request({
  url: `${BASE_PATH}/update`,
  data
});
