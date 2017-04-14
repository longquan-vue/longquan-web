const ROOT = "/view"
export default [
  // 管理平台
  {
    path: `${ROOT}/zhxt/login`,
    component: require('../view/zhxt/login/Login.vue'),
    name: 'login'
  },
  {
    path: `${ROOT}/zhxt/loginSuccess`,
    component: require('../view/zhxt/login/loginSuccess.vue')
  },
  {
    path: `${ROOT}/zhxt/loginError`,
    component: require('../view/zhxt/login/loginError.vue')
  },
  {
    path: `${ROOT}/zhxt/home`,
    component: require('../view/zhxt/Home/home.vue'),
    children: [
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
      /*活动*/
      {path: `${ROOT}/zhxt/activity`, component: require('../view/zhxt/activity/activity.vue'),name:'activityList'},
      {path: `${ROOT}/zhxt/activityEnter/:id`, component: require('../view/zhxt/activity/activityEnter.vue'), name: "activityEnter"},
      {path: `${ROOT}/zhxt/activity/:id`, component: require('../view/zhxt/activity/activityEdit.vue'), name: "activityEdit"},
      {path: `${ROOT}/zhxt/activitySigned/:id`, component: require('../view/zhxt/activity/activitySigned.vue'), name: "activitySigned"},
      {path: `${ROOT}/zhxt/activityCount`, component: require('../view/zhxt/activity/activityCount.vue'), name: "activityCount"},
      /*运动*/
      {path: `${ROOT}/zhxt/health`, component: require('../view/zhxt/health/health.vue'), name: "health"}, // 运动列表
      {path: `${ROOT}/zhxt/health/:id`, component: require('../view/zhxt/health/healthEdit.vue'), name: "sportEdit"}, // 编辑运动
      /*用户*/
      {path: `${ROOT}/zhxt/user`, component: require('../view/zhxt/user/user.vue'), name: 'userList'}, // 用户列表
      {path: `${ROOT}/zhxt/usercount`, component: require('../view/zhxt/user/usercount.vue')}, // 用户统计
      {path: `${ROOT}/zhxt/userpoint/:id`, component: require('../view/zhxt/user/userpoint.vue'), name: 'userpoint'}, // 用户积分
      {path: `${ROOT}/zhxt/user/:id`, component: require('../view/zhxt/user/useredit.vue'), name: "useredit"}, // 修改用户
      {path: `${ROOT}/zhxt/usermanage`, component: require('../view/zhxt/user/manage.vue')}, // 用户积分操作
      /*签到*/
      {path: `${ROOT}/zhxt/signinlist`, component: require('../view/zhxt/signin/signinlist.vue')},
      {path: `${ROOT}/zhxt/signinsetting`, component: require('../view/zhxt/signin/signinsetting.vue')},
      {path: `${ROOT}/zhxt/signincount`, component: require('../view/zhxt/signin/signincount.vue')},
      /*福利*/
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
    children: [
      {path: `${ROOT}/fwh/welfare`, component: require('../view/fwh/welfare/welfare.vue'), name: 'welfare'},   //福利列表
      {path: `${ROOT}/fwh/welfareDetail`, component: require('../view/fwh/welfare/welfareDetail.vue'), name: 'welfareDetail'},  //福利详情
      {path: `${ROOT}/fwh/signin`, component: require('../view/fwh/signin/signin.vue'), name: 'signin'},  //积分签到
      {path: `${ROOT}/fwh/center`, component: require('../view/fwh/center/center.vue'), name: 'center'},  // 个人中心
      {path: `${ROOT}/fwh/centermess`, component: require('../view/fwh/center/centermess.vue'), name: 'centermess'},  //我的消息
      {path: `${ROOT}/fwh/centeredit`, component: require('../view/fwh/center/centeredit.vue'), name: 'centeredit'},  //编辑我的信息
      {path: `${ROOT}/fwh/centerwelfare`, component: require('../view/fwh/center/centerwelfare.vue'), name: 'centerwelfare'}, //我的福利
      {path: `${ROOT}/fwh/centerhealth`, component: require('../view/fwh/center/centerhealth.vue'), name: 'centerhealth'}, //我的健身项目
      {path: `${ROOT}/fwh/centerrecruit`, component: require('../view/fwh/center/centerrecruit.vue'), name: 'centerrecruit'}, //我收藏的招聘信息
      {path: `${ROOT}/fwh/centerrecruitdetail`, component: require('../view/fwh/center/centerrecruitdetail.vue'), name: 'centerrecruitdetail'}, //招聘信息详情
      {path: `${ROOT}/fwh/centerwelfardetail`, component: require('../view/fwh/center/centerwelfardetail.vue'), name: 'centerwelfardetail'}, // 福利详情,
      {path: `${ROOT}/fwh/centeractivity`, component: require('../view/fwh/center/centeractivity.vue'), name: 'centeractivity'},  //我的活动
      {path: `${ROOT}/fwh/centeractivitydetail`, component: require('../view/fwh/center/centeractivitydetail.vue'), name: 'centeractivitydetail'},  //活动详情
      {path: `${ROOT}/fwh/activity`, component: require('../view/fwh/activity/activity.vue'), name: 'activity'},  //工会活动
      {path: `${ROOT}/fwh/health`, component: require('../view/fwh/health/health.vue'), name: 'fwhhealth'}, //健身中心
      {path: `${ROOT}/fwh/healthDetail`, component: require('../view/fwh/health/healthDetail.vue'), name: 'healthDetail'}, //健身中心项目详情
      {path: `${ROOT}/fwh/healthPerson`, component: require('../view/fwh/health/healthPerson.vue'), name: 'healthPerson'}, //健身中心报名人员列表
      {path: `${ROOT}/fwh/recruit`, component: require('../view/fwh/recruit/recruit.vue'), name: 'recruit'}, //招聘信息
      {path: `${ROOT}/fwh/recruitSign`, component: require('../view/fwh/recruit/recruitSign.vue'), name: 'recruitSign'}, //招聘信息报名
      {path: `${ROOT}/fwh/poll`, component: require('../view/fwh/poll/poll.vue'), name: 'poll'}, //投票调查
      {path: `${ROOT}/fwh/pollvote`, component: require('../view/fwh/poll/pollvote.vue'), name: 'pollvote'}, //投票调查--选举
      {path: `${ROOT}/fwh/pollquestion`, component: require('../view/fwh/poll/pollquestion.vue'), name: 'pollquestion'}, //投票调查--问卷
    ]
  },
]
