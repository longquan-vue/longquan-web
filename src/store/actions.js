// api
import {mineApi, findApi, getByIdApi, mineWelfareApi, mineScoreApi, mineMsgApi, signApi, mineActivityApi, mineHealthApi, deleteApi, delUserApi, updateUserApi, getSignApi, getWeekSignApi, mineRecruitApi} from "../api/userApi";
import {welfareApi, findWelfareByIdApi, delWelfareApi, pauseWelfareApi, updateWelfareApi, createWelfareApi} from "../api/welfareApi";
import {adminApi, loginOutApi, loginApi, adminListApi, createAdminApi, delAdminApi, updateAdminApi} from "../api/adminApi";
import {findActivityApi, findEntryListByIdApi, findActivityDetailApi, createActivityApi, updateActivityApi, deleteActivityApi, exportEntryApi} from "../api/activityApi";
import {findRecruitApi, findRecruitDetailApi, entryRecruitApi, delRecruitApi, findRecruitEntryListByIdApi, createRecruitApi, updateRecruitApi, exportRecruitEntryApi} from "../api/recruitApi";
import {fileApi, delFileApi, delPicApi} from "../api/fileApi";
import {createPollApi, pollListApi, updatePollApi, getPollApi, delPollApi} from "../api/pollApi";
import {findHealthApi, findHealthDetailApi, findHealthEnterApi, exportHealthEntryApi, createHealthApi, updateHealthApi, pauseHealthApi, delHealthApi} from "../api/healthApi";
import {getSysApi, setSysApi, findLinkApi, createLinkApi, updateLinkApi, delLinkApi} from "../api/systemApi";
import {findArticleApi, createArticleApi, updateArticleApi, getArticleApi, delArticleApi, pauseArticleApi} from "../api/articleApi";
import {findEchoApi, createEchoApi, updateEchoApi, delEchoApi, getEchoApi, pauseEchoApi} from "../api/echoApi";
import {findDepApi, findDepListApi, createDepApi, updateDepApi, delDepApi, getDepApi, auditDepApi} from "../api/departmentApi";
import {createLeaderApi, updateLeaderApi, delLeaderApi, findLeaderApi, getLeaderApi} from "../api/leaderApi";
// type
import {SET_LIST_VAL, DEL_DATA, SET_LOGIN, SET_DATA, GET_DATA_LIST, GET_MINE, PAGE, CHANE_SELECT, DEL_LIST, SETTING, CHANGE_LIST} from "./mutation-types";
// defData
import {defData, CREATE} from "../constant";
import router from "../router";
// action
import {alert, success, error, appAlert} from "../actions";
const clear = ({commit}, key = 'user') => {
  commit(SET_DATA, defData[key]);
  commit(GET_DATA_LIST, null);
  commit(PAGE)
};
//上传文件
const upload = ({commit, state}, {file}) => fileApi(file);
//删除配图
const delPic = ({commit, state}, url) => url && delPicApi(url);
// 删除文件
const delFile = ({commit, state}, [key, idx]) => delFileApi(state.data[key][idx].id, 2).then(() => commit(DEL_LIST, [key, idx]));
// 获取系统配置
const getSetting = ({commit, state}) => !state.setting.id && getSysApi().then((sys) => commit(SETTING, sys))
// go
const go = ({commit}, [name, id, query] = []) => new Promise((resolve, reject) => resolve(!name ? router.back() : router.push({
    name,
    params: id ? {id} : {},
    query
  })))
