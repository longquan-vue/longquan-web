<style lang="less">

</style>
<template>
    <div class="wzzyLaborUnion page" style="padding-top:20px;">
        <div class="the-place">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '1' }">先进人物</el-breadcrumb-item>
                <el-breadcrumb-item>{{active==1?'优秀职工':'劳模风采'}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>{{active==1?'优秀职工':'劳模风采'}}</a></div>
        <div class="wzzy-sub-content">
            <transition name="move" mode="out-in">
                <advancedModel v-if="active==1"></advancedModel>
            </transition>
            <transition name="move" mode="out-in">
                <advancedWorker v-if="active==2"></advancedWorker>
            </transition>
        </div>
    </div>
</template>

<script type="es6">
    import advancedModel from './model.vue'
    import advancedWorker from './worker.vue'
    export default{
        components:{
            advancedModel,
            advancedWorker
        },
        computed: {
            active(){
                console.log(this.$route.path.replace('/view/wzzy/advanced/',''));
                return this.$route.path.replace('/view/wzzy/advanced/','');
            }
        },
    }
</script>
