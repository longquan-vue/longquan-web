//业务逻辑处理
import router from '../router'
import {Message} from 'element-ui';
import {CREATE} from '../constant'
import {
  mineApi, findApi, getByIdApi, mineWelfareApi, mineScoreApi, mineMsgApi,
  signApi, mineActivityApi, mineHealthApi, deleteApi, delUserApi
} from '../api/userApi'
import {welfareApi, findWelfareByIdApi, convertApi} from '../api/welfareApi'
import {adminApi, loginOutApi, loginApi} from '../api/adminApi'
import {
  findActivityApi,
  findEntryListByIdApi,
  findActivityDetailApi,
  createActivityApi,
  deleteActivityApi,
  entryActivityApi
} from '../api/activityApi'
import {
  findRecruitApi, findRecruitDetailApi,
  entryRecruitApi
} from '../api/recruitApi'

import {fileApi, delFileApi} from '../api/fileApi'
import {findHealthApi, findHealthDetailApi} from '../api/healthApi'


import {DEL_DATA, SET_DATA, GET_DATA_LIST, GET_MINE, PAGE, CHANE_SELECT, DEL_LIST} from './mutation-types'
import {defData} from '../constant'
const clear = ({commit}, key = 'user') => {
  commit(SET_DATA, defData[key]);
  commit(GET_DATA_LIST, []);
};
//上传文件
const upload = ({commit, state}, {file}) => fileApi(file);
// 删除文件
const delFile = async({commit, state}, [key, idx]) => {
  const {id} = state.data[key][idx]
  await delFileApi(id, 2)
  commit(DEL_LIST, [key, idx])
}
// go
const go = ({commit}, [name, id]) => router.push({name, params: id ? {id} : {}});
// goto
const goto = ({commit}, [name, query]) => {
  console.log(1111);
  router.push({name, query})
};

//清除page
const clearPage = ({commit}) => commit(PAGE);

// 更改page
const changePage = ({commit, state}, page) => commit(PAGE, page ? page : {page: state.page.page + 1, series: true});
//更改查询字段
const changeSelect = ({commit, state}, data) => commit(CHANE_SELECT, data);

//获取用户信息
const getUser = async({commit, state}) => {
  const {params:{id}}=state.route;
  commit(SET_DATA, await getByIdApi(id));
};
//findUserList 获取用户列表
const findUserList = async({commit, state}) => {
  const userList = await findApi(state.page);
  commit(GET_DATA_LIST, userList);
};
//删除用户
const delUser = ({commit}, [id, idx]) => {
  delUserApi(id, 1).then(() => {
    Message({
      message: '删除成功',
      type: 'success',
      duration: 1000
    });
    commit(DEL_DATA, idx);
  }).catch(() => Message({
    message: '删除失败',
    type: 'error',
    duration: 1000
  }));
};
//获取我的信息
const getMine = async({commit, state}) => {
  if (!!state.login.id) {
    return false;
  }
  const mine = await mineApi();
  if (!mine) {
    // TODO 处理未登录情况
  }
  commit(GET_MINE, mine);
};
//获取登录信息
const getLogin = async({commit, state}) => {
  if (!!state.login.id) {
    return false;
  }
  adminApi().then((mine) => {
    commit(GET_MINE, mine);
  }).catch(() => {
    go({commit, state}, ['login']);
  });
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
    }).catch(() => {
      Message({
        message: '账号或密码错误！',
        type: 'error',
        duration: 1000
      });
    });
  }
}
// 退出
const loginOut = ({commit, state}) => {
  loginOutApi();
  go({commit, state}, ['login']);
  commit(GET_MINE, {});
}
//签到
const singin = async({commit, state}) => {
  if (state.login.isSign) {
    alert('您已签到');
    return false;
  } else {
    // commit(GET_MINE, {...state.login, isSign});
    await signApi()
  }
};


//获取我的福利
const getMineWelfare = async({commit, state}) => {
  await getMine({commit, state});
  commit(GET_DATA_LIST, await mineWelfareApi(state.login.id, 0, state.page));
};
//获取我的积分记录
const getMineScore = async({commit, state}) => {
  const {params:{id}}=state.route;
  !id ? await getMine({commit, state}) : '';
  commit(GET_DATA_LIST, await mineScoreApi(id ? id : state.login.id, 0, state.page));
};

//获取我的消息记录
const getMineMsg = async({commit, state}) => {
  console.log(state.page.page + 'and' + state.page.pages);
  if (state.page.page > state.page.pages) {
    return false;
  } else {
    await getMine({commit, state});
    commit(GET_DATA_LIST, await mineMsgApi(state.page));
  }
};
//获取我的工会活动
const getMineActivity = async({commit, state}) => {
  await getMine({commit, state});
  commit(GET_DATA_LIST, await mineActivityApi(1, state.page));
};
//获取我的健身项目
const getMineHealth = async({commit, state}) => {
  await getMine({commit, state});
  commit(GET_DATA_LIST, await mineHealthApi(1, state.page));
};

//公共删除方法
const delMethod = async({commit, state}, idx) => {
  console.log(state.list[idx].id);
  const id = state.list[idx].id;
  deleteApi(id, 1).then(function () {
    Message({
      message: '删除成功',
      type: 'success',
      duration: 1000
    });
    commit(DEL_DATA, idx);
  }).catch(function () {
    Message({
      message: '删除失败',
      type: 'error',
      duration: 1000
    });
  });
};


