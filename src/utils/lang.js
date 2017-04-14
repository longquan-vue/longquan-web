import assertType from './assertType'

/**
 * isNull
 * 返回true 就是一个空值
 * 返回false 就是非空值
 */
export const isNull = (value) => {
  if (value !== null && value !== undefined && value !== '') {
    return false
  }
  return true
}

const getFiled = (value, filed) => {
  if (value) {
    return value[filed]
  }
}

export const getValue = (value, filedsStr) => {
  if (!assertType(filedsStr, String)) {
    throw new Error('参数应为String')
  }
  const fileds = filedsStr.split('.')

  for (const i in fileds) {
    value = getFiled(value, fileds[i])
  }

  return value
}

// 获取指定key的值
export const copyFieldsValue = (value, fields) => {
  if (!value) {
    return value
  }
  const newValue = {}
  fields.forEach((field) => {
    newValue[field] = value[field]
  })

  return newValue
}
