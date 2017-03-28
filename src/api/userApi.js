import {request} from './ajax'
const BASE_PATH = '/user'

export const mineApi = () => {
  return request({
      method:"get",
      url: `${BASE_PATH}/mine`,
  })
}
export const signApi = () => {
  return request({
      method:"put",
      url: `${BASE_PATH}/sign`,
  })
}
export const updateApi = () => {
    return request({
        method:"put",
        url: `${BASE_PATH}/mine`,
    })
}

