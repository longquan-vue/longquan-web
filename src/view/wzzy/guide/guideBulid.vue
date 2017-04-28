<style lang="less">
    .guideBulid{
        .guideBulidTitle{ margin: 40px auto;width: 360px;font-size: 22px;color: #cc0000;
            position: relative;text-align: center;
            &:before{ content: '';width: 90px;height: 1px;background-color: #E7E7E7;position: absolute;
                top: 50%;left: 0;
            }
            &:after{ content: '';width: 90px;height: 1px;background-color: #E7E7E7;position: absolute;
                top: 50%;right: 0;
            }
        }
        .guideBulidRule{
            margin-bottom: 20px;;
            h2{ font-size: 18px;color: #333;font-weight: bold}
            p{ font-size: 16px;color: #333;line-height: 28px;}
        }
        .guideBulidForm{
            background-color: #FFF5F5;padding: 20px;
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
                                    <el-breadcrumb-item>办事指南</el-breadcrumb-item>
                                    <el-breadcrumb-item>工会组建</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title" style="margin-bottom:0"><a><i class="iconfont icon-xinwendongtai"></i>工会组建</a></div>
                            <div class="wzzy-sub-content">
                                <div class="guideBulid">
                                    <div class="guideBulidTitle">
                                        <span>工会组建申请表</span>
                                    </div>
                                    <div class="guideBulidRule">
                                        <h2>填表说明:</h2>
                                        <p>1、以下内容请务必填写；</p>
                                        <p>2、“工会职务”是指工会委员会委员的内部分工情况。如：副主席、经审主任、女职工主任、组织委员、文体委员、安全生产委员等；</p>
                                        <p>3、“是否有党组织”如无党组织则填报“无”，如有党组织则填报：（1）党委，（2）党总支，（3）党支部；</p>
                                        <p>4、“所在单位类别”按以下内容填报：（1）国有企业，（2）集体企业，（3）事业，（4）机关，（5）非公有制内资企业（6）外资企业；</p>
                                        <p>5、“所在单位行业分类”按以下内容填报：（1）农、林、牧、渔业，（2）采矿业，（3）制造业，（4）电力、燃气及水的生产和供应业，
                                            （5）建筑业，（6）交通运输、仓储及邮政业，（7）信息传输、计算机服务和软件业，（8）批发和零售业，（9）住宿和餐饮业，（10）金融业，
                                            （11）房地产业，（12）租赁和商业服务业，（13）科学研究、技术服务和地址勘查业，（14）水利、环境和公共设施管理业，（15）居民服务和其他服务业，
                                            （16）教育，（17）卫生、社会保障和社会福利业，（18）文化、体育和娱乐业，（19）公共管理和社会组织，（20）国际组织</p>
                                    </div>
                                    <div class="guideBulidForm">
                                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                            <el-form-item label="单位名称" prop="name">
                                                <el-input v-model="ruleForm.name" placeholder="请输入单位名称"></el-input>
                                            </el-form-item>
                                            <el-form-item label="单位地址" prop="address">
                                                <el-input v-model="ruleForm.address" placeholder="请输入单位地址"></el-input>
                                            </el-form-item>
                                            <el-form-item label="单位类型" prop="type" style="width:100%">
                                                <el-select v-model="ruleForm.type" placeholder="请选择" style="width:100%">
                                                    <el-option label="国有企业" value="1"></el-option>
                                                    <el-option label="集体企业" value="2"></el-option>
                                                    <el-option label="事业企业" value="3"></el-option>
                                                    <el-option label="机关企业" value="4"></el-option>
                                                    <el-option label="非公有制内资企业" value="5"></el-option>
                                                    <el-option label="外资企业" value="6"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item label="所属行业" prop="type2">
                                                <el-select v-model="ruleForm.type2" placeholder="请选择" style="width:100%">
                                                    <el-option :label="item" :value="index" :key="index" v-for="(item,index) in jobType"></el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item label="职工总数" prop="num">
                                                <el-input v-model.number="ruleForm.num" placeholder="请输入单位员工总数"></el-input>
                                            </el-form-item>
                                            <el-form-item label="女职工总数" prop="womenNum">
                                                <el-input v-model.number="ruleForm.womenNum" placeholder="请输入单位女员工总数"></el-input>
                                            </el-form-item>
                                            <el-form-item label="申请人姓名" prop="approName">
                                                <el-input v-model="ruleForm.approName" placeholder="请输入申请人姓名"></el-input>
                                            </el-form-item>
                                            <el-form-item label="联系电话" prop="phone">
                                                <el-input v-model="ruleForm.phone" placeholder="请输入申请人联系电话"></el-input>
                                            </el-form-item>
                                            <el-form-item label="申邮箱地址" prop="email">
                                                <el-input v-model="ruleForm.email" placeholder="请输入申请人邮箱地址"></el-input>
                                            </el-form-item>
                                            <el-form-item label="申请备注" prop="desc">
                                                <el-input type="textarea"  :rows="6" v-model="ruleForm.desc"></el-input>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="danger" style="width:270px;" @click="submitForm('ruleForm')">立即创建</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </div>
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
                jobType:[
                    '农、林、牧、渔业','采矿业','制造业','电力、燃气及水的生产和供应业','建筑业','交通运输、仓储及邮政业',
                    '信息传输、计算机服务和软件业','批发和零售业','住宿和餐饮业','金融业','房地产业','租赁和商业服务业',
                    '科学研究、技术服务和地址勘查业','水利、环境和公共设施管理业','居民服务和其他服务业','教育','卫生、社会保障和社会福利业',
                    '文化、体育和娱乐业','公共管理和社会组织','国际组织'
                ],
                ruleForm: {
                    name: '',
                    address: '',
                    type: '',
                    type2: '',
                    num: '',
                    womenNum: '',
                    approName: '',
                    phone:'',
                    email:'',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入单位名称', trigger: 'change' },
                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'change' }
                    ],
                    address: [
                        { required: true, message: '请输入单位地址', trigger: 'change' },
                        { min: 2, max: 40, message: '长度在 2 到 40 个字符', trigger: 'change' }
                    ],
                    type: [
                        { required: true, message: '请选择单位类型', trigger: 'change' }
                    ],
                    type2: [
                        { required: true, message: '请选择所属行业', trigger: 'change' }
                    ],
                    num: [
                        { required: true, message: '请输入职工总数', trigger: 'change' },
                        { min: 1, max: 5, message: '长度在 2 到 5 个字符', trigger: 'change' },
                        { type: 'number', message: '职工总数必须为数字值'}
                    ],
                    womenNum: [
                        { required: true, message: '请输入女职工总数', trigger: 'change' },
                        { min: 1, max: 5, message: '长度在 2 到 5 个字符', trigger: 'change' },
                        { type: 'number', message: '女职工总数必须为数字值'}
                    ],
                    approName: [
                        { required: true, message: '请输入申请人姓名', trigger: 'change' },
                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'change' }
                    ],
                    phone: [
                        { required: true, message: '请输入联系方式', trigger: 'change' },
                    ],
                    email: [
                        { required: true, message: '请输入联系邮箱', trigger: 'change' },
                    ],
                    desc: [
                        { required: true, message: '请填写申请备注', trigger: 'blur' }
                    ]
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
