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
// 获取服务号自定义菜单
export const getFwhMenuApi = () => request({method: 'get', url: `/wechat/fwMenu`})
// 创建服务号自定义菜单
export const createFwhMenuApi = () => request({method: 'post', url: `/wechat/fwMenu`})
// 删除服务号自定义菜单
export const delFwhMenuApi = () => request({method: 'delete', url: `/wechat/fwMenu`})

