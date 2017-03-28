const ROOT = "/view"
export default [
  {
    path: `${ROOT}/glpt`,
    component: require('../view/glpt/Home/HomeOA.vue'),
    children:[
      {path: 'count', component: require('../view/glpt/oa/count/count.vue')},
      {path: 'tips', component: require('../view/glpt/oa/tips/tips.vue')},
      {path: 'notice', component: require('../view/glpt/oa/notice/notice.vue')},
      {path: 'innerNews', component: require('../view/glpt/oa/innerNews/innerNews.vue')},
      {path: 'rules', component: require('../view/glpt/oa/rules/rules.vue')},
      {path: 'innerFile', component: require('../view/glpt/oa/innerFile/innerFile.vue')},
      {path: 'approval', component: require('../view/glpt/oa/approval/approval.vue')},
      {path: 'HonorManage', component: require('../view/glpt/oa/HonorManage/HonorManage.vue')},
      {path: 'innerMeeting', component: require('../view/glpt/oa/innerMeeting/innerMeeting.vue')},
      {path: 'innerActivity', component: require('../view/glpt/oa/innerActivity/innerActivity.vue')},
      {path: 'configuration', component: require('../view/glpt/oa/configuration/configuration.vue')},
      {path: 'authority', component: require('../view/glpt/oa/authority/authority.vue')},
      {path: 'recover', component: require('../view/glpt/recover/recover.vue')},
    ]
  },
  {
    path: `${ROOT}/wzzy`,
    children:[
    ]
  },
  {
    path: `${ROOT}/qyh`,
    children:[
    ]
  },
  {
    path: `${ROOT}/fwh`,
    children:[
      {path: '/welfare', component: require('../view/fwh/welfare/welfare.vue'), name: 'welfare'},
      {path: '/welfareDetail', component: require('../view/fwh/welfare/welfareDetail.vue'), name: 'welfareDetail'},
      {path: '/signin', component: require('../view/fwh/signin/signin.vue'), name: 'signin'},
      {path: '/center', component: require('../view/fwh/center/center.vue'), name: 'center'},
      {path: '/centermess', component: require('../view/fwh/center/centermess.vue'), name: 'centermess'},
    ]
  },
]
