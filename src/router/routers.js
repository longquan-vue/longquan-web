const ROOT = "/view"
export default [
  // 管理平台
  {
      path: `${ROOT}/zhxt/login`,
      component: () => System.import('../view/zhxt/login/Login.vue')
  },
    {
        path: `${ROOT}/zhxt/loginSuccess`,
        component:() => System.import('../view/zhxt/login/loginSuccess.vue')
    },
    {
        path: `${ROOT}/zhxt/loginError`,
        component:() => System.import('../view/zhxt/login/loginError.vue')
    },
  {
      path: `${ROOT}/zhxt/home`,
      component:() => System.import('../view/zhxt/Home/home.vue'),
      children:[
          {path: `${ROOT}/zhxt/count`, component:() => System.import('../view/zhxt/count/count.vue')},
          {path: `${ROOT}/zhxt/tips`, component:() => System.import('../view/zhxt/tips/tips.vue')},
          {path: `${ROOT}/zhxt/notice`, component:() => System.import('../view/zhxt/notice/notice.vue')},
          {path: `${ROOT}/zhxt/innerNews`, component:() => System.import('../view/zhxt/innerNews/innerNews.vue')},
          {path: `${ROOT}/zhxt/rules`, component:() => System.import('../view/zhxt/rules/rules.vue')},
          {path: `${ROOT}/zhxt/innerFile`, component:() => System.import('../view/zhxt/innerFile/innerFile.vue')},
          {path: `${ROOT}/zhxt/approval`, component:() => System.import('../view/zhxt/approval/approval.vue')},
          {path: `${ROOT}/zhxt/HonorManage`, component:() => System.import('../view/zhxt/HonorManage/HonorManage.vue')},
          {path: `${ROOT}/zhxt/innerMeeting`, component:() => System.import('../view/zhxt/innerMeeting/innerMeeting.vue')},
          {path: `${ROOT}/zhxt/innerActivity`, component:() => System.import('../view/zhxt/innerActivity/innerActivity.vue')},
          {path: `${ROOT}/zhxt/configuration`, component:() => System.import('../view/zhxt/configuration/configuration.vue')},
          {path: `${ROOT}/zhxt/authority`, component:() => System.import('../view/zhxt/authority/authority.vue')},
          {path: `${ROOT}/zhxt/recover`, component:() => System.import('../view/zhxt/recover/recover.vue')},
          {path: `${ROOT}/zhxt/activity`, component:() => System.import('../view/zhxt/activity/activity.vue')},
          {path: `${ROOT}/zhxt/activityEnter/:id`, component:() => System.import('../view/zhxt/activity/activityEnter.vue'),name:"activityEnter"},
          {path: `${ROOT}/zhxt/activity/:id`, component:() => System.import('../view/zhxt/activity/activityEdit.vue'),name:"activityEdit"},
          {path: `${ROOT}/zhxt/activitySigned`, component:() => System.import('../view/zhxt/activity/activitySigned.vue'),name:"activitySigned"},
          {path: `${ROOT}/zhxt/activityCount`, component:() => System.import('../view/zhxt/activity/activityCount.vue'),name:"activityCount"},
          {path: `${ROOT}/zhxt/health`, component:() => System.import('../view/zhxt/health/health.vue'),name:"health"},
          {path: `${ROOT}/zhxt/user`, component:() => System.import('../view/zhxt/user/user.vue')},
          {path: `${ROOT}/zhxt/usercount`, component:() => System.import('../view/zhxt/user/usercount.vue')},
          {path: `${ROOT}/zhxt/userpoint`, component:() => System.import('../view/zhxt/user/userpoint.vue')},
          {path: `${ROOT}/zhxt/user/:id`, component:() => System.import('../view/zhxt/user/useredit.vue'),name:"useredit"},
          {path: `${ROOT}/zhxt/usermanage`, component:() => System.import('../view/zhxt/user/manage.vue')},
          {path: `${ROOT}/zhxt/signinlist`, component:() => System.import('../view/zhxt/signin/signinlist.vue')},
          {path: `${ROOT}/zhxt/signinsetting`, component:() => System.import('../view/zhxt/signin/signinsetting.vue')},
          {path: `${ROOT}/zhxt/signincount`, component:() => System.import('../view/zhxt/signin/signincount.vue')},
          {path: `${ROOT}/zhxt/welfareTickt`, component:() => System.import('../view/zhxt/welfare/welfareTickt.vue')},
          {path: `${ROOT}/zhxt/welfareTicktEdit`, component:() => System.import('../view/zhxt/welfare/welfareTicktEdit.vue')},
          {path: `${ROOT}/zhxt/welfareTicktCount`, component:() => System.import('../view/zhxt/welfare/welfareTicktCount.vue')},
          {path: `${ROOT}/zhxt/welfarePack`, component:() => System.import('../view/zhxt/welfare/welfarePack.vue')},
          {path: `${ROOT}/zhxt/welfarePackEdit`, component:() => System.import('../view/zhxt/welfare/welfarePackEdit.vue')},
          {path: `${ROOT}/zhxt/welfarePackCount`, component:() => System.import('../view/zhxt/welfare/welfarePackCount.vue')},
          {path: `${ROOT}/zhxt/welfarePrev`, component:() => System.import('../view/zhxt/welfare/welfarePrev.vue')},
          {path: `${ROOT}/zhxt/welfarePrevEdit`, component:() => System.import('../view/zhxt/welfare/welfarePrevEdit.vue')},
      ]
  },

  // 网站主页
  {path: `${ROOT}/wzzy`},
  // 企业号
  {path: `${ROOT}/qyh`},
  // 服务号
  {
      path: `${ROOT}/fwh/fwh`,
      component:() => System.import('../view/fwh/fwh/fwh.vue'),
      children:[
          {path: `${ROOT}/fwh/welfare`, component:() => System.import('../view/fwh/welfare/welfare.vue'), name: 'welfare'},   //福利列表
          {path: `${ROOT}/fwh/welfareDetail`,component:() => System.import('../view/fwh/welfare/welfareDetail.vue'), name: 'welfareDetail'},  //福利详情
          {path: `${ROOT}/fwh/signin`, component:() => System.import('../view/fwh/signin/signin.vue'), name: 'signin'},  //积分签到
          {path: `${ROOT}/fwh/center`, component:() => System.import('../view/fwh/center/center.vue'), name: 'center'},  // 个人中心
          {path: `${ROOT}/fwh/centermess`, component:() => System.import('../view/fwh/center/centermess.vue'), name: 'centermess'},  //我的消息
          {path: `${ROOT}/fwh/centeredit`, component:() => System.import('../view/fwh/center/centeredit.vue'), name: 'centeredit'},  //编辑我的信息
          {path: `${ROOT}/fwh/centerwelfare`, component:() => System.import('../view/fwh/center/centerwelfare.vue'), name: 'centerwelfare'}, //我的福利
          {path: `${ROOT}/fwh/centerhealth`, component:() => System.import('../view/fwh/center/centerhealth.vue'), name: 'centerhealth'}, //我的健身项目
          {path: `${ROOT}/fwh/centerrecruit`, component:() => System.import('../view/fwh/center/centerrecruit.vue'), name: 'centerrecruit'}, //我收藏的招聘信息
          {path: `${ROOT}/fwh/centerrecruitdetail`, component:() => System.import('../view/fwh/center/centerrecruitdetail.vue'), name: 'centerrecruitdetail'}, //招聘信息详情
          {path: `${ROOT}/fwh/centerwelfardetail`, component:() => System.import('../view/fwh/center/centerwelfardetail.vue'), name: 'centerwelfardetail'}, // 福利详情,
          {path: `${ROOT}/fwh/centeractivity`, component:() => System.import('../view/fwh/center/centeractivity.vue'), name: 'centeractivity'},  //我的活动
          {path: `${ROOT}/fwh/centeractivitydetail`, component:() => System.import('../view/fwh/center/centeractivitydetail.vue'), name: 'centeractivitydetail'},  //活动详情
          {path: `${ROOT}/fwh/activity`, component:() => System.import('../view/fwh/activity/activity.vue'), name: 'activity'},  //工会活动
          {path: `${ROOT}/fwh/health`, component:() => System.import('../view/fwh/health/health.vue'), name: 'health'}, //健身中心
          {path: `${ROOT}/fwh/healthDetail`, component:() => System.import('../view/fwh/health/healthDetail.vue'), name: 'healthDetail'}, //健身中心项目详情
          {path: `${ROOT}/fwh/healthPerson`, component:() => System.import('../view/fwh/health/healthPerson.vue'), name: 'healthPerson'}, //健身中心报名人员列表
      ]
  },
]
