import {request} from './ajax'
const BASE_PATH = '/search';


//搜索
export const searchApi = (data,word) => request({
  url: `${BASE_PATH}/serachKeyWord/${word}`,
  data
});

