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
          title: '文件资料管理',
          children: [
            {title: '文件资料列表', path: `${ROOT}/zhxt/article/docs`},
            {title: '资料类型设置', path: `${ROOT}/zhxt/article/docsSetting`},
            {title: '文件资料统计', path: `${ROOT}/zhxt/article/docsCount`}
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
          title: '新闻资讯管理',
          children: [
            {title: '新闻资讯列表', path: `${ROOT}/zhxt/article/info`},
            {title: '新闻类型设置', path: `${ROOT}/zhxt/article/infoSetting`},
            {title: '新闻资讯统计', path: `${ROOT}/zhxt/article/infoCount`}
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
          title: '工会服务管理',
          children: [
            {title: '工会服务列表', path: `${ROOT}/zhxt/article/service`},
            {title: '服务类型设置', path: `${ROOT}/zhxt/article/serviceSetting`},
            {title: '工会服务统计', path: `${ROOT}/zhxt/article/serviceCount`}
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
  ],
  wzzy: [
    {title: '首页', url: `${ROOT}/wzzy/home`, name: 'home'},
    {
      title: '机构介绍', name: 'laborUnion', url: `${ROOT}/wzzy/laborUnion`,
      children: [
        {name: '区总介绍', url: `${ROOT}/wzzy/laborUnion/1`},
        {name: '区总领导', url: `${ROOT}/wzzy/laborUnion/2`},
        {name: '组织机构', url: `${ROOT}/wzzy/laborUnion/3`},
      ]
    },
    {
      title: '新闻动态', name: 'news', url: `${ROOT}/wzzy/news/0`,
      children: [
        {name: '公示公告', url: `${ROOT}/wzzy/news/0`},
        {type: 'info', path: `${ROOT}/wzzy/news/5/`},
        {type: 'activity', path: `${ROOT}/wzzy/news/7/`},
      ]
    },
    {
      title: '办事指南', name: 'guide', url: `${ROOT}/wzzy/guide/1`,
      children: [
        {name: '工会组建', url: `${ROOT}/wzzy/guide/1`},
        {type: 'guide', path: `${ROOT}/wzzy/guide/8/`},
      ]
    },
    {
      title: '工会服务', name: 'service', url: `${ROOT}/wzzy/service/1`,
      children: [
        {name: '市民服务', href: `http://www.longquanyi.gov.cn/index.php?cid=2265`},
        {name: '招聘信息', url: `${ROOT}/wzzy/service/1`},
        {type: 'service', path: `${ROOT}/wzzy/service/2/`},
      ]
    },
    {
      title: '互动交流', name: 'chat', url: `${ROOT}/wzzy/chat/1`,
      children: [
        {name: '投票选举', url: `${ROOT}/wzzy/chat/1`},
        {name: '问卷调查', url: `${ROOT}/wzzy/chat/2`},
        {name: '回音壁', url: `${ROOT}/wzzy/chat/3`},
        // {name:'兴趣联盟',url:`${ROOT}/wzzy/chat/4`},
        {name: '政务微博', href: `http://weibo.com/u/2178811917?refer_flag=1001030101_&is_all=1`},
        {name: '微信公众号', url: `${ROOT}/wzzy/chat/6`},
      ]
    },
    {
      title: '先进人物', name: 'advanced', url: `${ROOT}/wzzy/advanced/1`,
      children: [
        {name: '优秀职工', url: `${ROOT}/wzzy/advanced/1`},
        {name: '劳模风采', url: `${ROOT}/wzzy/advanced/2`},
      ]
    },
    {
      title: '文件·资料', name: 'files', url: `${ROOT}/wzzy/files`,
    },
  ]
}
