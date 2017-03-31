const ROOT = "/view"
export default [
  // 管理平台
  // {
  //     path: `${ROOT}/zhxt/home`,
  //     component: require('../view/zhxt/Home/home.vue'),
  //     children:[
  //
  //     ]
  // },
  {
      path: `${ROOT}/zhxt/home`,
      component: require('../view/zhxt/Home/home.vue'),
      children:[
          {path: `${ROOT}/zhxt/count`, component: require('../view/zhxt/count/count.vue')},
          {path: `${ROOT}/zhxt/tips`, component: require('../view/zhxt/tips/tips.vue')},
          {path: `${ROOT}/zhxt/notice`, component: require('../view/zhxt/notice/notice.vue')},
          {path: `${ROOT}/zhxt/innerNews`, component: require('../view/zhxt/innerNews/innerNews.vue')},
          {path: `${ROOT}/zhxt/rules`, component: require('../view/zhxt/rules/rules.vue')},
          {path: `${ROOT}/zhxt/innerFile`, component: require('../view/zhxt/innerFile/innerFile.vue')},
          {path: `${ROOT}/zhxt/approval`, component: require('../view/zhxt/approval/approval.vue')},
          {path: `${ROOT}/zhxt/HonorManage`, component: require('../view/zhxt/HonorManage/HonorManage.vue')},
          {path: `${ROOT}/zhxt/innerMeeting`, component: require('../view/zhxt/innerMeeting/innerMeeting.vue')},
          {path: `${ROOT}/zhxt/innerActivity`, component: require('../view/zhxt/innerActivity/innerActivity.vue')},
          {path: `${ROOT}/zhxt/configuration`, component: require('../view/zhxt/configuration/configuration.vue')},
          {path: `${ROOT}/zhxt/authority`, component: require('../view/zhxt/authority/authority.vue')},
          {path: `${ROOT}/zhxt/recover`, component: require('../view/zhxt/recover/recover.vue')},
          {path: `${ROOT}/zhxt/activity`, component: require('../view/zhxt/activity/activity.vue')},
          {path: `${ROOT}/zhxt/user`, component: require('../view/zhxt/user/user.vue')},
          {path: `${ROOT}/zhxt/usercount`, component: require('../view/zhxt/user/usercount.vue')},
          {path: `${ROOT}/zhxt/userpoint`, component: require('../view/zhxt/user/userpoint.vue')},
          {path: `${ROOT}/zhxt/user/:id`, component: require('../view/zhxt/user/useredit.vue'),name:"useredit"},
          {path: `${ROOT}/zhxt/usermanage`, component: require('../view/zhxt/user/manage.vue')},
          {path: `${ROOT}/zhxt/signinlist`, component: require('../view/zhxt/signin/signinlist.vue')},
          {path: `${ROOT}/zhxt/signinsetting`, component: require('../view/zhxt/signin/signinsetting.vue')},
          {path: `${ROOT}/zhxt/signincount`, component: require('../view/zhxt/signin/signincount.vue')},
          {path: `${ROOT}/zhxt/welfareTickt`, component: require('../view/zhxt/welfare/welfareTickt.vue')},
          {path: `${ROOT}/zhxt/welfareTicktEdit`, component: require('../view/zhxt/welfare/welfareTicktEdit.vue')},
          {path: `${ROOT}/zhxt/welfareTicktCount`, component: require('../view/zhxt/welfare/welfareTicktCount.vue')},
          {path: `${ROOT}/zhxt/welfarePack`, component: require('../view/zhxt/welfare/welfarePack.vue')},
          {path: `${ROOT}/zhxt/welfarePackEdit`, component: require('../view/zhxt/welfare/welfarePackEdit.vue')},
          {path: `${ROOT}/zhxt/welfarePackCount`, component: require('../view/zhxt/welfare/welfarePackCount.vue')},
          {path: `${ROOT}/zhxt/welfarePrev`, component: require('../view/zhxt/welfare/welfarePrev.vue')},
          {path: `${ROOT}/zhxt/welfarePrevEdit`, component: require('../view/zhxt/welfare/welfarePrevEdit.vue')},
      ]
  },

  // 网站主页
  {path: `${ROOT}/wzzy`},
  // 企业号
  {path: `${ROOT}/qyh`},
  // 服务号
  {
      path: `${ROOT}/fwh/fwh`,
      component: require('../view/fwh/fwh/fwh.vue'),
      children:[
          {path: `${ROOT}/fwh/welfare`, component: require('../view/fwh/welfare/welfare.vue'), name: 'welfare'},
          {path: `${ROOT}/fwh/welfareDetail`,component: require('../view/fwh/welfare/welfareDetail.vue'), name: 'welfareDetail'},
          {path: `${ROOT}/fwh/signin`, component: require('../view/fwh/signin/signin.vue'), name: 'signin'},
          {path: `${ROOT}/fwh/center`, component: require('../view/fwh/center/center.vue'), name: 'center'},
          {path: `${ROOT}/fwh/centermess`, component: require('../view/fwh/center/centermess.vue'), name: 'centermess'},
          {path: `${ROOT}/fwh/centeredit`, component: require('../view/fwh/center/centeredit.vue'), name: 'centeredit'},
      ]
  },
]