//
//获取福利  兑换列表
const getWelfare = async({commit}) => {
  commit(GET_DATA_LIST, await welfareApi());
};
//获取福利   福利详情
const getWelfareDetail = async({commit, state}, data) => {
  const {query:{id, ticket, welfareId, used}}=state.route;
  console.log(welfareId);
  if (welfareId) {
    const welfareDetail = await findWelfareByIdApi(welfareId);
    commit(SET_DATA, {...welfareDetail, ticket, id, used});
  } else {
    commit(SET_DATA, data);
  }
};

//获取活动相关数据   活动列表
const getActivity = async({commit, state}) => {
  const activity = await findActivityApi(state.page);
  commit(GET_DATA_LIST, activity);
};
// //获取活动相关数据   活动报名列表
// const getEnter = async({commit, state}) => {
//     const {params:{id}}=state.route;
//     const activityEnter = await findEntryListByIdApi(id, state.page);
//     commit(GET_ENTER_LIST, activityEnter);
// };
//获取活动相关数据   活动详情
const getActivityDetail = async({commit, state}) => {
  const {params:{id}}=state.route;
  if (id == CREATE) {
    commit(SET_DATA, {edit: true, ...defData.activity});
  } else {
    commit(SET_DATA, await findActivityDetailApi(id));
  }
};
//获取活动相关数据  报名
const entryActivity = async({commit, state}) => {
  const {query:{id}}=state.route;
  entryActivityApi(id).then((data) => {
    Message({
      message: '报名成功',
      type: 'success',
      duration: 1000
    });
  }).catch((data) => {
    console.log(data);
    Message({
      message: data.msg,
      type: 'error',
      duration: 1000
    });
  });
};


// //获取活动相关数据   创建活动
// const createActivity = async({commit, state}) => {
//     createActivityApi(state.activityDetail).then(function () {
//         this.$message.success('提交成功！');
//         window.location.reload();
//     }).catch(function () {
//         this.$message.error('提交失败！');
//     });
// };
//
// //获取活动相关数据   删除活动
// const deleteActivity = async({commit, state}, data) => {
//     console.log(data[0], data[1]);
//     deleteActivityApi(data[0], data[1]);
//     // const delUserOne = await delUserApi();
//     commit(DELETE_ACTIVITY);
// };
//
//获取健身项目相关数据   列表
const getHealth = async({commit, state}) => {
  const health = await findHealthApi(state.page);
  commit(GET_DATA_LIST, health);
};
//获取健身项目相关数据   详情
const gethealthDetail = async({commit, state}) => {
  if (state.route.path.indexOf('fwh') > -1) {
    var {query:{id}}=state.route;
  } else {
    var {params:{id}}=state.route;
  }
  if (id == 'creat') {
    commit(SET_DATA);
  } else {
    const healthDetail = await findHealthDetailApi(id);
    commit(SET_DATA, healthDetail);
  }
};


//
//
// const changeWC = ({commit}, data) => {
//     console.log(data);
//     commit(GET_ACTIVITY_DETAIL, data);
// };


//获取招聘信息相关数据  列表
const getRecruit = async({commit, state}) => {
  const recruit = await findRecruitApi(state.page);
  commit(GET_DATA_LIST, recruit);
};
//获取招聘信息相关数据   招聘详情
const getRecruitDetail = async({commit, state}) => {
  if (state.route.path.indexOf('fwh') > -1) {
    var {query:{id}}=state.route;
  } else {
    var {params:{id}}=state.route;
  }
  if (id == 'creat') {
    commit(SET_DATA);
  } else {
    commit(SET_DATA, await findRecruitDetailApi(id));
  }
};

//获取招聘信息相关数据  报名
const entryRecruit = async({commit, state}, data) => {
  const {query:{id}}=state.route;
  entryRecruitApi(id, data).then((data) => {
    Message({
      message: '报名成功',
      type: 'success',
      duration: 1000
    });
  }).catch((data) => {
    console.log(data);
    Message({
      message: data.msg,
      type: 'error',
      duration: 1000
    });
  });
};
// 设置值
const setData = ({commit}, data) => commit(SET_DATA, data)
// 设置数组
const setList = ({commit, state}, {key, data}) => commit(SET_DATA, {[key]: [...state.data[key], data]})
export default {
  getMine,
  getMineWelfare,
  getUser,
  findUserList,
  delMethod,  //公共删除方法
  changePage,  // 改变page
  clearPage,  // 清除page
  getLogin,//获取登录信息
  setData,// 设置对象
  setList, // 设置数组
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
  getWelfare,    //获取福利列表
  singin,      //签到
  // convertWelfare,  //兑换福利
  getActivity,     //获取工会活动
  getActivityDetail,  //获取工会活动详情
  entryActivity,  //报名工会活动
  getRecruit,  //获取招聘信息列表
  getRecruitDetail,  // 获取招聘信息详情
  entryRecruit,  //报名招聘
  getHealth,   //获取健身中心列表
  gethealthDetail, //获取健身项目详情
  loginOut,// 登出
  login,// 登录
  delFile,//删除文件
}

