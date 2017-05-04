<style lang="less">

</style>
<template>
    <div class="wzzyLaborUnion page" style="padding-top:20px;">
        <div class="the-place">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '1' }">新闻动态</el-breadcrumb-item>
                <el-breadcrumb-item>工会新闻</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>工会新闻</a></div>
        <div class="wzzy-sub-content">
            <transition-group name="move" mode="out-in">
                <newsTips :key="1"/>
                <newsMess :key="2"/>
            </transition-group>
        </div>
    </div>
</template>

<script type="es6">
    import {mapGetters, mapActions} from 'vuex'
    import newsAct from './newsAct.vue'
    import newsTips from './newsTips.vue'
    import newsMess from './newsMess.vue'
    export default{
        components:{
            newsAct,newsTips,newsMess
        },
        computed: {
            ...mapGetters(['page', 'list', 'articleType', 'params']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/news/',''));
                return this.$route.path.replace('/view/wzzy/news/','');
            },
            pathName(){
                let path = '';
                switch (this.active){
                    case '1':
                        path='区总介绍';
                        break;
                    case '2':
                        path='区总领导';
                        break;
                    case '3':
                        path='组织机构';
                        break;
                }
                return path;
            }
        },
        created () {
            console.log('this.$store.state.articleType',this.$store.state.articleType)
        },
    }
</script>
