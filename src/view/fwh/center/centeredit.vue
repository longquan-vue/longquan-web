<style lang="less">
    @import "../../../../static/normal";
    @import "./centeredit.less";
</style>
<template>
   <div class="centeredit">
       <form>
           <div class="formDiv">
               <p>基本资料</p>
               <el-form :model="login" label-position="right" :rules="rules" ref="login" label-width="90px" class="demo-login" >
                   <el-form-item label="昵称" prop="nickname">
                       <el-input :value="login.nickname" @input="(v)=>setLogin({nickname:v})" placeholder="请输入昵称" ></el-input>
                   </el-form-item>
                   <el-form-item label="性别" prop="sex">
                       <el-radio-group :value="login.sex" @input="(v)=>setLogin({sex:v})">
                           <el-radio :label="1">男</el-radio>
                           <el-radio :label="2">女</el-radio>
                       </el-radio-group>
                   </el-form-item>
                   <el-form-item label="生日" prop="birthday" >

                           <datetime title="" v-model="birthday" placeholder="开始时间" :min-year=1980 :max-year=2018 format="YYYY-MM-DD" @on-change="changeStart"
                                     confirm-text="完成" clear-text="清除" cancel-text="取消">
                               <el-form-item prop="start" style="padding-left:0;padding-right:0;background:none;">
                                   <el-input :value="dateFilter(login.birthday)" placeholder="请选择生日" readonly></el-input>
                               </el-form-item>
                           </datetime>

                   </el-form-item>
                   <el-form-item label="婚姻" prop="marriage">
                       <el-radio-group :value="login.marriage" @input="(v)=>setLogin({marriage:v})">
                           <el-radio :label="1">已婚</el-radio>
                           <el-radio :label="2">未婚</el-radio>
                       </el-radio-group>
                   </el-form-item>
                   <el-form-item label="联系电话" prop="phone">
                       <el-input :value="login.phone" placeholder="请输入联系电话" @input="(v)=>setLogin({phone:v})"></el-input>
                   </el-form-item>
                   <el-form-item label="邮寄地址" prop="address">
                       <el-input :value="login.address" placeholder="请输入邮寄地址" @input="(v)=>setLogin({address:v})"></el-input>
                   </el-form-item>
                   <el-form-item label="邮箱" prop="email" style="margin-bottom:10px;">
                       <el-input :value="login.email" placeholder="请输入邮箱" @input="(v)=>setLogin({email:v})"></el-input>
                   </el-form-item>


                   <el-form-item label="职工认证" prop="audit">
                       <el-radio-group :value="login.audit" @input="(v)=>setLogin({audit:v})">
                           <el-radio :label="2" >是工会职工</el-radio>
                           <el-radio :label="1" >不是工会职工</el-radio>
                       </el-radio-group>
                   </el-form-item>
                   <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
                       <div v-if="login.audit==2">
                           <el-form-item label="姓名" prop="name">
                               <el-input :value="login.name" placeholder="请输入姓名" @input="(v)=>setLogin({name:v})"></el-input>
                           </el-form-item>
                           <el-form-item label="身份证号" prop="idCard">
                               <el-input :value="login.idCard" placeholder="请输入身份证号" @input="(v)=>setLogin({idCard:v})"></el-input>
                           </el-form-item>
                           <el-form-item label="所属单位" prop="depName">
                               <el-input :value="login.depName" placeholder="请选择所属单位" readonly @focus="openDepart"></el-input>
                           </el-form-item>
                           <el-form-item label="岗位名称" prop="position">
                               <el-input :value="login.position" placeholder="请输入岗位名称" @input="(v)=>setLogin({position:v})"></el-input>
                           </el-form-item>
                       </div>
                   </transition>



                   <el-form-item style="margin-top:10px;">
                       <el-button type="primary" @click="submitForm('login')">保存</el-button>
                       <el-button @click="resetForm('login')">取消</el-button>
                   </el-form-item>
               </el-form>
           </div>
       </form>

       <myImgDialog @on-result-change="onResultChange" :img="img" :bgImg="bgImg" :def="def" :title="title" :content="content" :btns="btns" :isShow="isshow"></myImgDialog>

       <div v-transfer-dom>
           <x-dialog v-model="departmentPop" class="dialog-demo" :scroll="false" :hideOnBlur="true">
               <div class="popup">
                   <div class="popTitle">
                       所属单位 <img src="../../../../static/wx/del.png" @click="departmentPop=false">
                   </div>
                   <div class="popContent">
                       <div class="search">
                           <el-input placeholder="您也可以搜索单位哦" icon="search" v-model="searchVal">
                           </el-input>
                       </div>
                       <el-radio-group v-model="radio2">
                           <el-radio :label="item.val" v-for="(item, index) in items" :key="index" v-if="searchFilter(item.val,searchVal)">{{searchFilter(item.val,searchVal)}}</el-radio>
                       </el-radio-group>
                   </div>
                   <div class="popBtn">
                       <img src="../../../../static/wx/popbtn.png" @click="selectVal">
                   </div>
               </div>
           </x-dialog>
       </div>

   </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import { Datetime, Group, XButton } from 'vux'
    import {updateUserApi} from '../../../api/userApi'
    import myImgDialog from '../../../components/public/img-dialog/imgDialog.vue'
    import {XDialog, TransferDomDirective as TransferDom} from 'vux'
    export default{
        data(){
            return{
                imageUrl: '',
                isshow:false,//控制弹窗
                img:'',//控制弹窗图片  如果图片存在的话就没有背景，如果图片不存在就有背景
                title:'提示',   //控制弹窗标题
                content:'兑换成功',  //控制弹窗内容
                btns: {btn:'确定'},
                bgImg:'',
                def:false,
                departmentPop:false,
                birthday:this.dateFilter(this.$store.state.login.birthday),
                rules: {
                    nickname: [
                        { required: true, message: '请输入昵称' },
                        { min: 2, max: 6, message: '长度在 2 到 6 个字符'}
                    ],
                    sex: [
                        { type:'number',required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    marriage: [
                        { type:'number',required: true, message: '请选择婚姻状态', trigger: 'change' }
                    ],
                    birthday: [
                        { required: true, message: '请选择生日', trigger: 'change' }
                    ],
                    phone: [
                        { required: true, message: '请填写电话号码', trigger: 'change' }
                    ],
                    address: [
                        { required: true, message: '请填写邮寄地址', trigger: 'change' }
                    ],
                    email: [
                        { required: true, message: '请填写邮箱', trigger: 'change' }
                    ],
                    audit: [
                        { type:'number',required: true, message: '请选择是否为工会职工', trigger: 'change' }
                    ],
                    name: [
                        { required: true, message: '请填写名字', trigger: 'change' },
                        { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'change' }
                    ],
                    idCard: [
                        { required: true, message: '请填写身份证号码', trigger: 'change' },
                    ],
                    depName: [
                        { required: true, message: '请选择所属单位', trigger: 'change' }
                    ],
                    position: [
                        { required: true, message: '请填写岗位名称', trigger: 'change' },
                        { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'change' }
                    ]
                },
                items:[
                    { val:'a单位'},
                    { val:'b单位'},
                    { val:'c单位'},
                    { val:'d单位'},
                    { val:'e单位'},
                    { val:'f单位'},
                    { val:'g单位'},
                    { val:'h单位'},
                    { val:'i单位'},
                    { val:'j单位'},
                    { val:'k单位'},
                    { val:'l单位'},
                    { val:'m单位'},
                    { val:'n单位'},
                    { val:'o单位'},
                    { val:'p单位'},
                    { val:'q单位'},
                    { val:'r单位'},
                    { val:'s单位'},
                ],
                value5:'',
                radio2:'',
                searchVal:'',
            }
        },
        directives: {
            TransferDom
        },
        components:{
            Datetime, Group, XButton , myImgDialog , XDialog
        },
        computed: {...mapGetters(['login'])},
        methods:{
            ...mapActions(['clear','go','getMine','setLogin']),
            ...filters,
            isShow(val){
                if (val==1){
                    this.def=false;
                    this.img = '../../../../static/wx/succ.png';
                    this.content='提交成功';
                    this.btns={btn:'确定'};
                    this.isshow=true;
                }else {
                    this.def=true;
                    this.img = '../../../../static/wx/default.png';
                    this.content='服务器异常，请稍微再试';
                    this.btns={btn:'确定'};
                    this.isshow=true;
                }

            },
            onResultChange(val){
                this.isshow=val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        updateUserApi(this.$store.state.login).then(()=>{
                            this.isShow(1);
                        }).catch(()=>{
                            this.isShow(2);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm() {
                window.history.go(-1);
            },
            changeStart (value) {
                console.log('change', value);
                this.setLogin({birthday:new Date(value).getTime()})
            },
            openDepart(){
                this.departmentPop = true;
            },
            selectVal(){
                if (this.radio2){
                    this.setLogin({depName:this.radio2})
                }
                this.departmentPop = false;
            }
        },
        async created () {
            await this.getMine();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