const toUrl = ({commit}, {path, params, query}) => router.push({path, params, query})
// goto
const goto = ({commit}, [name, query]) => new Promise((resolve, reject) => resolve(router.push({name, query})))
//清除page
const clearPage = ({commit}) => commit(PAGE);
// 更改page
const changePage = ({commit, state}, page) => commit(PAGE, page ? page : {page: state.page.page + 1, series: true});
//更改查询字段
const changeSelect = ({commit, state}, data) => commit(CHANE_SELECT, data);
//获取用户信息
const getUser = async({commit, state}) => commit(SET_DATA, await getByIdApi(state.route.params.id));
// 获取用户列表
const findUserList = async({commit, state}) => commit(GET_DATA_LIST, await findApi(state.page));
// 修改用户
const updateUser = ({commit, state}) => updateUserApi(state.data).then(() => success('修改成功!'));
//删除用户
const delUser = ({commit}, [id, idx]) => delUserApi(id, 1).then(() => success().then(() => commit(DEL_DATA, idx))).catch(() => error('删除失败！'));
//获取我的信息
const getMine = ({commit, state}, mine) => {
  if (mine) {
    commit(GET_MINE, mine);
    return new Promise((resolve) => resolve());
  }
  if (!!state.login.id) {
    return new Promise((resolve) => resolve());
  }
  if (state.route.path.split('/')[2] == 'fwh' || state.route.path.split('/')[2] == 'wzzy') {
    return mineApi().then((mine) => commit(GET_MINE, mine));
  } else {
    return adminApi().then((mine) => commit(GET_MINE, mine)).catch(() => go({commit}, ['login']));
  }
};
// 登录
const login = async({commit, state}, admin) => {
  if (admin.id) {
    commit(GET_MINE, admin);
    go({commit, state}, ['userList']);
  } else {
    loginApi(admin).then(({user}) => {
      commit(GET_MINE, user);
      go({commit, state}, ['userList']);
    }).catch(() => alert('错误', '账号或密码错误！', 'error'));
  }
}
// 退出
const loginOut = ({commit, state},flag=false) => loginOutApi().then(() => {
  flag||go({  commit,  state}, ['login']);
  commit(GET_MINE);
});
//签到
const singin = ({commit, state}, vux) => state.login.isSign ? appAlert(vux, '您已签到') : signApi().then((res) => {
    appAlert(vux, '签到成功');
    commit(GET_MINE, {...state.login, isSign: true});
    commit(CHANGE_LIST, [state.list.length + '', res]);
  }).catch(() => appAlert(vux, '签到失败，请重试'));

// 获取周签到记录
const getWeekSign = ({commit, state}) => getWeekSignApi().then((data) => commit(GET_DATA_LIST, data))

// 获取签到记录
const getSign = ({commit, state}, id) => getSignApi(id, state.page).then((data) => commit(GET_DATA_LIST, data))
//获取我的福利
const getMineWelfare = ({commit, state}) => getMine({
  commit,
  state
}).then(async() => commit(GET_DATA_LIST, await mineWelfareApi(state.login.id, 0, state.page)));
//获取我的积分记录
const getMineScore = ({commit, state}) => getMine({
  commit,
  state
}).then(async() => commit(GET_DATA_LIST, await mineScoreApi(state.login.id, 0, state.page)));
//获取我的消息记录
const getMineMsg = ({commit, state}) => state.page.page <= state.page.pages && getMine({
  commit,
  state
}).then(async() => commit(GET_DATA_LIST, await mineMsgApi(state.page)));
//获取我的工会活动
const getMineActivity = ({commit, state}) => state.page.page <= state.page.pages && getMine({
  commit,
  state
}).then(async() => commit(GET_DATA_LIST, await mineActivityApi(1, state.page)));
//获取我的健身项目
const getMineHealth = ({commit, state}) => state.page.page <= state.page.pages && getMine({
  commit,
  state
}).then(async() => commit(GET_DATA_LIST, await mineHealthApi(0, state.page)));
//获取我的收藏的招聘信息
const getMineRecruit = ({commit, state}) => state.page.page <= state.page.pages && getMine({
  commit,
  state
}).then(async() => commit(GET_DATA_LIST, await mineRecruitApi(0, state.page)));

