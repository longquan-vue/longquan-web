<style lang="less">
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
                                    <el-breadcrumb-item>问卷调查</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-kunnanbangfu"></i>问卷调查</a></div>
                            <div class="wzzy-sub-content">
                                <ul class="wzzy-toupiao">
                                    <li v-for="i in 10" :key="i">
                                        <h2>
                                            <a @click="go(['chatQuestionDetail','qweihwehig23245a'])">{{i}}、你心目中的二次元女神到底是怎么样的呢？<i>已答题</i></a>
                                            <span class="ising" v-if="i%2==0">进行中</span>
                                            <span class="isover" v-if="i%2!=0">已结束</span>
                                        </h2>
                                        <p>
                                            <span>
                                                <img src="../../../../static/wzzy/wzzy-point.png">
                                                积分奖励 : <i>50</i>
                                            </span>
                                            <em>2017-05-20 10:40</em>
                                        </p>
                                    </li>
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
