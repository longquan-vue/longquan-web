import ajax from '../common/ajax'
const BASE_PATH = 'user'
export const findById = (id) => {
  return ajax({
    url: `${BASE_PATH}/get/${id}`
  })
}
