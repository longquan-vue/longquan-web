/**
 * Created by zhongcheng on 2017/4/5 0005.
 */
import {request} from "./ajax";
const BASE_PATH = '/file';

export const fileApi = (file) => {
  const data = new FormData();
  data.append('file', file);
  return request({
    url: `${BASE_PATH}/upload`,
    data
  });
}
export const delFileApi = (id, del) => {
  return request({
    method: 'delete',
    url: `${BASE_PATH}/delete/${id}/${del}`,
  });
}
export const delPicApi = (url) => request({
  method: 'delete',
  url: `${BASE_PATH}/deleteUrl/${encodeURIComponent(url)}`,
});
export const downloadApi = (id) => {
  const appType = `appType=${window.location.pathname.split('/')[2]}`;
  let url = `/rest${BASE_PATH}/download/${id}?${appType}`;
  if (process.env.NODE_ENV == 'development') {
    url = `http://java.ichuangye.cn${url}&debug=weizidong`
  }
  return url
}

