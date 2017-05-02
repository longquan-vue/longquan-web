<style lang="less">
    .wzzy-echo{
        li{
            padding: 18px 0;border-bottom: 1px solid #E7E7E7;
            h2{ font-size: 16px;color: #333;margin-bottom: 10px;
                a{ color: #333;cursor: pointer;
                    &:hover{ color: #BC0000;}
                }
                span{ color: #818181;font-size: 14px;float: right;}
            }
            p{ font-size: 14px;color: #8a8a8a;}
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
                            <div class="the-place" style="">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>互动交流</el-breadcrumb-item>
                                    <el-breadcrumb-item>回音壁</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-kunnanbangfu"></i>回音壁</a></div>
                            <div class="wzzy-sub-content">
                                <ul class="wzzy-echo">
                                    <li v-for="i in 10">
                                        <h2><a>问： 孙政才主持召开市委常委会</a><span>2017-05-20</span></h2>
                                        <p>答： 区总工会、区卫计局等部门的参与下到区厂务公开民主管理示范创建申报单（四川省远大专用凭证印务有限公司。</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="grid-right grid-right-sub">
                            <question></question>
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
    import question from '../components/question.vue'
    export default{
        data(){
            return{
            }
        },
        components:{
            tip,someIcon,lastDynamic,question
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
