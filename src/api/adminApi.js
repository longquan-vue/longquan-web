import {request} from './ajax'
const BASE_PATH = '/admin';

export const codeApi = () => {
  return request({
    method: 'get',
    url: `${BASE_PATH}/login2`,
  });
};
export const loginOutApi = () => {
  return request({
    url: `${BASE_PATH}/loginOut`,
  });
};
export const adminApi = () => {
  return request({
    method: 'get',
    url: `${BASE_PATH}/mine`,
  });
};
export const loginApi = (data) => {
  return request({
    url: `${BASE_PATH}/login`,
    data
  });
};
