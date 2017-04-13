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