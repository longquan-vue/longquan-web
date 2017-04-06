import {request} from './ajax'
const BASE_PATH = '/admin';

export const codeApi = () => {
    return request({
        method:'get',
        url: `${BASE_PATH}/login2`,
    });
};