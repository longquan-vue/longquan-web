import {ROOT} from './routers'
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
  ],
  wzzy:[
      { title:'首页',url:`${ROOT}/wzzy/home`,name:'home'},
      {
        title:'机构介绍',name:'laborUnion',url:`${ROOT}/wzzy/laborUnion`,
        children:[
          {name:'区总介绍',url:`/1`},
          {name:'区总领导',url:`/2`},
          {name:'机构设置',url:`/3`},
          {name:'机关党委',url:`/4`},
        ]
      },
      {
          title:'新闻动态',name:'news',url:`${ROOT}/wzzy/news`,
          children:[
              {name:'公示公告', url:`/1`},
              {name:'工会新闻', url:`/2`},
              {name: '基层动态', url:`/3`},
              {name: '区总活动', url:`/4`},
              {name:'基层活动', url:`/5`},
          ]
      },
      {
          title:'办事指南',name:'guide',url:`${ROOT}/wzzy/guide`,
          children:[
              {name:'职工维权',url:'/1'},
              {name:'职工服务',url:'/2'},
              {name:'工会组建',url:'/3'},
              {name:'劳模服务',url:'/4'},
          ]
      },
      {
          title:'工会服务',name:'service',url:`${ROOT}/wzzy/service`,
          children:[
              {name:'困难帮扶',url:'/1'},
              {name:'招聘信息',url:'/2'},
              {name:'职工培训',url:'/3'},
              {name:'市民服务',url:'/4'},
          ]
      },
      {
          title:'互动交流',name:'chat',url:`${ROOT}/wzzy/chat`,
          children:[
              {name:'投票选举',url:'/1'},
              {name:'问卷调查',url:'/2'},
              {name:'回音壁',url:'/3'},
              {name:'兴趣联盟',url:'/4'},
              {name:'政务微博',url:'/5'},
              {name:'微信公众号',url:'/6'},
          ]
      },
      {
          title:'先进人物',name:'advanced',url:`${ROOT}/wzzy/advanced`,
          children:[
              {name:'优秀职工',url:'/1'},
              {name:'劳模风采',url:'/2'},
          ]
      },
      {
          title:'文件·资料',name:'files',url:`${ROOT}/wzzy/files`,
      },
  ]
}
