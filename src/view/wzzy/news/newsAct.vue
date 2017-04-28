<style lang="less">
   .newsAct{
       .newsAct-card{ position: relative;margin-bottom: 20px;
           -webkit-transition: all 0.3s;
           -moz-transition: all 0.3s;
           -ms-transition: all 0.3s;
           -o-transition: all 0.3s;
           transition: all 0.3s;
            &:hover{
                -webkit-box-shadow: 0 2px 8px -2px rgba(188, 0, 0, 0.3);
                -moz-box-shadow: 0 2px 8px -2px rgba(188, 0, 0, 0.3);
                box-shadow: 0 2px 8px -2px rgba(188, 0, 0, 0.3);
            }
            img{ width: 100%;height: 160px;z-index: 2;}
            .newsAct-card-box{
                padding: 20px;background-color: #ffffff;
                -webkit-box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
                -moz-box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
                box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.12);
                h2{ font-size: 16px;color: #333333;margin-bottom: 10px;}
                div{ font-size: 14px;color: #999999;margin-bottom: 15px;height: 60px;overflow: hidden}
                p{ font-size: 14px;color: #999;}
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
                            <div class="the-place">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
                                    <el-breadcrumb-item>区总活动</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>区总活动</a></div>
                            <div class="wzzy-sub-content">
                                <div class="newsAct">
                                    <el-row :gutter="15">
                                        <el-col :span="8" v-for="i in 9" :key="i">
                                            <div class="newsAct-card">
                                                <img :src="'../../../../static/wx/img/'+i+'.jpg'">
                                                <div class="newsAct-card-box">
                                                    <h2>《创赢中国》BAT精英巅峰会成都站</h2>
                                                    <div>这是一场覆盖全国8大城市的全民创投选秀运动，250万名创业者将在8大创业热点城市通过层层海选，进入《创赢中国》BAT精英巅峰会进行项目路演，优胜者走上深圳卫视《创赢中国》的舞台与12位顶级明星大佬成为创赢拍档，让明星大佬成为你创业的投资人/合伙人！</div>
                                                    <p>2016-12-08 10:40</p>
                                                </div>
                                                <router-link to="" class="block-link"></router-link>
                                            </div>
                                        </el-col>
                                    </el-row>
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
