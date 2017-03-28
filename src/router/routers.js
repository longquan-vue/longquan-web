const ROOT = "/view"
export default [
  // 管理平台
  {path: `${ROOT}/glpt/count`, component: require('../view/glpt/oa/count/count.vue')},
  {path: `${ROOT}/glpt/tips`, component: require('../view/glpt/oa/tips/tips.vue')},
  {path: `${ROOT}/glpt/notice`, component: require('../view/glpt/oa/notice/notice.vue')},
  {path: `${ROOT}/glpt/innerNews`, component: require('../view/glpt/oa/innerNews/innerNews.vue')},
  {path: `${ROOT}/glpt/rules`, component: require('../view/glpt/oa/rules/rules.vue')},
  {path: `${ROOT}/glpt/innerFile`, component: require('../view/glpt/oa/innerFile/innerFile.vue')},
  {path: `${ROOT}/glpt/approval`, component: require('../view/glpt/oa/approval/approval.vue')},
  {path: `${ROOT}/glpt/HonorManage`, component: require('../view/glpt/oa/HonorManage/HonorManage.vue')},
  {path: `${ROOT}/glpt/innerMeeting`, component: require('../view/glpt/oa/innerMeeting/innerMeeting.vue')},
  {path: `${ROOT}/glpt/innerActivity`, component: require('../view/glpt/oa/innerActivity/innerActivity.vue')},
  {path: `${ROOT}/glpt/configuration`, component: require('../view/glpt/oa/configuration/configuration.vue')},
  {path: `${ROOT}/glpt/authority`, component: require('../view/glpt/oa/authority/authority.vue')},
  {path: `${ROOT}/glpt/recover`, component: require('../view/glpt/recover/recover.vue')},
  // 网站主页
  {path: `${ROOT}/wzzy`},
  // 企业号
  {path: `${ROOT}/qyh`},
  // 服务号
  {path: `${ROOT}/fwh/welfare`, component: require('../view/fwh/welfare/welfare.vue'), name: 'welfare'},
  {path: `${ROOT}/fwh/welfareDetail`,component: require('../view/fwh/welfare/welfareDetail.vue'), name: 'welfareDetail'},
  {path: `${ROOT}/fwh/signin`, component: require('../view/fwh/signin/signin.vue'), name: 'signin'},
  {path: `${ROOT}/fwh/center`, component: require('../view/fwh/center/center.vue'), name: 'center'},
  {path: `${ROOT}/fwh/centermess`, component: require('../view/fwh/center/centermess.vue'), name: 'centermess'},
  {path: `${ROOT}/fwh/centeredit`, component: require('../view/fwh/center/centeredit.vue'), name: 'centeredit'},
]
