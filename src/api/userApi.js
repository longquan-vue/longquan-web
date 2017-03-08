import {request} from './ajax'
const BASE_PATH = 'user'
export const findByIdApi = (id) => {
  return request({
    url: `${BASE_PATH}/get/${id}`,
  })
}
export const findAllApi = () => {
  return request({
    url: `${BASE_PATH}/all`,
  })
}
