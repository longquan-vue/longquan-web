<style lang="less">
    .wzzy-toupiao{
        li{
            padding: 20px 0;border-bottom: 1px solid #E7E7E7;
            h2{
                margin-bottom: 10px;position: relative;
                a{ position: relative;color: #333;font-size: 16px;cursor: pointer;display: block;
                    width: 80%;padding-left: 15px;;
                    i{ border: 1px solid #7253e8;color: #7253e8;padding: 2px 4px;border-radius: 4px;font-size: 14px; }
                    &:hover{ color: #BC0000;}
                    &:before{  content: '';  width: 0;  height: 0;  position: absolute;  left: 0;  top: 5px;
                        border-top: 5px solid transparent;
                        border-left: 5px solid #999999;
                        border-bottom: 5px solid transparent;
                    }
                }
                span{ color: #ffffff;font-size: 14px;padding: 1px 10px;border-radius: 10px;
                    display: inline-block;position: absolute;right: 0;top: 5px;
                    &.ising{ background-color: #FF7E00;}
                    &.isover{ background-color: #999999;}
                }
            }
            p{
                overflow: hidden;
                span{ font-size: 14px;color: #999999;
                    img{ vertical-align: middle;position: relative;top: -1px;}
                    i{ color: #ff7e00;}
                }
                em{ float: right;color: #818181;font-size: 14px;position: relative;top: 4px;}
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
                                    <el-breadcrumb-item>互动交流</el-breadcrumb-item>
                                    <el-breadcrumb-item>投票选举</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-kunnanbangfu"></i>投票选举</a></div>
                            <div class="wzzy-sub-content">
                                <ul class="wzzy-toupiao">
                                    <li v-for="i in 10" :key="i">
                                        <h2>
                                            <a @click="go(['chatPollDetail','qweihwehig23245a'])">{{i}}、你心目中的二次元女神到底是怎么样的呢？<i>已投票</i></a>
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
