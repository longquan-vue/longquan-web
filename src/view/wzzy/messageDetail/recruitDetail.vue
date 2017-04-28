<style lang="less">
    .wzzy-recruitDetail{
        .wzzy-recruitDetail-head{
            overflow: hidden;padding: 20px 0px;border-bottom: 1px solid #E7E7E7;line-height: 40px;;
            span{ font-size: 22px;color: #333;}
            a{ float: right;width: 150px;height: 40px;background-color: #FF7E00;color: #ffffff;font-size: 16px;
                border-radius: 4px;text-align: center;cursor: pointer;
            }
        }
        .wzzy-recruitDetail-cont{
            li{
                padding: 20px 0;border-bottom: 1px solid #E7E7E7;font-size: 16px;overflow: hidden;
                .labelMsg{ color: #8a8a8a;float: left;width: 10%;}
                .labelCont{ color: #333;float: left;width: 85%;}
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
                                    <el-breadcrumb-item>招聘信息</el-breadcrumb-item>
                                    <el-breadcrumb-item>详情</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-content">
                                <div class="wzzy-recruitDetail">
                                    <div class="wzzy-recruitDetail-head">
                                        <span>招聘汽车模型</span>
                                        <a @click="openSign">报名</a>
                                    </div>
                                    <ul class="wzzy-recruitDetail-cont">
                                        <li>
                                            <div class="labelMsg">招聘岗位：</div>
                                            <div class="labelCont">车间电焊工、车间技工</div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">招聘人数：</div>
                                            <div class="labelCont">1000 人</div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">薪资待遇：</div>
                                            <div class="labelCont">6000 元/月</div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">招聘单位：</div>
                                            <div class="labelCont">成都爱创业科技有限公司</div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">单位地址：</div>
                                            <div class="labelCont">菁蓉国际广场C栋504</div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">招聘时间：</div>
                                            <div class="labelCont">2017-03-23 10:30 至 2017-04-23 10:30</div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">招聘要求：</div>
                                            <div class="labelCont">
                                                1、福利期间每人只能兑换一次该福利

                                                2、兑换成功后凭借个人中心的福利码到指定地点进行换取电影票奖品

                                                3、点击链接查看换票地址：http://shop.ichuangye.cn/Admin/Index/index
                                            </div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">福利待遇：</div>
                                            <div class="labelCont">
                                                1、福利期间每人只能兑换一次该福利

                                                2、兑换成功后凭借个人中心的福利码到指定地点进行换取电影票奖品

                                                3、点击链接查看换票地址：http://shop.ichuangye.cn/Admin/Index/index
                                            </div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">联系人：</div>
                                            <div class="labelCont">钟成</div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">联系电话：</div>
                                            <div class="labelCont">18683370859</div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">联系人：</div>
                                            <div class="labelCont">老魏</div>
                                        </li>
                                        <li>
                                            <div class="labelMsg">联系电话：</div>
                                            <div class="labelCont">12211254143</div>
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
        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
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
                dialogVisible: false
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
            openSign(){
                this.dialogVisible = true;
            },
        },
        created () {

        },
        destroyed(){

        }
    }
</script>
