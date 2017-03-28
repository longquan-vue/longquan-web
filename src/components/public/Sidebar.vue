<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="/view/recruitment">
                <i class="el-icon-message"></i>招聘信息管理
            </el-menu-item>
            <el-menu-item index="/view/activity">
              <i class="el-icon-setting"></i>活动管理
            </el-menu-item>
            <el-menu-item index="/view/health">
              <i class="el-icon-information"></i>健身中心管理
            </el-menu-item>
            <el-menu-item index="/view/redenvelope">
              <i class="el-icon-share"></i>红包福利
            </el-menu-item>
            <el-menu-item index="/view/recover">
              <i class="el-icon-delete"></i>回收站
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script type="es6">
    export default {
        computed:{
            onRoutes(){
                if (this.$route.path=='/view/recover/recruitment' || this.$route.path=='/view/recover/activity' ||
                    this.$route.path=='/view/recover/health' || this.$route.path=='/view/recover/redenvelope'){
                    return '/view/recover';
                }else {
                    return this.$route.path;
                }

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
