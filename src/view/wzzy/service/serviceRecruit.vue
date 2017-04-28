<style lang="less">
    .serviceRecruit{
        padding: 40px 0;
        li:not(:first-child){ line-height: 60px;height: 60px;font-size: 16px;color: #333;border-bottom: 1px solid #E7E7E7;
            cursor: pointer;
            &:hover{ background-color: #E7E7E7;}
        }
        .serviceRecruit-head{ text-align: center;height: 40px;line-height: 40px;background-color: #F5F5F5;}
    }
</style>
<template>
    <div class="wzzyLaborUnion" style="padding-top:20px;">
        <div class="pagewrap">
            <div class="wzzy-content">
                <el-row :gutter="30">
                    <el-col :span="17">
                        <div class="grid-left">
                            <div class="the-place" style="">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>工会服务</el-breadcrumb-item>
                                    <el-breadcrumb-item>招聘信息</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-kunnanbangfu"></i>招聘信息</a></div>
                            <div class="wzzy-sub-content">
                                <div class="serviceRecruit">
                                    <ul>
                                        <li class="serviceRecruit-head">
                                            <el-row>
                                                <el-col :span="8">
                                                    职位名称
                                                </el-col>
                                                <el-col :span="8">
                                                    招聘企业
                                                </el-col>
                                                <el-col :span="8">
                                                    薪资待遇
                                                </el-col>
                                            </el-row>
                                        </li>
                                        <li v-for="i in 10" :key="i">
                                            <el-row>
                                                <el-col :span="8">招聘汽车车间电焊工</el-col>
                                                <el-col :span="8" style="text-align: center;">成都爱创业科技有限公司</el-col>
                                                <el-col :span="8" style="text-align: right;"><span style="font-weight: bold;">5000</span> 元/月</el-col>
                                            </el-row>
                                        </li>
                                    </ul>
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
            ...mapGetters([ 'page','list']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
        },
        created () {

        },
        destroyed(){

        }
    }
</script>
