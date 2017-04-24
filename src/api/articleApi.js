import {request} from './ajax'
const BASE_PATH = '/article';

//创建文章
export const createArticleApi = (data) => request({
  url: `${BASE_PATH}/create`,
  data
});
//搜索文章列表
export const findArticleApi = (data, del = 0, type = -1) => request({
  url: `${BASE_PATH}/find/${del}/${type}`,
  data
});
