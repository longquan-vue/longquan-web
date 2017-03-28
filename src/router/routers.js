const ROOT = "/view"
export default [
  {
    path: '/',
    redirect: `${ROOT}/login`
  },
  {
    path: '/view',
    redirect: `${ROOT}/login`
  },
  {path: `${ROOT}/login`, component: require('../views/login/Login.vue')},
  {
    path: '/view/recover',
    redirect: `${ROOT}/recover/recruitment`
  },
  {
    path: `${ROOT}/home`,
    component: require('../views/Home/Home.vue'),
    children:[
      {path: `${ROOT}/activity`, component: require('../views/activity/activity.vue')},
      {path: `${ROOT}/health`, component: require('../views/health/health.vue')},
      {
        path: `${ROOT}/recover`,
        component: require('../views/recover/recover.vue'),
        children:[
          {path: `${ROOT}/recover/recruitment`, component: require('../views/recover/recover-recruitment.vue')},
          {path: `${ROOT}/recover/health`, component: require('../views/recover/recover-health.vue')},
          {path: `${ROOT}/recover/activity`, component: require('../views/recover/recover-activity.vue')},
          {path: `${ROOT}/recover/redenvelope`, component: require('../views/recover/recover-redenvelope.vue')}
        ]
      },
      {path: `${ROOT}/recruitment`, component: require('../views/recruitment/recruitment.vue')},
      {path: `${ROOT}/redenvelope`, component: require('../views/redenvelope/redenvelope.vue')},
    ]
  },
  {
    path: `${ROOT}/oa`,
    component: require('../views/Home/HomeOA.vue'),
    children:[
      {path: 'count', component: require('../views/oa/count/count.vue')},
      {path: 'tips', component: require('../views/oa/tips/tips.vue')},
      {path: 'notice', component: require('../views/oa/notice/notice.vue')},
      {path: 'innerNews', component: require('../views/oa/innerNews/innerNews.vue')},
      {path: 'rules', component: require('../views/oa/rules/rules.vue')},
      {path: 'innerFile', component: require('../views/oa/innerFile/innerFile.vue')},
      {path: 'approval', component: require('../views/oa/approval/approval.vue')},
      {path: 'HonorManage', component: require('../views/oa/HonorManage/HonorManage.vue')},
      {path: 'innerMeeting', component: require('../views/oa/innerMeeting/innerMeeting.vue')},
      {path: 'innerActivity', component: require('../views/oa/innerActivity/innerActivity.vue')},
      {path: 'configuration', component: require('../views/oa/configuration/configuration.vue')},
      {path: 'authority', component: require('../views/oa/authority/authority.vue')},
      {path: 'recover', component: require('../views/oa/recover/recover.vue')},
    ]
  },
  {path: '/welfare', component: require('../wxView/welfare/welfare.vue'), name: 'welfare'},
  {path: '/welfareDetail', component: require('../wxView/welfare/welfareDetail.vue'), name: 'welfareDetail'},
  {path: '/signin', component: require('../wxView/signin/signin.vue'), name: 'signin'},
  {
      path: '/center',
      component: require('../wxView/center/center.vue'),
      name: 'center',
      children:[

      ]
  },
]
