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
      /*文章*/
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
      {path: `${ROOT}/zhxt/activity`, component: require('../view/zhxt/activity/activity.vue'), name: 'activityList', meta: {title: '工会活动列表'}},//活动列表
      {path: `${ROOT}/zhxt/activity/:id`, component: require('../view/zhxt/activity/activityEdit.vue'), name: "activityEdit", meta: {title: '修改工会活动'}},//编辑活动
      {path: `${ROOT}/zhxt/activityEnter/:id`, component: require('../view/zhxt/activity/activityEnter.vue'), name: "activityEnter", meta: {title: '工会活动报名详情'}},//活动报名列表
      {path: `${ROOT}/zhxt/activitySign/:id`, component: require('../view/zhxt/activity/activitySign.vue'), name: "activitySign", meta: {title: '工会活动签到详情'}},//活动签到列表
      {path: `${ROOT}/zhxt/activityCount`, component: require('../view/zhxt/activity/activityCount.vue'), name: "activityCount", meta: {title: '工会活动统计'}},//活动统计
      /*运动*/
      {path: `${ROOT}/zhxt/health`, component: require('../view/zhxt/health/health.vue'), name: "health", meta: {title: '健身项目列表'}}, // 运动列表
      {path: `${ROOT}/zhxt/health/:id`, component: require('../view/zhxt/health/healthEdit.vue'), name: "healthEdit", meta: {title: '修改健身项目'}}, // 编辑运动
      {path: `${ROOT}/zhxt/healthCount`, component: require('../view/zhxt/health/healthCount.vue'), name: "healthCount", meta: {title: '健身项目统计'}}, // 运动统计
      {path: `${ROOT}/zhxt/healthEnter/:id`, component: require('../view/zhxt/health/healthEnter.vue'), name: "healthEnter", meta: {title: '健身项目预约名单'}}, // 运动预约名单管理
      {path: `${ROOT}/zhxt/healthCode`, component: require('../view/zhxt/health/healthCode.vue'), name: "healthCode", meta: {title: '健身项目签到二维码'}}, // 现场签到二维码
      /*用户*/
      {path: `${ROOT}/zhxt/user`, component: require('../view/zhxt/user/user.vue'), name: 'userList', meta: {title: '用户列表'}}, // 用户列表
      {path: `${ROOT}/zhxt/user/:id`, component: require('../view/zhxt/user/userEdit.vue'), name: "userEdit", meta: {title: '修改用户'}}, // 修改用户
      {path: `${ROOT}/zhxt/userPoint/:id`, component: require('../view/zhxt/user/userPoint.vue'), name: 'userPoint', meta: {title: '用户积分详情'}}, // 用户积分
      {path: `${ROOT}/zhxt/userCount`, component: require('../view/zhxt/user/userCount.vue'), name: 'userCount', meta: {title: '用户统计'}}, // 用户统计
      /*签到*/
      {path: `${ROOT}/zhxt/sign`, component: require('../view/zhxt/sign/signList.vue'), name: 'signList', meta: {title: '用户签到列表'}}, // 签到列表
      {path: `${ROOT}/zhxt/signSetting`, component: require('../view/zhxt/sign/signSetting.vue'), name: 'signSetting', meta: {title: '用户签到设置'}},// 签到设置
      {path: `${ROOT}/zhxt/signCount`, component: require('../view/zhxt/sign/signCount.vue'), name: 'signCount', meta: {title: '用户签到统计'}},// 签到统计
      /*福利*/
      {path: `${ROOT}/zhxt/welfareTicket`, component: require('../view/zhxt/welfare/welfareTicket.vue'), name: 'welfareTicket', meta: {title: '券类福利列表'}},// 券类福利
      {path: `${ROOT}/zhxt/welfareTicket/:id`, component: require('../view/zhxt/welfare/welfareTicketEdit.vue'), name: 'welfareTicketEdit', meta: {title: '修改券类福利'}},// 编辑券类福利
      {path: `${ROOT}/zhxt/welfareTicketCount`, component: require('../view/zhxt/welfare/welfareTicketCount.vue'), name: 'welfareTicketCount', meta: {title: '券类福利统计'}},// 券类福利统计
      {path: `${ROOT}/zhxt/welfarePack`, component: require('../view/zhxt/welfare/welfarePack.vue'), name: 'welfarePack', meta: {title: '红包福利列表'}},//红包福利
      {path: `${ROOT}/zhxt/welfarePack/:id`, component: require('../view/zhxt/welfare/welfarePackEdit.vue'), name: 'welfarePackEdit', meta: {title: '修改红包福利'}},//编辑红包福利
      {path: `${ROOT}/zhxt/welfarePackCount`, component: require('../view/zhxt/welfare/welfarePackCount.vue'), name: 'welfarePackCount', meta: {title: '红包福利统计'}},//红包福利统计
      {path: `${ROOT}/zhxt/welfarePrev`, component: require('../view/zhxt/welfare/welfarePrev.vue'), name: 'welfarePrev', meta: {title: '福利预告列表'}},//福利预告
      {path: `${ROOT}/zhxt/welfarePrev/:id`, component: require('../view/zhxt/welfare/welfarePrevEdit.vue'), name: 'welfarePrevEdit', meta: {title: '修改福利预告'}},//编辑福利预告
      /*工会职工*/
      {path: `${ROOT}/zhxt/admin`, component: require('../view/zhxt/admin/admin.vue'), name: 'adminList'}, // 职工列表
      {path: `${ROOT}/zhxt/admin/:id`, component: require('../view/zhxt/admin/adminEdit.vue'), name: 'adminEdit'}, // 编辑职工
      {path: `${ROOT}/zhxt/adminAudit`, component: require('../view/zhxt/admin/adminAudit.vue'), name: 'adminAudit'}, // 审核列表
      {path: `${ROOT}/zhxt/adminCount`, component: require('../view/zhxt/admin/adminCount.vue'), name: 'adminCount'}, // 统计报表
      {path: `${ROOT}/zhxt/myDep`, component: require('../view/zhxt/notice/notice.vue'), name: 'myDep'}, // 我的公会
      /*工会组建*/
      {path: `${ROOT}/zhxt/dep`, component: require('../view/zhxt/dep/dep.vue'), name: 'depList'}, // 工会列表
      {path: `${ROOT}/zhxt/dep/:id`, component: require('../view/zhxt/notice/notice.vue'), name: 'depEdit'}, // 编辑公会
      {path: `${ROOT}/zhxt/depEnter`, component: require('../view/zhxt/notice/notice.vue'), name: 'depEnter'}, // 申请列表
      {path: `${ROOT}/zhxt/depAudit`, component: require('../view/zhxt/notice/notice.vue'), name: 'depAudit'}, // 审核列表
      {path: `${ROOT}/zhxt/depCount`, component: require('../view/zhxt/notice/notice.vue'), name: 'depCount'}, // 工会统计
      /*招聘信息*/
      {path: `${ROOT}/zhxt/recruit`, component: require('../view/zhxt/recruit/recruit.vue'), name: 'recruitList', meta: {title: '招聘信息列表'}}, // 招聘信息列表
      {path: `${ROOT}/zhxt/recruit/:id`, component: require('../view/zhxt/recruit/recruitEdit.vue'), name: 'recruitEdit', meta: {title: '修改招聘信息'}}, // 编辑招聘信息
      {path: `${ROOT}/zhxt/recruitEnter/:id`, component: require('../view/zhxt/recruit/recruitEnter.vue'), name: 'recruitEnter', meta: {title: '意向报名列表'}}, // 意向报名列表
      {path: `${ROOT}/zhxt/recruitCount`, component: require('../view/zhxt/recruit/recruitCount.vue'), name: 'recruitCount', meta: {title: '招聘信息统计'}}, // 招聘信息统计
      /*投票调查*/
      {path: `${ROOT}/zhxt/vote`, component: require('../view/zhxt/poll/vote.vue'), name: 'voteList', meta: {title: '投票选举列表'}}, // 投票列表
      {path: `${ROOT}/zhxt/vote/:id`, component: require('../view/zhxt/poll/voteEdit.vue'), name: 'voteEdit', meta: {title: '修改投票选举'}}, // 编辑投票
      {path: `${ROOT}/zhxt/voteCount`, component: require('../view/zhxt/poll/voteCount.vue'), name: 'voteCount', meta: {title: '投票选举统计'}}, // 投票统计
      {path: `${ROOT}/zhxt/quest`, component: require('../view/zhxt/poll/quest.vue'), name: 'questList', meta: {title: '问卷调查列表'}}, // 调查列表
      {path: `${ROOT}/zhxt/quest/:id`, component: require('../view/zhxt/poll/questEdit.vue'), name: 'questEdit', meta: {title: '修改问卷调查'}}, // 编辑调查
      {path: `${ROOT}/zhxt/questCount`, component: require('../view/zhxt/poll/questCount.vue'), name: 'questCount', meta: {title: '问卷调查统计'}}, // 调查统计
      /*系统设置*/
      {path: `${ROOT}/zhxt/setting/fwh`, component: require('../view/zhxt/setting/fwh.vue'), name: 'fwhSetting', meta: {title: '服务号设置'}},//系统设置
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
    children: [
      {path: `${ROOT}/qyh/recruitManage`, component: require('../view/qyh/recruitManage/recruitManage.vue'), name: 'recruitManage'},
      {path: `${ROOT}/qyh/recruitManageEdit/:id`, component: require('../view/qyh/recruitManage/recruitManageEdit.vue'), name: 'recruitManageEdit'},
      {path: `${ROOT}/qyh/healthManage`, component: require('../view/qyh/healthManage/healthManage.vue'), name: 'healthManage'},
      {path: `${ROOT}/qyh/healthManageDetail/:id`, component: require('../view/qyh/healthManage/healthManageDetail.vue'), name: 'healthManageDetail'}, //健身中心项目详情
      {path: `${ROOT}/qyh/healthManageEdit/:id`, component: require('../view/qyh/healthManage/healthManageEdit.vue'), name: 'healthManageEdit'},
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
      {path: `${ROOT}/fwh/healthDetail/:id`, component: require('../view/fwh/health/healthDetail.vue'), name: 'healthDetail'}, //健身中心项目详情
      {path: `${ROOT}/fwh/healthPerson/:id`, component: require('../view/fwh/health/healthPerson.vue'), name: 'healthPerson'}, //健身中心报名人员列表
      {path: `${ROOT}/fwh/personMess/:id`, component: require('../view/fwh/health/personMess.vue'), name: 'personMess'}, //健身中心报名人员详细信息
      {path: `${ROOT}/fwh/recruit`, component: require('../view/fwh/recruit/recruit.vue'), name: 'recruit'}, //招聘信息
      {path: `${ROOT}/fwh/recruitSign`, component: require('../view/fwh/recruit/recruitSign.vue'), name: 'recruitSign'}, //招聘信息报名
      {path: `${ROOT}/fwh/poll`, component: require('../view/fwh/poll/poll.vue'), name: 'poll'}, //投票调查
      {path: `${ROOT}/fwh/pollvote/:id`, component: require('../view/fwh/poll/pollvote.vue'), name: 'pollvote'}, //投票调查--选举
      {path: `${ROOT}/fwh/pollquestion`, component: require('../view/fwh/poll/pollquestion.vue'), name: 'pollquestion'}, //投票调查--问卷
    ]
  },
]
