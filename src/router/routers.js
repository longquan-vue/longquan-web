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
    path: `${ROOT}/zhxt`,
    component: require('../view/zhxt/Home/home.vue'),
    children: [
      {path: `${ROOT}/zhxt/readme`, component: require('../view/zhxt/count/count.vue'), name: 'readme'}, // 统计
      {path: `${ROOT}/zhxt/tips`, component: require('../view/zhxt/tips/tips.vue'), name: 'tips'}, // 公告
      {path: `${ROOT}/zhxt/notice`, component: require('../view/zhxt/notice/notice.vue'), name: 'notice'}, // 通告
      {path: `${ROOT}/zhxt/innerNews`, component: require('../view/zhxt/innerNews/innerNews.vue'), name: 'innerNews'}, // 内部新闻
      {path: `${ROOT}/zhxt/rules`, component: require('../view/zhxt/rules/rules.vue'), name: 'rules'}, // 政策法规
      {path: `${ROOT}/zhxt/innerFile`, component: require('../view/zhxt/innerFile/innerFile.vue'), name: 'innerFile'}, // 内部文件
      {path: `${ROOT}/zhxt/approval`, component: require('../view/zhxt/approval/approval.vue'), name: 'approval'}, // 申请采购
      {path: `${ROOT}/zhxt/HonorManage`, component: require('../view/zhxt/HonorManage/HonorManage.vue'), name: 'HonorManage'}, // 荣誉管理
      {path: `${ROOT}/zhxt/innerActivity`, component: require('../view/zhxt/innerActivity/innerActivity.vue'), name: 'innerActivity'}, // 内部活动
      {path: `${ROOT}/zhxt/innerMeeting`, component: require('../view/zhxt/innerMeeting/innerMeeting.vue'), name: 'innerMeeting'}, // 内部会议
      /*活动*/
      {path: `${ROOT}/zhxt/activity`, component: require('../view/zhxt/activity/activity.vue'), name: 'activityList'},//活动列表
      {path: `${ROOT}/zhxt/activity/:id`, component: require('../view/zhxt/activity/activityEdit.vue'), name: "activityEdit"},//编辑活动
      {path: `${ROOT}/zhxt/activityEnter/:id`, component: require('../view/zhxt/activity/activityEnter.vue'), name: "activityEnter"},//活动报名列表
      {path: `${ROOT}/zhxt/activitySign/:id`, component: require('../view/zhxt/activity/activitySign.vue'), name: "activitySign"},//活动签到列表
      {path: `${ROOT}/zhxt/activityCount`, component: require('../view/zhxt/activity/activityCount.vue'), name: "activityCount"},//活动统计
      /*运动*/
      {path: `${ROOT}/zhxt/health`, component: require('../view/zhxt/health/health.vue'), name: "health"}, // 运动列表
      {path: `${ROOT}/zhxt/health/:id`, component: require('../view/zhxt/health/healthEdit.vue'), name: "healthEdit"}, // 编辑运动
      {path: `${ROOT}/zhxt/healthCount`, component: require('../view/zhxt/health/healthCount.vue'), name: "healthCount"}, // 编辑运动
      {path: `${ROOT}/zhxt/healthCode`, component: require('../view/zhxt/health/healthCode.vue'), name: "healthCode"}, // 现场签到二维码
      /*用户*/
      {path: `${ROOT}/zhxt/user`, component: require('../view/zhxt/user/user.vue'), name: 'userList'}, // 用户列表
      {path: `${ROOT}/zhxt/user/:id`, component: require('../view/zhxt/user/userEdit.vue'), name: "userEdit"}, // 修改用户
      {path: `${ROOT}/zhxt/userPoint/:id`, component: require('../view/zhxt/user/userPoint.vue'), name: 'userPoint'}, // 用户积分
      {path: `${ROOT}/zhxt/userCount`, component: require('../view/zhxt/user/userCount.vue'), name: 'userCount'}, // 用户统计
      /*签到*/
      {path: `${ROOT}/zhxt/sign`, component: require('../view/zhxt/sign/signList.vue'), name: 'signList'}, // 签到列表
      {path: `${ROOT}/zhxt/signSetting`, component: require('../view/zhxt/sign/signSetting.vue'), name: 'signSetting'},// 签到设置
      {path: `${ROOT}/zhxt/signCount`, component: require('../view/zhxt/sign/signCount.vue'), name: 'signCount'},// 签到统计
      /*福利*/
      {path: `${ROOT}/zhxt/welfareTicket`, component: require('../view/zhxt/welfare/welfareTicket.vue'), name: 'welfareTicket'},// 券类福利
      {path: `${ROOT}/zhxt/welfareTicket/:id`, component: require('../view/zhxt/welfare/welfareTicketEdit.vue'), name: 'welfareTicketEdit'},// 编辑券类福利
      {path: `${ROOT}/zhxt/welfareTicketCount`, component: require('../view/zhxt/welfare/welfareTicketCount.vue'), name: 'welfareTicketCount'},// 券类福利统计
      {path: `${ROOT}/zhxt/welfarePack`, component: require('../view/zhxt/welfare/welfarePack.vue'), name: 'welfarePack'},//红包福利
      {path: `${ROOT}/zhxt/welfarePack/:id`, component: require('../view/zhxt/welfare/welfarePackEdit.vue'), name: 'welfarePackEdit'},//编辑红包福利
      {path: `${ROOT}/zhxt/welfarePackCount`, component: require('../view/zhxt/welfare/welfarePackCount.vue'), name: 'welfarePackCount'},//红包福利统计
      {path: `${ROOT}/zhxt/welfarePrev`, component: require('../view/zhxt/welfare/welfarePrev.vue'), name: 'welfarePrev'},//福利预告
      {path: `${ROOT}/zhxt/welfarePrev/:id`, component: require('../view/zhxt/welfare/welfarePrevEdit.vue'), name: 'welfarePrevEdit'},//编辑福利预告
      /*工会职工*/
      {path: `${ROOT}/zhxt/admin`, component: require('../view/zhxt/notice/notice.vue'), name: 'adminList'}, // 职工列表
      {path: `${ROOT}/zhxt/admin/:id`, component: require('../view/zhxt/notice/notice.vue'), name: 'adminEdit'}, // 编辑职工
      {path: `${ROOT}/zhxt/adminAudit`, component: require('../view/zhxt/notice/notice.vue'), name: 'adminAudit'}, // 审核列表
      {path: `${ROOT}/zhxt/adminCount`, component: require('../view/zhxt/notice/notice.vue'), name: 'adminCount'}, // 统计报表
      {path: `${ROOT}/zhxt/myDep`, component: require('../view/zhxt/notice/notice.vue'), name: 'myDep'}, // 我的公会
      /*工会组建*/
      {path: `${ROOT}/zhxt/dep`, component: require('../view/zhxt/notice/notice.vue'), name: 'depList'}, // 工会列表
      {path: `${ROOT}/zhxt/dep/:id`, component: require('../view/zhxt/notice/notice.vue'), name: 'depEdit'}, // 编辑公会
      {path: `${ROOT}/zhxt/depEnter`, component: require('../view/zhxt/notice/notice.vue'), name: 'depEnter'}, // 申请列表
      {path: `${ROOT}/zhxt/depAudit`, component: require('../view/zhxt/notice/notice.vue'), name: 'depAudit'}, // 审核列表
      {path: `${ROOT}/zhxt/depCount`, component: require('../view/zhxt/notice/notice.vue'), name: 'depCount'}, // 工会统计
      /*招聘信息*/
      {path: `${ROOT}/zhxt/recruit`, component: require('../view/zhxt/recruit/recruit.vue'), name: 'recruitList'}, // 招聘信息列表
      {path: `${ROOT}/zhxt/recruit/:id`, component: require('../view/zhxt/recruit/recruitEdit.vue'), name: 'recruitEdit'}, // 编辑招聘信息
      {path: `${ROOT}/zhxt/recruitCount`, component: require('../view/zhxt/notice/notice.vue'), name: 'recruitCount'}, // 招聘信息统计
      /*投票调查*/
      {path: `${ROOT}/zhxt/poll`, component: require('../view/zhxt/notice/notice.vue'), name: 'pollList'}, // 投票调查列表
      {path: `${ROOT}/zhxt/poll/:id`, component: require('../view/zhxt/notice/notice.vue'), name: 'pollEdit'}, // 编辑投票调查
      {path: `${ROOT}/zhxt/PollCount`, component: require('../view/zhxt/notice/notice.vue'), name: 'PollCount'}, // 投票调查统计
      /*系统设置*/
      {path: `${ROOT}/zhxt/setting/fwh`, component: require('../view/zhxt/setting/fwh.vue'), name: 'fwhSetting'},//系统设置
      /*结构配置*/
      {path: `${ROOT}/zhxt/configuration`, component: require('../view/zhxt/configuration/configuration.vue'), name: 'configuration'}, // 结构配置
      /*权限管理*/
      {path: `${ROOT}/zhxt/authority`, component: require('../view/zhxt/authority/authority.vue'), name: 'authority'}, // 权限管理
      /*回收站*/
      {path: `${ROOT}/zhxt/recover`, component: require('../view/zhxt/recover/recover.vue'), name: 'recover'}, // 回收站
    ]
  },

  // 网站主页
  {path: `${ROOT}/wzzy`},
  // 企业号
  {
      path: `${ROOT}/qyh`,
      component: require('../view/qyh/qyh/qyh.vue'),
      children:[
          {path: `${ROOT}/qyh/recruitManage`, component: require('../view/qyh/recruitManage/recruitManage.vue'),name:'recruitManage'},
          {path: `${ROOT}/qyh/recruitManageEdit/:id`, component: require('../view/qyh/recruitManage/recruitManageEdit.vue') ,name:'recruitManageEdit'},
      ]
  },
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
      {path: `${ROOT}/fwh/centerrecruitdetail/:id`, component: require('../view/fwh/center/centerrecruitdetail.vue'), name: 'centerrecruitdetail'}, //招聘信息详情
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
