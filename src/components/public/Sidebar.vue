<template>
  <div class="sidebar">
    <el-menu :default-active="active" class="el-menu-vertical-demo" theme="dark" unique-opened @select="handleSelect">
      <el-menu-item index="readme">
        <i class="el-icon-setting"></i>任务首页
      </el-menu-item>
      <!--<el-submenu index="2">-->
      <!--<template slot="title"><i class="el-icon-menu"></i>文章管理</template>-->
      <!--<el-menu-item index="basetable">文章列表</el-menu-item>-->
      <!--<el-menu-item index="vuetable">文章报送</el-menu-item>-->
      <!--<el-menu-item index="vuetable">文章审核</el-menu-item>-->
      <!--<el-menu-item index="vuetable">文章分类</el-menu-item>-->
      <!--<el-menu-item index="vuetable">统计报表</el-menu-item>-->
      <!--</el-submenu>-->
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-date"></i>投票调查管理</template>
        <el-menu-item index="pollList">投票调查列表</el-menu-item>
        <el-menu-item index="pollSetting">管理配置</el-menu-item>
        <el-menu-item index="PollCount">统计报表</el-menu-item>
      </el-submenu>
      <!--<el-submenu index="4">-->
      <!--<template slot="title"><i class="el-icon-star-on"></i>回音壁管理</template>-->
      <!--<el-menu-item index="baseform">回音壁列表</el-menu-item>-->
      <!--<el-menu-item index="basecharts">管理配置</el-menu-item>-->
      <!--<el-menu-item index="markdown">统计报表</el-menu-item>-->
      <!--</el-submenu>-->
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-star-on"></i>招聘信息管理</template>
        <el-menu-item index="recruitList">招聘信息列表</el-menu-item>
        <el-menu-item index="recruitSetting">管理配置</el-menu-item>
        <el-menu-item index="recruitCount">统计报表</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-star-on"></i>签到管理</template>
        <el-menu-item index="signList">签到列表</el-menu-item>
        <el-menu-item index="signSetting">签到设置</el-menu-item>
        <el-menu-item index="signCount">统计报表</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-star-on"></i>福利管理</template>
        <el-menu-item index="welfareTicket">券类福利列表</el-menu-item>
        <el-menu-item index="welfareTicketCount">券类统计报表</el-menu-item>
        <el-menu-item index="welfarePack">红包福利列表</el-menu-item>
        <el-menu-item index="welfarePackCount">红包统计报表</el-menu-item>
        <el-menu-item index="welfarePrev">福利预告</el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title"><i class="el-icon-star-on"></i>活动管理</template>
        <el-menu-item index="activityList">活动列表</el-menu-item>
        <!--<el-menu-item index="activityCount">活动配置</el-menu-item>-->
        <el-menu-item index="activityCount">统计报表</el-menu-item>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title"><i class="el-icon-star-on"></i>健身中心管理</template>
        <el-menu-item index="health">健身项目列表</el-menu-item>
        <el-menu-item index="healthCount">统计报表</el-menu-item>
        <el-menu-item index="healthCode">到场签到二维码</el-menu-item>
      </el-submenu>

      <!--<el-submenu index="10">-->
      <!--<template slot="title"><i class="el-icon-star-on"></i>服务号管理（二期）</template>-->
      <!--<el-menu-item index="baseform">群发功能</el-menu-item>-->
      <!--<el-menu-item index="basecharts">自定义菜单</el-menu-item>-->
      <!--<el-menu-item index="markdown">模板信息</el-menu-item>-->
      <!--<el-menu-item index="markdown">统计报表</el-menu-item>-->
      <!--</el-submenu>-->
      <el-submenu index="11">
        <template slot="title"><i class="el-icon-star-on"></i>工会组建管理</template>
        <el-menu-item index="depList">工会列表</el-menu-item>
        <el-menu-item index="entryDepList">申请列表</el-menu-item>
        <el-menu-item index="auditDepList">审核列表</el-menu-item>
        <el-menu-item index="depSetting">参数配置</el-menu-item>
        <el-menu-item index="depCount">统计报表</el-menu-item>
      </el-submenu>
      <el-submenu index="12">
        <template slot="title"><i class="el-icon-star-on"></i>工会职工认证管理</template>
        <el-menu-item index="adminList">职工列表</el-menu-item>
        <el-menu-item index="auditList">审核列表</el-menu-item>
        <el-menu-item index="department">我的工会</el-menu-item>
        <el-menu-item index="adminCount">统计报表</el-menu-item>
      </el-submenu>
      <el-submenu index="13">
        <template slot="title"><i class="el-icon-star-on"></i>用户管理</template>
        <el-menu-item index="userList">用户列表</el-menu-item>
        <el-menu-item index="userCount">统计报表</el-menu-item>
      </el-submenu>
      <el-menu-item index="setting">
        <i class="el-icon-setting"></i>系统设置
      </el-menu-item>
      <el-menu-item index="authority">
        <i class="el-icon-setting"></i>权限角色管理
      </el-menu-item>
      <el-menu-item index="configuration">
        <i class="el-icon-setting"></i>网站站点管理
      </el-menu-item>
      <el-menu-item index="recover">
        <i class="el-icon-setting"></i>回收站
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script type="es6">
  export default {
    computed: {
      active(){
        return this.$route.name;
      },
    },
    methods: {
      handleSelect(name){
        this.$router.push({name})
      }
    }
  }
</script>
<style lang="less" scoped>
  .sidebar {
    display: block;
    position: absolute;
    width: 220px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #2E363F;
  }

  .sidebar > ul {
    height: 100%;
    overflow-y: scroll;
  }
</style>
