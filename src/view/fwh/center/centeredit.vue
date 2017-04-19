<style lang="less">
    @import "../../../../static/normal";
    @import "centeredit";
</style>
<template>
   <div class="centeredit">
       <form>
           <div class="centereditHead">
               <el-upload
                       class="avatar-uploader"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :show-file-list="false"
                       :on-success="handleAvatarScucess"
                       :before-upload="beforeAvatarUpload">
                   <img v-if="imageUrl" :src="imageUrl" class="avatar">
                   <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </el-upload>
           </div>
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
                   <el-form-item label="生日" prop="birth" >

                           <datetime title="" v-model="value5" placeholder="开始时间" :min-year=1980 :max-year=2018 format="YYYY-MM-DD" @on-change="changeStart"
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
                   <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
                       <div v-if="login.audit==2">
                           <el-form-item label="姓名" prop="name">
                               <el-input :value="login.name" placeholder="请输入姓名" @input="(v)=>setLogin({name:v})"></el-input>
                           </el-form-item>
                           <el-form-item label="身份证号" prop="idcard">
                               <el-input :value="login.idCard" placeholder="请输入身份证号" @input="(v)=>setLogin({idCard:v})"></el-input>
                           </el-form-item>
                           <el-form-item label="所属单位" prop="department">
                               <el-input :value="login.depName" placeholder="请选择所属单位" @input="(v)=>setLogin({depName:v})"></el-input>
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
       <!--<mt-datetime-picker ref="picker" type="date" @confirm="handleConfirm" :startDate="new Date(0)">-->
       <!--</mt-datetime-picker>-->
       <!--<mt-popup v-model="popupOpen" popup-transition="popup-fade" style="background:none;">-->
           <!--<div class="popup">-->
               <!--<div class="popTitle">-->
                    <!--所属单位 <img src="../../../../static/wx/del.png" @click="popupOpen=false">-->
               <!--</div>-->
               <!--<div class="popContent">-->
                   <!--<div class="search">-->
                       <!--<el-input placeholder="您也可以搜索单位哦" icon="search" v-model="searchVal">-->
                       <!--</el-input>-->
                   <!--</div>-->
                   <!--<el-radio-group v-model="radio2" @change="radioChange">-->
                       <!--<el-radio :label="item.val" v-for="(item, index) in items" :key="index" v-if="searchFilter(item.val,searchVal)">{{searchFilter(item.val,searchVal)}}</el-radio>-->
                   <!--</el-radio-group>-->
               <!--</div>-->
               <!--<div class="popBtn">-->
                   <!--<img src="../../../../static/wx/popbtn.png" @click="selectVal">-->
               <!--</div>-->
           <!--</div>-->
       <!--</mt-popup>-->

       <myImgDialog @on-result-change="onResultChange" :img="img" :bgImg="bgImg" :def="def" :title="title" :content="content" :btns="btns" :isShow="isshow"></myImgDialog>

   </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import moment from 'moment';
    import filters from '../../../filters'
    import { Datetime, Group, XButton } from 'vux'
    import {updateUserApi} from '../../../api/userApi'
    import myImgDialog from '../../../components/public/img-dialog/imgDialog.vue'
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
                rules: {
                    // name: [
                    //     { required: true, message: '请输入昵称', trigger: 'blur' },
                    //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    // ],
                    // sex: [
                    //     { required: true, message: '请选择性别', trigger: 'change' }
                    // ],
                    // marriage: [
                    //     { required: true, message: '请选择性别', trigger: 'change' }
                    // ],
                    // birth: [
                    //     { required: true, message: '请选择生日', trigger: 'change' }
                    // ],
                    // phone: [
                    //     { required: true, message: '请填写电话号码', trigger: 'change' }
                    // ],
                    // address: [
                    //     { required: true, message: '请填写住址', trigger: 'change' }
                    // ],
                    // email: [
                    //     { required: true, message: '请填写邮箱', trigger: 'change' }
                    // ],
                    // jobaccreditation: [
                    //     { required: true, message: '请选择是否为工会职工', trigger: 'change' }
                    // ],
                    // truename: [
                    //     { required: true, message: '请填写名字', trigger: 'change' },
                    //     { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
                    // ],
                    // idcard: [
                    //     { required: true, message: '请填写身份证号码', trigger: 'change' },
                    // ],
                    // department: [
                    //     { required: true, message: '请选择所属单位', trigger: 'change' }
                    // ],
                    // jobname: [
                    //     { required: true, message: '请填写岗位名称', trigger: 'change' }
                    // ]
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
                value5:''
            }
        },
        components:{
            Datetime, Group, XButton , myImgDialog
        },
        computed: {...mapGetters(['login'])},
        methods:{
            ...mapActions(['clear','go','getMine','setLogin']),
            ...filters,
            handleAvatarScucess(res, file) {
                // this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                this.imageUrl = URL.createObjectURL(file);
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 1;

                if (!isJPG) {
                    console.log('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    console.log('上传头像图片大小不能超过 1MB!');
                }
                return isJPG && isLt2M;
            },
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
            changeRadio(val){
                console.log('change', val);
            },
        },
        created () {
            this.getMine();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