//公共删除方法
const delMethod = async({commit, state}, idx) => deleteApi(state.list[idx].id, 1).then(() => success().then(() => commit(DEL_DATA, idx))).catch(() => error('删除失败！'));
//获取福利  兑换列表
const getWelfare = async({commit, state}) => commit(GET_DATA_LIST, await welfareApi(state.page));
//获取福利   福利详情
const getWelfareDetail = async({commit, state}, data = {}) => {
  const {query:{id, ticket, welfareId, used}}=state.route;
  if (welfareId) {
    findWelfareByIdApi(welfareId).then((data) => commit(SET_DATA, {...data, ticket, id, used}))
  } else if (state.route.params.id) {
    state.route.params.id == CREATE ? commit(SET_DATA, {edit: true, ...defData.welfare}) : findWelfareByIdApi(state.route.params.id).then((data) => commit(SET_DATA, {...data, edit: false}))
  } else {
    commit(SET_DATA, {...defData.welfare, ...data});
  }
};
//获取福利   创建福利
const createWelfare = ({commit, state}) => createWelfareApi(state.data).then(() => success('创建成功！')).catch(() => error('创建失败！'))
//获取福利   修改福利
const updateWelfare = ({commit, state}) => updateWelfareApi(state.data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
// 删除福利
const delWelfare = ({commit, state}, [id, idx]) => delWelfareApi(id).then(() => commit(DEL_DATA, idx))
// 暂停开启福利
const pauseWelfare = ({commit, state}, [id, key, val]) => pauseWelfareApi(id).then(() => commit(CHANGE_LIST, [key, val]))
//获取活动相关数据   活动列表
const getActivity = async({commit, state}) => commit(GET_DATA_LIST, await findActivityApi(state.page, 0));
//获取活动相关数据   活动报名列表
const getEnter = async({commit, state}) => commit(GET_DATA_LIST, await findEntryListByIdApi(state.route.params.id, state.page));
// 导出活动报名表单
const exportEntry = ({commit, state}) => exportEntryApi(state.route.params.id, state.page);
//获取活动相关数据   活动详情
const getActivityDetail = ({commit, state}) => {
  const {params:{id}}=state.route;
  if (id == CREATE) {
    commit(SET_DATA, {edit: true, ...defData.activity});
  } else {
    findActivityDetailApi(id).then((data) => commit(SET_DATA, {edit: false, ...data}))
  }
};
//获取活动相关数据  报名
// const entryActivity = ({commit, state}) => entryActivityApi(state.route.params.id).then((data) => success('报名成功！')).catch((data) => error(data.msg));
//获取活动相关数据   创建活动
const createActivity = ({commit, state}) => createActivityApi(state.data).then(() => success('创建成功！')).catch(() => error('创建失败！'))
//获取活动相关数据   修改活动
const updateActivity = ({commit, state}) => updateActivityApi(state.data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
//获取活动相关数据   删除活动
const deleteActivity = async({commit}, [id, idx]) => deleteActivityApi(id, 1).then(() => success().then(() => commit(DEL_DATA, idx)));
//获取健身项目相关数据   列表
const getHealth = async({commit, state}) => commit(GET_DATA_LIST, await findHealthApi(state.page));
//获取健身项目报名列表
const getHealthEnter = async({commit, state}) => commit(GET_DATA_LIST, await findHealthEnterApi(state.route.params.id, state.page));
//导出健身项目报名列表
const exportHealthEntry = ({commit, state}) => exportHealthEntryApi(state.route.params.id, state.page);
//获取健身项目相关数据   详情
const gethealthDetail = async({commit, state}) => {
  await getMine({commit, state});
  const {params:{id}}=state.route;
  if (id == CREATE) {
    commit(SET_DATA, {edit: true, ...defData.health});
  } else {
    commit(SET_DATA, {edit: false, ...await findHealthDetailApi(id)});
  }
};
//获取健身项目相关数据   创建健身项目
const createHealth = ({commit, state}) => createHealthApi(state.data).then(() => success('创建成功！')).catch(() => error('创建失败！'))
//获取健身项目相关数据   修改健身项目
const updateHealth = ({commit, state}) => updateHealthApi(state.data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
//获取健身项目相关数据   删除健身项目
const delHealth = ({commit, state}, [id, idx]) => delHealthApi(id).then(() => success('删除成功！').then(() => commit(DEL_DATA, idx)))
//获取健身项目相关数据   暂停开启健身项目
const pauseHealth = ({commit, state}, [id, key, val]) => pauseHealthApi(id).then(() => commit(CHANGE_LIST, [key, val]))
//获取招聘信息相关数据  招聘列表
const getRecruit = async({commit, state}) => commit(GET_DATA_LIST, await findRecruitApi(state.page));
//获取招聘信息相关数据  创建
const createRecruit = ({commit, state}) => createRecruitApi(state.data).then(() => success('创建成功！')).catch(() => error('创建失败！'))
//获取招聘信息相关数据  修改
const updateRecruit = ({commit, state}) => updateRecruitApi(state.data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
//获取招聘信息相关数据  报名列表
const getRecruitSigin = async({commit, state}) => commit(GET_DATA_LIST, await findRecruitEntryListByIdApi(state.route.params.id, state.page));
//获取招聘信息相关数据  导出报名列表
const exportRecruitEntry = ({commit, state}) => exportRecruitEntryApi(state.route.params.id, state.page)
//删除招聘信息
const delRecruit = ({commit, state}, [id, idx]) => delRecruitApi(id).then(() => commit(DEL_DATA, idx))
//获取招聘信息相关数据   招聘详情
const getRecruitDetail = ({commit, state}) => {
  const {params:{id}}=state.route;
  if (id == CREATE) {
    commit(SET_DATA, {edit: true, ...defData.recruit});
  } else {
    findRecruitDetailApi(id).then((data) => commit(SET_DATA, {...data, edit: false}))
  }
};
//获取招聘信息相关数据  报名
const entryRecruit = ({commit, state}, [id, data]) => entryRecruitApi(id, data).then(() => success('报名成功！')).catch((data) => error(data.msg));
// 设置值
const setData = ({commit}, data) => commit(SET_DATA, data)
// 设置LOGIN
const setLogin = ({commit}, login) => commit(SET_LOGIN, login)
// 设置数组
const setList = ({commit, state}, {key, data}) => commit(SET_DATA, {[key]: [...state.data[key], data]})
// 设置数组
const setListVal = ({commit, state}, [key, value]) => commit(SET_LIST_VAL, [key, value])
const changeList = ({commit, state}, [key, value]) => commit(CHANGE_LIST, [key, value])
// 删除数组
const delList = ({commit, state}, [key, idx]) => commit(DEL_LIST, [key, idx])
// 修改系统设置
const changeSys = ({commit, state}, data) => commit(SETTING, data)
// 保存系统设置
const saveSys = ({commit, state}) => setSysApi(state.setting).then(() => success('修改成功！')).catch(() => error('修改失败！'))
// 获取友情链接
const findLink = async({commit, state}) => commit(GET_DATA_LIST, await findLinkApi(state.page));
// 创建友情链接
const createLink = ({commit, state}, links) => createLinkApi(links).then(() => success('创建成功！')).catch(() => error('创建失败！'))
// 修改友情链接
const updateLink = ({commit, state}, data) => updateLinkApi(data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
// 删除友情链接
const delLink = ({commit, state}, [id, idx]) => delLinkApi(id).then(() => commit(DEL_DATA, idx))
// 获取投票调查详情
const getPoll = ({commit, state}) => {
  const {params:{id}}=state.route;
  if (id == CREATE) {
    commit(SET_DATA, {edit: true, ...defData.poll});
  } else {
    getPollApi(id).then((data) => commit(SET_DATA, {...data, edit: false}))
  }
};
// 获取投票调查列表
const getPollList = async({commit, state}) => commit(GET_DATA_LIST, await pollListApi(state.page));
// 创建投票调查
const createPoll = ({commit, state}) => createPollApi(state.data).then(() => success('创建成功！')).catch(() => error('创建失败！'))
// 修改投票调查
const updatePoll = ({commit, state}) => updatePollApi(state.data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
//删除投票调查
const delPoll = ({commit, state}, [id, idx]) => delPollApi(id).then(() => commit(DEL_DATA, idx))
// 获取投票调查详情
const getAdmin = async({commit, state}) => {
  const {params:{id}}=state.route;
  if (id == CREATE) {
    commit(SET_DATA, {edit: true, ...defData.poll});
  } else {
    commit(SET_DATA, {...await getPollApi(id), edit: false});
  }
};
// 获取投票调查列表
const getAdminList = async({commit, state}, data) => commit(GET_DATA_LIST, await adminListApi(data || state.page));
// 创建投票调查
const createAdmin = ({commit, state}) => createAdminApi(state.data).then(() => success('创建成功！')).catch(() => error('创建失败！'))
// 修改投票调查
const updateAdmin = ({commit, state}) => updateAdminApi(state.data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
//删除投票调查
const delAdmin = ({commit, state}, [id, idx]) => delAdminApi(id).then(() => commit(DEL_DATA, idx))
// 获取文章列表
const findArticle = async({commit, state}, [type = -1, del = 0]) => commit(GET_DATA_LIST, await findArticleApi(state.page, del, type));
// 创建文章
const createArticle = ({commit, state}) => createArticleApi(state.data).then(() => success('创建成功！')).catch(() => error('创建失败！'))
// 修改文章
const updateArticle = ({commit, state}) => updateArticleApi(state.data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
// 设置头条
const topArticle = ({commit, state}, {id, top, idx}) => updateArticleApi({id, top}).then(() => success('设置成功！').then(() => commit(CHANGE_LIST, [`${idx}.top`, top]))).catch(() => error('设置失败！'))
// 获取文章详情
const getArticle = ({commit, state}) => {
  const {params:{id}}=state.route;
  if (id == CREATE) {
    commit(SET_DATA, {edit: true, ...defData.article});
  } else {
    getArticleApi(id).then((data) => commit(SET_DATA, {... data, edit: false}))
  }
};
//删除文章
const delArticle = ({commit, state}, [id, idx]) => delArticleApi(id).then(() => commit(DEL_DATA, idx))
//切换文章状态
const pauseArticle = ({commit, state}, [id, key, val]) => pauseArticleApi(id).then(() => commit(CHANGE_LIST, [key, val]))
// 获取回音壁列表
const findEcho = async({commit, state}) => commit(GET_DATA_LIST, await findEchoApi(state.page));
// 创建回音壁
const createEcho = ({commit, state}, data) => createEchoApi(data || state.data).then(() => success('创建成功！')).catch(() => error('创建失败！'))
// 修改回音壁
const updateEcho = ({commit, state}) => updateEchoApi(state.data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
// 获取回音壁详情
const getEcho = ({commit, state}) => {
  const {params:{id}}=state.route;
  if (id == CREATE) {
    commit(SET_DATA, {edit: true, ...defData.echo});
  } else {
    getEchoApi(id).then((data) => commit(SET_DATA, {...data, edit: false}))
  }
};
//删除回音壁
const delEcho = ({commit, state}, [id, idx]) => delEchoApi(id).then(() => commit(DEL_DATA, idx))
// 显示或关闭回音壁
const pauseEcho = ({commit, state}, [id, key, val]) => pauseEchoApi(id).then(() => commit(CHANGE_LIST, [key, val]))
// 获取工会列表
const findDep = async({commit, state}) => commit(GET_DATA_LIST, await findDepApi(state.page));
// 获取工会列表
const findDepList = async({commit, state}) => commit(GET_DATA_LIST, await findDepListApi(state.page));
// 删除工会
const delDep = ({commit, state}, [id, idx]) => delDepApi(id).then(() => commit(DEL_DATA, idx))
// 获取工会详情
const getDep = ({commit, state}) => {
  const {params:{id}}=state.route;
  if (id == 'mine') {
    getMine({commit, state}).then(() => getDepApi(state.login.department[0]).then((data) => commit(SET_DATA, {...data, mine: true})));
  } else if (id == CREATE) {
    commit(SET_DATA, {...defData.dep, edit: false})
  } else {
    getDepApi(id).then((data) => commit(SET_DATA, {...data, mine: false, edit: true}))
  }
};
// 创建工会
const createDep = ({commit, state}) => createDepApi(state.data).then(() => success('创建成功！')).catch(() => error('创建失败！'))
// 修改工会
const updateDep = ({commit, state}) => updateDepApi(state.data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
// 修改工会
const auditDep = ({commit, state}) => auditDepApi(state.data).then(() => success('审核成功！')).catch(() => error('审核失败！'))
// 获取领导列表
const findLeader = async({commit, state}) => commit(GET_DATA_LIST, await findLeaderApi(state.page));
// 删除领导
const delLeader = ({commit, state}, [id, idx]) => delLeaderApi(id).then(() => commit(DEL_DATA, idx))
// 获取领导详情
const getLeader = ({commit, state}) => {
  const {params:{id}}=state.route;
  if (id == CREATE) {
    commit(SET_DATA, {...defData.leader, edit: false})
  } else {
    getLeaderApi(id).then((data) => commit(SET_DATA, {...data, edit: true}))
  }
};
// 创建领导
const createLeader = ({commit, state}) => createLeaderApi(state.data).then(() => success('创建成功！')).catch(() => error('创建失败！'))
// 修改领导
const updateLeader = ({commit, state}) => updateLeaderApi(state.data).then(() => success('修改成功！')).catch(() => error('修改失败！'))
export default {
  findLeader,// 获取领导列表
  delLeader,// 删除领导
  getLeader,// 获取领导详情
  createLeader,// 创建领导
  updateLeader,// 修改领导
  getMineWelfare,
  getUser,
  findUserList,
  delMethod,  //公共删除方法
  changePage,  // 改变page
  clearPage,  // 清除page
  getMine,//获取登录信息
  setData,// 设置对象
  setLogin,// 设置login
  setList, // 设置数组
  delList, //删除数组
  setListVal,//设置数组值
  changeList,
  go,
  goto,
  upload,
  clear, // 清理工作
  changeSelect, // 修改查询
  getWelfareDetail,  //获取福利详情
  getMineScore,  //获取我的积分记录
  getMineMsg,    //获取我的消息记录
  getMineActivity,  //获取我的工会活动
  getMineHealth,  //获取我的健身项目
  getMineRecruit, //获取我的收藏的招聘信息
  getWelfare,    //获取福利列表
  singin,      //签到
  getWeekSign, //签到自然周
  // convertWelfare,  //兑换福利
  getActivity,     //获取工会活动
  getActivityDetail,  //获取工会活动详情
  updateActivity,//修改工会活动
  createActivity,//创建工会活动
  // entryActivity,  //报名工会活动
  getRecruit,  //获取招聘信息列表
  getRecruitSigin,  ////获取招聘报名列表
  exportRecruitEntry,  ////导出招聘报名列表
  getRecruitDetail,  // 获取招聘信息详情
  entryRecruit,  //报名招聘
  getHealth,   //获取健身中心列表
  getHealthEnter,   //获取健身中心报名列表
  gethealthDetail, //获取健身项目详情
  exportHealthEntry, //导出健身中心报名列表
  loginOut,// 登出
  login,// 登录
  delFile,//删除文件
  delPic,//删除文件
  getEnter,//获取报名表单
  deleteActivity,// 删除活动
  delUser,//删除用户
  exportEntry, // 导出活动报名表单
  updateUser, // 修改用户
  getSetting,//获取系统设置
  changeSys,//修改系统设置
  saveSys,//保存系统设置
  getSign,//获取签到记录
  delWelfare,// 删除福利
  pauseWelfare,// 暂停开启福利
  delRecruit,// 删除招聘信息
  createHealth,//创建健身项目
  updateHealth,//修改健身项目
  createWelfare,//创建福利
  updateWelfare,//修改福利
  delHealth,// 删除健身活动
  pauseHealth,//暂停开启健身项目
  createRecruit,//创建招聘信息
  updateRecruit,//修改招聘信息
  getPollList,// 获取调查列表
  getPoll,// 获取调查详情
  createPoll,// 创建投票调查
  updatePoll,// 修改投票调查
  delPoll,// 修改投票调查
  createAdmin,//创建职工
  delAdmin,//删除职工
  getAdmin,//获取职工详情
  updateAdmin,//修改职工
  getAdminList,//获取职工列表
  findArticle,//获取文章列表
  getArticle,//获取文章详情
  createArticle,//创建文章
  delArticle,//删除文章
  pauseArticle,//切换文章状态
  updateArticle,//修改文章
  findLink,//获取友情链接列表
  createLink,// 创建友情链接
  updateLink,// 修改友情链接
  delLink,// 删除友情链接
  findEcho,//获取回音壁列表
  createEcho,//创建回音壁
  updateEcho,//修改回音壁
  getEcho,//获取回音壁详情
  delEcho,//删除回音壁
  pauseEcho, //关闭或显示回音壁
  toUrl,
  findDep,//获取工会列表
  findDepList,//获取工会列表
  delDep,//删除工会
  getDep,//获取公会详情
  createDep,//创建工会
  updateDep,//修改工会
  auditDep,//审核工会
  topArticle,//设置头条
}
