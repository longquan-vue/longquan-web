<style lang="less">
   .newTips{
       li{ height: 60px;line-height: 60px;border-bottom: 1px solid #E7E7E7;
            a{ display: block;height: 100%;position: relative;cursor: pointer;
                span{ display: block;padding-right: 120px;color: #333;margin-left: 20px;}
                &:before{  content: '';  width: 0;  height: 0;  position: absolute;  left: 0;  top: 24px;
                    border-top: 5px solid transparent;
                    border-left: 5px solid #999999;
                    border-bottom: 5px solid transparent;
                }
                i{ color: #818181;position: absolute;right: 0;top: 0}
                &:hover *{ color: #BC0000}
            }
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
                                    <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
                                    <el-breadcrumb-item>公示公告</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-xinwendongtai"></i>公示公告</a></div>
                            <div class="wzzy-sub-content">
                                <ul class="newTips" v-for="i in 20">
                                    <li><a><span>{{i}}、孙政才主持召开市委常委会会议，听取扶贫开发工作成效考核情况的汇报。</span> <i>2017-04-15  10:30</i></a></li>
                                </ul>
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
