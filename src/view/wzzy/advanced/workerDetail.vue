<style lang="less">
    .modelWorkerDetail{
        overflow: hidden;padding: 40px 0;
        .modelWorkerDetailLeft{
            width: 160px;float: left;
            img{ width: 100%;height: 200px;display: block;margin-bottom: 10px;}
            h2{ font-size: 22px;color: #333333;}
            p{ color: #999999;font-size: 14px;}
        }
        .modelWorkerDetailRight{
            line-height: 30px;font-size: 16px;color: #333;margin-left: 180px;
        }
    }
</style>
<template>
    <div class="wzzyLaborUnion" style="padding-top:20px;">
        <div class="pagewrap">
            <div class="wzzy-content">
                <el-row :gutter="30">
                    <el-col :span="17">
                        <div class="grid-left">
                            <div class="the-place">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>先进人物</el-breadcrumb-item>
                                    <el-breadcrumb-item>详情</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-content">
                                <div class="modelWorkerDetail">
                                    <div class="modelWorkerDetailLeft">
                                        <img :src="data.picUrl">
                                        <h2>{{data.title}}</h2>
                                        <!--<p>RE0 女主</p>-->
                                    </div>
                                    <div class="modelWorkerDetailRight"></div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="grid-right grid-right-sub">
                            <tip></tip>
                            <lastDynamic></lastDynamic>
                            <someIcon></someIcon>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'
    export default{
        data(){
            return{
            }
        },
        components:{
            tip,someIcon,lastDynamic
        },
        computed: {
            ...mapGetters([ 'page','data']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage','getArticle']),
            ...filters,
        },
        created () {
            this.getArticle();
        },
        destroyed(){

        }
    }
</script>
