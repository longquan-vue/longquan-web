import {request} from './ajax'
const BASE_PATH = '/system';
// 初始化系统
export const initApi = () => request({url: `${BASE_PATH}/init`})
// 清理缓存
export const clearApi = () => request({url: `${BASE_PATH}/clear`})
// 修改系统设置
export const setSysApi = (data) => request({url: `${BASE_PATH}/setting`, data})
// 获取系统设置
export const getSysApi = () => request({method: 'get', url: `${BASE_PATH}/setting`})
// 获取友情链接
export const findLinkApi = (data) => request({url: `${BASE_PATH}/link/find`, data})
// 创建友情链接
export const createLinkApi = (data) => request({url: `${BASE_PATH}/link`, data})
// 修改友情链接
export const updateLinkApi = (data) => request({method: 'put', url: `${BASE_PATH}/link`, data})
// 删除友情链接
export const delLinkApi = (id) => request({method: 'delete', url: `${BASE_PATH}/link/${id}`})
// 获取服务号自定义菜单
export const getFwhMenuApi = () => request({method: 'get', url: `/wechat/fwMenu`})
// 创建服务号自定义菜单
export const createFwhMenuApi = (data) => request({method: 'post', url: `/wechat/fwMenu`, data, options: {headers: {'Content-Type': 'text/plain'}}})
// 删除服务号自定义菜单
export const delFwhMenuApi = () => request({method: 'delete', url: `/wechat/fwMenu`})
// 同步服务号
export const syncfwhApi = () => request({url: `/wechat/syncfwh`})
// 同步企业号
export const syncqyhApi = () => request({url: `/wechat/syncqyh`})

