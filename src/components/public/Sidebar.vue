<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>任务首页
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>文章管理</template>
                <el-menu-item index="basetable">文章列表</el-menu-item>
                <el-menu-item index="vuetable">文章报送</el-menu-item>
                <el-menu-item index="vuetable">文章审核</el-menu-item>
                <el-menu-item index="vuetable">文章分类</el-menu-item>
                <el-menu-item index="vuetable">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-date"></i>投票调查管理</template>
                <el-menu-item index="baseform">投票调查列表</el-menu-item>
                <el-menu-item index="vueeditor">管理配置</el-menu-item>
                <el-menu-item index="markdown">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-star-on"></i>回音壁管理</template>
                <el-menu-item index="baseform">回音壁列表</el-menu-item>
                <el-menu-item index="basecharts">管理配置</el-menu-item>
                <el-menu-item index="markdown">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title"><i class="el-icon-star-on"></i>招聘信息管理</template>
                <el-menu-item index="baseform">招聘信息列表</el-menu-item>
                <el-menu-item index="basecharts">管理配置</el-menu-item>
                <el-menu-item index="markdown">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title"><i class="el-icon-star-on"></i>签到管理</template>
                <el-menu-item index="signinlist">签到列表</el-menu-item>
                <el-menu-item index="signinsetting">签到设置</el-menu-item>
                <el-menu-item index="signincount">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title"><i class="el-icon-star-on"></i>福利管理</template>
                <el-menu-item index="welfareTickt">券类福利列表</el-menu-item>
                <el-menu-item index="welfareTicktCount">券类统计报表</el-menu-item>
                <el-menu-item index="welfarePack">红包福利列表</el-menu-item>
                <el-menu-item index="welfarePackCount">红包统计报表</el-menu-item>
                <el-menu-item index="welfarePrev">福利预告</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
                <template slot="title"><i class="el-icon-star-on"></i>活动管理</template>
                <el-menu-item index="activity">活动列表</el-menu-item>
                <el-menu-item index="basecharts">活动配置</el-menu-item>
                <el-menu-item index="markdown">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="9">
                <template slot="title"><i class="el-icon-star-on"></i>健身中心管理</template>
                <el-menu-item index="baseform">报名列表</el-menu-item>
                <el-menu-item index="basecharts">管理配置</el-menu-item>
                <el-menu-item index="markdown">统计报表</el-menu-item>
            </el-submenu>

            <el-submenu index="10">
                <template slot="title"><i class="el-icon-star-on"></i>服务号管理（二期）</template>
                <el-menu-item index="baseform">群发功能</el-menu-item>
                <el-menu-item index="basecharts">自定义菜单</el-menu-item>
                <el-menu-item index="markdown">模板信息</el-menu-item>
                <el-menu-item index="markdown">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="11">
                <template slot="title"><i class="el-icon-star-on"></i>工会组建管理</template>
                <el-menu-item index="baseform">工会列表</el-menu-item>
                <el-menu-item index="basecharts">申请列表</el-menu-item>
                <el-menu-item index="markdown">审核列表</el-menu-item>
                <el-menu-item index="markdown">参数配置</el-menu-item>
                <el-menu-item index="markdown">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="12">
                <template slot="title"><i class="el-icon-star-on"></i>工会职工认证管理</template>
                <el-menu-item index="baseform">职工列表</el-menu-item>
                <el-menu-item index="markdown">审核列表</el-menu-item>
                <el-menu-item index="markdown">我的工会</el-menu-item>
                <el-menu-item index="markdown">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="13">
                <template slot="title"><i class="el-icon-star-on"></i>用户管理</template>
                <el-menu-item index="user">用户列表</el-menu-item>
                <el-menu-item index="usercount">统计报表</el-menu-item>
            </el-submenu>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>系统设置
            </el-menu-item>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>权限角色管理
            </el-menu-item>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>网站站点管理
            </el-menu-item>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>回收站
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script type="es6">
    export default {
        computed:{
            onRoutes(){
                // if (this.$route.path=='/view/recover/recruitment' || this.$route.path=='/view/recover/activity' ||
                //     this.$route.path=='/view/recover/health' || this.$route.path=='/view/recover/redenvelope'){
                //     return '/view/recover';
                // }else {
                //     return this.$route.path;
                // }
                console.log(this.$route.path.replace('/view/zhxt/',''));
                // return this.$route.path;
                return this.$route.path.replace('/view/zhxt/','');
            }
        }
    }
</script>
<style lang="less" scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 220px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
        overflow-y: scroll;
    }
</style>
