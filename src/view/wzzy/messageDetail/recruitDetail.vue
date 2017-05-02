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
    .formSubmit{ width: 200px;height: 40px;display: block;margin:20px auto;background-color: #E00404;text-align: center;line-height: 40px;
        color: #ffffff;font-size: 16px;border-radius: 4px;cursor: pointer;
    }
    .wzzy-dialog{
        .el-dialog__header{ padding:0;}
        .el-dialog--tiny{ width: 700px;}
        .wzzy-dialog-header{ text-align: center;display: block;font-size: 22px;color: #ff7e00;
            background-color: #FFE8D2;height: 70px;line-height: 70px;position: relative;
            img{ position: absolute;right: 20px;top: 26px;cursor: pointer;
                -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                -ms-transition: all 0.3s;
                -o-transition: all 0.3s;
                transition: all 0.3s;
                &:hover{
                    -webkit-transform: rotateZ(360deg);
                    -moz-transform: rotateZ(360deg);
                    -ms-transform: rotateZ(360deg);
                    -o-transform: rotateZ(360deg);
                    transform: rotateZ(360deg);}
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
        <el-dialog v-model="dialogVisible" size="tiny" class="wzzy-dialog" :show-close="false">
            <span slot="title" class="wzzy-dialog-header" >
                招聘报名表
                <img src="../../../../static/wzzy/wzzy-close.png" @click="dialogVisible=false">
            </span>

            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="ruleForm.sex">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm.age"></el-input>
                </el-form-item>
                <el-form-item label="婚姻" prop="marriage">
                    <el-radio-group :value="ruleForm.marriage">
                        <el-radio :label="1">已婚</el-radio>
                        <el-radio :label="2">未婚</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="籍贯" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="工作经验" prop="job">
                    <el-radio-group :value="ruleForm.job">
                        <el-radio :label="1">有</el-radio>
                        <el-radio :label="2">无</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model.number="ruleForm.phone" placeholder="请输入联系电话"></el-input>
                </el-form-item>
            </el-form>
            <a class="formSubmit" @click="submitForm('ruleForm')">提交</a>
            <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
            <!--</span>-->
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
                dialogVisible: false,
                ruleForm: {
                    name: '',
                    sex: 0,
                    age: '',
                    marriage: 1,
                    address: '',
                    job: 1,
                    phone:''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入您的姓名' },
                        { min: 2, max: 8, message: '长度在 2 到 8 个字符' }
                    ],
                    age:[
                        { required: true, message: '年龄不能为空'},
                        { type: 'number', message: '年龄必须为数字值'}
                    ],
                    phone:[
                        { required: true, message: '联系电话不能为空'},
                        { type: 'number', message: '联系电话必须为数字值'}
                    ],
                }
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
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
        created () {

        },
        destroyed(){

        }
    }
</script>
