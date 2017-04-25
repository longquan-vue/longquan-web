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
      title: '工会职工管理',
      children: [
        {title: '工会职工列表', path: `${ROOT}/zhxt/admin`},
        {title: '工会职工审核列表', path: `${ROOT}/zhxt/adminAudit`},
        {title: '工会职工统计报表', path: `${ROOT}/zhxt/adminCount`},
        {title: '我的公会', path: `${ROOT}/zhxt/myDep`},
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
      title: '系统设置',
      children: [
        {title: '服务号设置', path: `${ROOT}/zhxt/setting/fwh`},
      ]
    },
  ]
}
