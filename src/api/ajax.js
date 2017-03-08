import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import assertType from '../utils/assertType'
Vue.use(VueAxios, axios);

// 动态设置本地和线上接口域名
// Vue.axios.defaults.baseURL = "";

/**
 * 封装axios的通用请求
 * @param  {string}   method     get、post....(默认post)
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数
 * @param  {object}   options     请求选项,options.accessToken === null 时随机生成字符串作为accessToken
 * @returns {Promise.<TResult>|*}
 */
export const request = ({method = 'post', url, data, options = {}} = {}) => {
  url = `/rest${url}`
  // 分发显示加载样式任务
  this.$store.dispatch('show_loading');

  // const accessToken = options.accessToken === null ? createNonceStr() : options.accessToken || getAccessToken()
  // delete options.accessToken

  let param1
  let param2
  if (['get', 'head', 'delete', 'jsonp'].indexOf(method.toLocaleLowerCase()) !== -1) {
    options.params = {
      // ...signParams,
      ...data,
      ...options.params,
    }
    param1 = {...options, body: data}
  } else {
    param1 = data
    param2 = options
  }
  return Vue.axios[method](url, param1, param2).catch(response => Promise.reject({code: 500, msg: '服务器繁忙'})).then((response) => {
    // 如果code 不等于200，当作异常处理
    let {data} = response
    if (assertType(data, String)) {
      data = JSON.parse(data)
    }
    if (data && data.code === 200) {
      return data.data === undefined ? {} : data.data
    }
    return Promise.reject(data)
  })

};
