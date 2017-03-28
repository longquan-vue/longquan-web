<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="/view/oa/count">
                <i class="el-icon-message"></i>系统统计
            </el-menu-item>
            <el-menu-item index="/view/oa/tips">
              <i class="el-icon-setting"></i>公告
            </el-menu-item>
            <el-menu-item index="/view/oa/notice">
              <i class="el-icon-information"></i>通知
            </el-menu-item>
            <el-menu-item index="/view/oa/innerNews">
              <i class="el-icon-share"></i>内部新闻
            </el-menu-item>
            <el-menu-item index="/view/oa/rules">
              <i class="el-icon-delete"></i>政策法规
            </el-menu-item>
            <el-menu-item index="/view/oa/innerFile">
              <i class="el-icon-delete"></i>内部文件
            </el-menu-item>
            <el-menu-item index="/view/oa/approval">
              <i class="el-icon-delete"></i>采购审批
            </el-menu-item>
            <el-menu-item index="/view/oa/HonorManage">
              <i class="el-icon-delete"></i>荣誉管理
            </el-menu-item>
            <el-menu-item index="/view/oa/innerMeeting">
              <i class="el-icon-delete"></i>内部会议
            </el-menu-item>
            <el-menu-item index="/view/oa/innerActivity">
              <i class="el-icon-delete"></i>内部活动
            </el-menu-item>
            <el-menu-item index="/view/oa/configuration">
              <i class="el-icon-delete"></i>结构配置
            </el-menu-item>
            <el-menu-item index="/view/oa/authority">
              <i class="el-icon-delete"></i>OA权限管理
            </el-menu-item>
            <el-menu-item index="/view/oa/recover">
              <i class="el-icon-delete"></i>回收站
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script type="es6">
    export default {
        computed:{
            onRoutes(){
                return this.$route.path;
            }
        }
    }
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
