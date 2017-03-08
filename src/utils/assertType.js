import Vue from 'vue'
/**
 * 值类型断言
 *
 * @param {*} value
 * @param {Function} type
 * @return {Object}
 */
export default function (value, type) {
  let valid
  let expectedType
  if (type === String) {
    expectedType = 'string'
    valid = typeof value === expectedType
  } else if (type === Number) {
    expectedType = 'number'
    valid = typeof value === expectedType
  } else if (type === Boolean) {
    expectedType = 'boolean'
    valid = typeof value === expectedType
  } else if (type === Function) {
    expectedType = 'function'
    valid = typeof value === expectedType
  } else if (type === Object) {
    valid = Vue.util.isPlainObject(value)
  } else if (type === Array) {
    valid = Array.isArray(value)
  } else {
    valid = value instanceof type
  }
  return valid
}
