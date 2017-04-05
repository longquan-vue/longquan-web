/**
 * Created by zhongcheng on 2017/4/5 0005.
 */
import {request} from './ajax'
const BASE_PATH = '/file';

export const fileApi = (file) => {
    const f = new FormData();
    f.setData('file',file);
    return request({
        url: `${BASE_PATH}/upload`,
        data:f
    });
}