const ROOT = "/view"
export default {
  zhxt: [
    {title: '任务首页', path: `${ROOT}/zhxt/readme`, icon: 'date'},
    {
      title: '信息公开管理',
      children: [
        {
          title: '公示公告管理',
          children: [{title: '公示公告列表', path: `${ROOT}/zhxt/article/tips`}]
        },
        {
          title: '工会文件管理',
          children: [
            {title: '工会文件列表', path: `${ROOT}/zhxt/article/docs`},
            {title: '文件类型设置', path: `${ROOT}/zhxt/article/docsSetting`},
            {title: '工会文件统计', path: `${ROOT}/zhxt/article/docsCount`}
          ]
        },
        {
          title: '活动展示管理',
          children: [
            {title: '活动展示列表', path: `${ROOT}/zhxt/article/activity`},
            {title: '活动类型设置', path: `${ROOT}/zhxt/article/activitySetting`},
            {title: '活动展示统计', path: `${ROOT}/zhxt/article/activityCount`}
          ]
        },
        {
          title: '工会资讯管理',
          children: [
            {title: '工会资讯列表', path: `${ROOT}/zhxt/article/info`},
            {title: '资讯类型设置', path: `${ROOT}/zhxt/article/infoSetting`},
            {title: '工会资讯统计', path: `${ROOT}/zhxt/article/infoCount`}
          ]
        },
        {
          title: '办事指南管理',
          children: [
            {title: '办事指南列表', path: `${ROOT}/zhxt/article/guide`},
            {title: '办事类型设置', path: `${ROOT}/zhxt/article/guideSetting`},
            {title: '办事指南统计', path: `${ROOT}/zhxt/article/guideCount`}
          ]
        },
        {
          title: '先进人物管理',
          children: [
            {title: '先进人物列表', path: `${ROOT}/zhxt/article/advanced`},
            {title: '先进类型设置', path: `${ROOT}/zhxt/article/advancedSetting`},
            {title: '先进人物统计', path: `${ROOT}/zhxt/article/advancedCount`}
          ]
        },
        {
          title: '资料中心管理',
          children: [
            {title: '资料中心列表', path: `${ROOT}/zhxt/article/resource`},
            {title: '资料类型设置', path: `${ROOT}/zhxt/article/resourceSetting`},
            {title: '资料中心统计', path: `${ROOT}/zhxt/article/resourceCount`}
          ]
        },
      ]
    },
    {
      title: '投票调查管理',
      children: [
        {title: '问卷调查列表', path: `${ROOT}/zhxt/quest`},
        {title: '问卷调查统计', path: `${ROOT}/zhxt/questCount`},
        {title: '投票选举列表', path: `${ROOT}/zhxt/vote`},
        {title: '投票选举统计', path: `${ROOT}/zhxt/voteCount`},
      ]
    },
    {
      title: '招聘信息管理',
      children: [
        {title: '招聘信息列表', path: `${ROOT}/zhxt/recruit`},
        {title: '招聘信息统计', path: `${ROOT}/zhxt/recruitCount`},
      ]
    },
    {
      title: '签到管理',
      children: [
        {title: '用户签到列表', path: `${ROOT}/zhxt/sign`},
        {title: '用户签到统计', path: `${ROOT}/zhxt/signCount`},
        {title: '用户签到设置', path: `${ROOT}/zhxt/signSetting`},
      ]
    },
    {
      title: '福利管理',
      children: [
        {title: '券类福利列表', path: `${ROOT}/zhxt/welfareTicket`},
        {title: '券类福利统计', path: `${ROOT}/zhxt/welfareTicketCount`},
        {title: '红包福利列表', path: `${ROOT}/zhxt/welfarePack`},
        {title: '红包福利统计', path: `${ROOT}/zhxt/welfarePackCount`},
        {title: '福利预告列表', path: `${ROOT}/zhxt/welfarePrev`},
      ]
    },
    {
      title: '活动管理',
      children: [
        {title: '工会活动列表', path: `${ROOT}/zhxt/activity`},
        {title: '工会活动统计', path: `${ROOT}/zhxt/activityCount`},
      ]
    },
    {
      title: '健身中心管理',
      children: [
        {title: '健身项目列表', path: `${ROOT}/zhxt/health`},
        {title: '健身项目统计', path: `${ROOT}/zhxt/healthCount`},
        {title: '到场签到二维码', path: `${ROOT}/zhxt/healthCode`},
      ]
    },
    {
      title: '工会管理',
      children: [
        {title: '工会管理列表', path: `${ROOT}/zhxt/department`},
        {title: '我的公会', path: `${ROOT}/zhxt/department/mine`},
      ]
    },
    {
      title: '用户管理',
      children: [
        {title: '用户列表', path: `${ROOT}/zhxt/user`},
        {title: '用户统计', path: `${ROOT}/zhxt/userCount`},
      ]
    },
    {
      title: '互动交流管理',
      children: [
        {title: '回音壁列表', path: `${ROOT}/zhxt/echo`},
      ]
    },
    {
      title: '站点管理',
      children: [
        {
          title: '友情链接管理',
          children: [
            {title: '友情链接列表', path: `${ROOT}/zhxt/setting/link`},
            {title: '友情链接设置', path: `${ROOT}/zhxt/setting/linkSetting`},
          ]
        },
        {title: '服务号设置', path: `${ROOT}/zhxt/setting/fwh`},
        {title: '二维码管理', path: `${ROOT}/zhxt/setting/ticket`},
        {title: '联系我们', path: `${ROOT}/zhxt/setting/relation`},
      ]
    },
  ]
}
