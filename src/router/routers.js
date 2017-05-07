export const ROOT = "/view"
export default [
  // 管理平台
  {
    path: `/`,
    redirect: `${ROOT}/wzzy/home`,
  },
  {
    path: `/login`,
    component: require('../view/zhxt/login/Login.vue'),
    name: 'login',
    meta: {title: '智慧系统登录'}
  },
  {
    path: `${ROOT}/zhxt`,
    component: require('../view/zhxt/Home/home.vue'),
    children: [
      {path: `${ROOT}/zhxt/readme`, component: require('../view/zhxt/count/count.vue'), name: 'readme', meta: {title: '任务首页'}},
      /*文章 -- 公示公告*/
      {path: `${ROOT}/zhxt/article/tips`, component: require('../view/zhxt/article/tips/tips.vue'), name: 'tips', meta: {title: '公示公告列表'}},
      {path: `${ROOT}/zhxt/article/tips/:id`, component: require('../view/zhxt/article/tips/editTips.vue'), name: 'editTips', meta: {title: '修改公示公告'}},
      /*文章 -- 文件资料管理*/
      {path: `${ROOT}/zhxt/article/docs`, component: require('../view/zhxt/article/docs/docs.vue'), name: 'docs', meta: {title: '文件资料列表'}},
      {path: `${ROOT}/zhxt/article/docs/:id`, component: require('../view/zhxt/article/docs/docsEdit.vue'), name: 'docsEdit', meta: {title: '修改文件资料'}},
      {path: `${ROOT}/zhxt/article/docsSetting`, component: require('../view/zhxt/article/docs/docsSetting.vue'), name: 'docsSetting', meta: {title: '文件类型设置'}},
      {path: `${ROOT}/zhxt/article/docsCount`, component: require('../view/zhxt/article/docs/docsCount.vue'), name: 'docsCount', meta: {title: '文件资料统计'}},
      /*文章 -- 活动展示管理*/
      {path: `${ROOT}/zhxt/article/activity`, component: require('../view/zhxt/article/activity/activity.vue'), name: 'act', meta: {title: '文件资料列表'}},
      {path: `${ROOT}/zhxt/article/activity/:id`, component: require('../view/zhxt/article/activity/activityEdit.vue'), name: 'actEdit', meta: {title: '修改文件资料'}},
      {path: `${ROOT}/zhxt/article/activitySetting`, component: require('../view/zhxt/article/activity/activitySetting.vue'), name: 'actSetting', meta: {title: '文件类型设置'}},
      {path: `${ROOT}/zhxt/article/activityCount`, component: require('../view/zhxt/article/activity/activityCount.vue'), name: 'actCount', meta: {title: '文件资料统计'}},
      /*文章 -- 新闻资讯管理*/
      {path: `${ROOT}/zhxt/article/info`, component: require('../view/zhxt/article/info/info.vue'), name: 'info', meta: {title: '新闻资讯列表'}},
      {path: `${ROOT}/zhxt/article/info/:id`, component: require('../view/zhxt/article/info/infoEdit.vue'), name: 'infoEdit', meta: {title: '修改新闻资讯'}},
      {path: `${ROOT}/zhxt/article/infoSetting`, component: require('../view/zhxt/article/info/infoSetting.vue'), name: 'infoSetting', meta: {title: '新闻类型设置'}},
      {path: `${ROOT}/zhxt/article/infoCount`, component: require('../view/zhxt/article/info/infoCount.vue'), name: 'infoCount', meta: {title: '新闻资讯统计'}},
      /*文章 -- 办事指南管理*/
      {path: `${ROOT}/zhxt/article/guide`, component: require('../view/zhxt/article/guide/guide.vue'), name: 'guide', meta: {title: '办事指南列表'}},
      {path: `${ROOT}/zhxt/article/guide/:id`, component: require('../view/zhxt/article/guide/guideEdit.vue'), name: 'guideEdit', meta: {title: '修改办事指南'}},
      {path: `${ROOT}/zhxt/article/guideSetting`, component: require('../view/zhxt/article/guide/guideSetting.vue'), name: 'guideSetting', meta: {title: '办事指南类型设置'}},
      {path: `${ROOT}/zhxt/article/guideCount`, component: require('../view/zhxt/article/guide/guideCount.vue'), name: 'guideCount', meta: {title: '办事指南统计'}},
      /*文章 -- 先进人物管理*/
      {path: `${ROOT}/zhxt/article/advanced`, component: require('../view/zhxt/article/advanced/advanced.vue'), name: 'advanced', meta: {title: '先进人物列表'}},
      {path: `${ROOT}/zhxt/article/advanced/:id`, component: require('../view/zhxt/article/advanced/advancedEdit.vue'), name: 'advancedEdit', meta: {title: '修改先进人物'}},
      {path: `${ROOT}/zhxt/article/advancedSetting`, component: require('../view/zhxt/article/advanced/advancedSetting.vue'), name: 'advancedSetting', meta: {title: '先进类型设置'}},
      {path: `${ROOT}/zhxt/article/advancedCount`, component: require('../view/zhxt/article/advanced/advancedCount.vue'), name: 'advancedCount', meta: {title: '先进人物统计'}},
      /*文章 -- 工会服务管理*/
      {path: `${ROOT}/zhxt/article/service`, component: require('../view/zhxt/article/service/service.vue'), name: 'service', meta: {title: '工会服务列表'}},
      {path: `${ROOT}/zhxt/article/service/:id`, component: require('../view/zhxt/article/service/serviceEdit.vue'), name: 'serviceEdit', meta: {title: '修改工会服务'}},
      {path: `${ROOT}/zhxt/article/serviceSetting`, component: require('../view/zhxt/article/service/serviceSetting.vue'), name: 'serviceSetting', meta: {title: '服务类型设置'}},
      {path: `${ROOT}/zhxt/article/serviceCount`, component: require('../view/zhxt/article/service/serviceCount.vue'), name: 'serviceCount', meta: {title: '工会服务统计'}},
      /*活动*/
      {path: `${ROOT}/zhxt/activity`, component: require('../view/zhxt/activity/activity.vue'), name: 'activityList', meta: {title: '工会活动列表'}},
      {path: `${ROOT}/zhxt/activity/:id`, component: require('../view/zhxt/activity/activityEdit.vue'), name: "activityEdit", meta: {title: '修改工会活动'}},
      {path: `${ROOT}/zhxt/activityEnter/:id`, component: require('../view/zhxt/activity/activityEnter.vue'), name: "activityEnter", meta: {title: '工会活动报名详情'}},
      {path: `${ROOT}/zhxt/activitySign/:id`, component: require('../view/zhxt/activity/activitySign.vue'), name: "activitySign", meta: {title: '工会活动签到详情'}},
      {path: `${ROOT}/zhxt/activityCount`, component: require('../view/zhxt/activity/activityCount.vue'), name: "activityCount", meta: {title: '工会活动统计'}},
      /*运动*/
      {path: `${ROOT}/zhxt/health`, component: require('../view/zhxt/health/health.vue'), name: "health", meta: {title: '健身项目列表'}},
      {path: `${ROOT}/zhxt/health/:id`, component: require('../view/zhxt/health/healthEdit.vue'), name: "healthEdit", meta: {title: '修改健身项目'}},
      {path: `${ROOT}/zhxt/healthCount`, component: require('../view/zhxt/health/healthCount.vue'), name: "healthCount", meta: {title: '健身项目统计'}},
      {path: `${ROOT}/zhxt/healthEnter/:id`, component: require('../view/zhxt/health/healthEnter.vue'), name: "healthEnter", meta: {title: '健身项目预约名单'}},
      {path: `${ROOT}/zhxt/healthCode`, component: require('../view/zhxt/health/healthCode.vue'), name: "healthCode", meta: {title: '健身项目签到二维码'}},
      /*用户*/
      {path: `${ROOT}/zhxt/user`, component: require('../view/zhxt/user/user.vue'), name: 'userList', meta: {title: '用户列表'}},
      {path: `${ROOT}/zhxt/user/:id`, component: require('../view/zhxt/user/userEdit.vue'), name: "userEdit", meta: {title: '修改用户'}},
      {path: `${ROOT}/zhxt/userPoint/:id`, component: require('../view/zhxt/user/userPoint.vue'), name: 'userPoint', meta: {title: '用户积分详情'}},
      {path: `${ROOT}/zhxt/userCount`, component: require('../view/zhxt/user/userCount.vue'), name: 'userCount', meta: {title: '用户统计'}},
      /*签到*/
      {path: `${ROOT}/zhxt/sign`, component: require('../view/zhxt/sign/signList.vue'), name: 'signList', meta: {title: '用户签到列表'}},
      {path: `${ROOT}/zhxt/signSetting`, component: require('../view/zhxt/sign/signSetting.vue'), name: 'signSetting', meta: {title: '用户签到设置'}},
      {path: `${ROOT}/zhxt/signCount`, component: require('../view/zhxt/sign/signCount.vue'), name: 'signCount', meta: {title: '用户签到统计'}},
      /*福利*/
      {path: `${ROOT}/zhxt/welfareTicket`, component: require('../view/zhxt/welfare/welfareTicket.vue'), name: 'welfareTicket', meta: {title: '券类福利列表'}},
      {path: `${ROOT}/zhxt/welfareTicket/:id`, component: require('../view/zhxt/welfare/welfareTicketEdit.vue'), name: 'welfareTicketEdit', meta: {title: '修改券类福利'}},
      {path: `${ROOT}/zhxt/welfareTicketCount`, component: require('../view/zhxt/welfare/welfareTicketCount.vue'), name: 'welfareTicketCount', meta: {title: '券类福利统计'}},
      {path: `${ROOT}/zhxt/welfarePack`, component: require('../view/zhxt/welfare/welfarePack.vue'), name: 'welfarePack', meta: {title: '红包福利列表'}},
      {path: `${ROOT}/zhxt/welfarePack/:id`, component: require('../view/zhxt/welfare/welfarePackEdit.vue'), name: 'welfarePackEdit', meta: {title: '修改红包福利'}},
      {path: `${ROOT}/zhxt/welfarePackCount`, component: require('../view/zhxt/welfare/welfarePackCount.vue'), name: 'welfarePackCount', meta: {title: '红包福利统计'}},
      {path: `${ROOT}/zhxt/welfarePrev`, component: require('../view/zhxt/welfare/welfarePrev.vue'), name: 'welfarePrev', meta: {title: '福利预告列表'}},
      {path: `${ROOT}/zhxt/welfarePrev/:id`, component: require('../view/zhxt/welfare/welfarePrevEdit.vue'), name: 'welfarePrevEdit', meta: {title: '修改福利预告'}},
      /*工会职工*/
      // {path: `${ROOT}/zhxt/admin`, component: require('../view/zhxt/admin/admin.vue'), name: 'adminList'},
      // {path: `${ROOT}/zhxt/admin/:id`, component: require('../view/zhxt/admin/adminEdit.vue'), name: 'adminEdit'},
      // {path: `${ROOT}/zhxt/adminAudit`, component: require('../view/zhxt/admin/adminAudit.vue'), name: 'adminAudit'},
      // {path: `${ROOT}/zhxt/adminCount`, component: require('../view/zhxt/admin/adminCount.vue'), name: 'adminCount'},
      // {path: `${ROOT}/zhxt/myDep`, component: require('../view/zhxt/notice/notice.vue'), name: 'myDep'}, /
      /*工会组建*/
      {path: `${ROOT}/zhxt/unions`, component: require('../view/zhxt/department/unions.vue'), name: 'unions', meta: {title: '工会管理列表'}},
      {path: `${ROOT}/zhxt/unions/:id`, component: require('../view/zhxt/department/unionsEdit.vue'), name: 'unionsEdit', meta: {title: '修改公会'}},
      {path: `${ROOT}/zhxt/department`, component: require('../view/zhxt/department/dep.vue'), name: 'dep', meta: {title: '组织架构列表'}},
      {path: `${ROOT}/zhxt/department/:id`, component: require('../view/zhxt/department/depEdit.vue'), name: 'depEdit', meta: {title: '修改部门'}},
      {path: `${ROOT}/zhxt/admin`, component: require('../view/zhxt/department/admin.vue'), name: 'adminList', meta: {title: '管理员列表'}},
      {path: `${ROOT}/zhxt/desc`, component: require('../view/zhxt/department/desc.vue'), name: 'desc', meta: {title: '区总介绍'}},
      {path: `${ROOT}/zhxt/leader`, component: require('../view/zhxt/department/leader.vue'), name: 'leader', meta: {title: '区总领导'}},
      {path: `${ROOT}/zhxt/leader/:id`, component: require('../view/zhxt/department/leaderEdit.vue'), name: 'leaderEdit', meta: {title: '修改区总领导'}},
      /*招聘信息*/
      {path: `${ROOT}/zhxt/recruit`, component: require('../view/zhxt/recruit/recruit.vue'), name: 'recruitList', meta: {title: '招聘信息列表'}},
      {path: `${ROOT}/zhxt/recruit/:id`, component: require('../view/zhxt/recruit/recruitEdit.vue'), name: 'recruitEdit', meta: {title: '修改招聘信息'}},
      {path: `${ROOT}/zhxt/recruitEnter/:id`, component: require('../view/zhxt/recruit/recruitEnter.vue'), name: 'recruitEnter', meta: {title: '意向报名列表'}},
      {path: `${ROOT}/zhxt/recruitCount`, component: require('../view/zhxt/recruit/recruitCount.vue'), name: 'recruitCount', meta: {title: '招聘信息统计'}},
      /*投票调查*/
      {path: `${ROOT}/zhxt/vote`, component: require('../view/zhxt/poll/vote.vue'), name: 'voteList', meta: {title: '投票选举列表'}},
      {path: `${ROOT}/zhxt/vote/:id`, component: require('../view/zhxt/poll/voteEdit.vue'), name: 'voteEdit', meta: {title: '修改投票选举'}},
      {path: `${ROOT}/zhxt/voteCount`, component: require('../view/zhxt/poll/voteCount.vue'), name: 'voteCount', meta: {title: '投票选举统计'}},
      {path: `${ROOT}/zhxt/quest`, component: require('../view/zhxt/poll/quest.vue'), name: 'questList', meta: {title: '问卷调查列表'}},
      {path: `${ROOT}/zhxt/quest/:id`, component: require('../view/zhxt/poll/questEdit.vue'), name: 'questEdit', meta: {title: '修改问卷调查'}},
      {path: `${ROOT}/zhxt/questCount`, component: require('../view/zhxt/poll/questCount.vue'), name: 'questCount', meta: {title: '问卷调查统计'}},
      /*回音壁*/
      {path: `${ROOT}/zhxt/echo`, component: require('../view/zhxt/echo/echo.vue'), name: 'echo', meta: {title: '回音壁列表'}},
      {path: `${ROOT}/zhxt/echo/:id`, component: require('../view/zhxt/echo/echoEdit.vue'), name: 'echoEdit', meta: {title: '修改回音壁'}},
      /*系统设置*/
      {path: `${ROOT}/zhxt/setting/fwh`, component: require('../view/zhxt/setting/fwh.vue'), name: 'fwhSetting', meta: {title: '服务号设置'}},
      {path: `${ROOT}/zhxt/setting/link`, component: require('../view/zhxt/setting/link/link.vue'), name: 'link', meta: {title: '友情链接列表'}},
      {path: `${ROOT}/zhxt/setting/link/:id`, component: require('../view/zhxt/setting/link/linkEdit.vue'), name: 'linkEdit', meta: {title: '添加友情链接'}},
      {path: `${ROOT}/zhxt/setting/linkSetting`, component: require('../view/zhxt/setting/link/linkSetting.vue'), name: 'linkSetting', meta: {title: '友情链接设置'}},
      {path: `${ROOT}/zhxt/setting/relation`, component: require('../view/zhxt/setting/relation.vue'), name: 'relationSetting', meta: {title: '联系我们'}},
    ]
  },

  // 网站主页
  {
    path: `${ROOT}/wzzy`,
    component: require('../view/wzzy/wzzy.vue'),
    children: [
      {path: `${ROOT}/wzzy/home`, component: require('../view/wzzy/home/home.vue'), name: 'wzzyHome', meta: {title: '网站首页'}},
      //详情
      {path: `${ROOT}/wzzy/messageDetail/:id`, component: require('../view/wzzy/messageDetail/messageDetail.vue'), name: 'messageDetail', meta: {title: '新闻动态详情'}},
      {path: `${ROOT}/wzzy/recruitDetail/:id`, component: require('../view/wzzy/messageDetail/recruitDetail.vue'), name: 'recruitDetail', meta: {title: '招聘信息详情'}},
      {path: `${ROOT}/wzzy/chatPoll/:id`, component: require('../view/wzzy/chat/pollDetail.vue'), name: 'chatPollDetail', meta: {title: '投票选举详情'}},
      {path: `${ROOT}/wzzy/chatQuestion/:id`, component: require('../view/wzzy/chat/questionDetail.vue'), name: 'chatQuestionDetail', meta: {title: '问卷调查详情'}},
      {path: `${ROOT}/wzzy/chatEcho/:id`, component: require('../view/wzzy/chat/echoDetail.vue'), name: 'chatEchoDetail', meta: {title: '回音壁详情'}},
      {path: `${ROOT}/wzzy/workerDetail/:id`, component: require('../view/wzzy/advanced/workerDetail.vue'), name: 'workerDetail', meta: {title: '先进人物详情'}},
      /*机构介绍*/
      {path: `${ROOT}/wzzy/laborUnion/:type`, component: require('../view/wzzy/laborUnion/laborUnion.vue'), name: 'laborUnion-wzzy', meta: {title: '机构介绍'}},
      //新闻动态
      {path: `${ROOT}/wzzy/news/:idx/:type`, component: require('../view/wzzy/news/news.vue'), name: 'news-wzzy', meta: {title: '新闻动态'}},
      //办事指南
      {path: `${ROOT}/wzzy/guide/:idx/:type`, component: require('../view/wzzy/guide/guide.vue'), name: 'guide-wzzy', meta: {title: '办事指南'}},
      //工会服务
      {path: `${ROOT}/wzzy/service/:idx/:type`, component: require('../view/wzzy/service/serviceTeach.vue'), name: 'serviceTeach', meta: {title: '工会服务'}},
      //互动交流
      {path: `${ROOT}/wzzy/chat/:type`, component: require('../view/wzzy/chat/chat.vue'), name: 'chat-wzzy', meta: {title: '互动交流'}},
      //先进人物
      {path: `${ROOT}/wzzy/advanced/1/:type`, component: require('../view/wzzy/advanced/advanced.vue'), name: 'advanced-wzzy', meta: {title: '先进人物'}},
      //文件·资料
      {path: `${ROOT}/wzzy/files`, component: require('../view/wzzy/files/files.vue'), name: 'files', meta: {title: '文件·资料'}},
      {path: `${ROOT}/wzzy/filesList/:type`, component: require('../view/wzzy/files/filesList.vue'), name: 'filesList', meta: {title: '文件·资料'}},
      //搜索结果
      {path: `${ROOT}/wzzy/search`, component: require('../view/wzzy/search/search.vue'), name: 'search-wzzy', meta: {title: '搜索结果'}},
    ]
  },
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
      {path: `${ROOT}/fwh/centeredit`, component: require('../view/fwh/center/centeredit.vue'), name: 'centeredit'},  //修改我的信息
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
      {path: `${ROOT}/fwh/pollquestion/:id`, component: require('../view/fwh/poll/pollquestion.vue'), name: 'pollquestion'}, //投票调查--问卷
      {path: `${ROOT}/fwh/build`, component: require('../view/fwh/build/build.vue'), name: 'build-fwh'}, //工会组建
      {path: `${ROOT}/fwh/echo`, component: require('../view/fwh/echo/echo.vue'), name: 'echo-fwh'}, //回音壁
      {path: `${ROOT}/fwh/echo/:id`, component: require('../view/fwh/echo/echoDetail.vue'), name: 'echoDetail-fwh'}, //回音壁详情
    ]
  },
]
