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
               <el-form :model="ruleForm" label-position="right" :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm" >
                   <el-form-item label="昵称" prop="name">
                       <el-input v-model="ruleForm.name" placeholder="请输入昵称" ></el-input>
                   </el-form-item>
                   <el-form-item label="性别" prop="sex">
                       <el-radio-group v-model="ruleForm.sex">
                           <el-radio label="男"></el-radio>
                           <el-radio label="女"></el-radio>
                       </el-radio-group>
                   </el-form-item>
                   <el-form-item label="生日" prop="birth" >
                       <el-input v-model="ruleForm.birth" placeholder="请选择生日" readonly @focus="openPicker"></el-input>
                   </el-form-item>
                   <el-form-item label="婚姻" prop="marriage">
                       <el-radio-group v-model="ruleForm.marriage">
                           <el-radio label="已婚"></el-radio>
                           <el-radio label="未婚"></el-radio>
                       </el-radio-group>
                   </el-form-item>
                   <el-form-item label="联系电话" prop="phone">
                       <el-input v-model="ruleForm.phone" placeholder="请输入联系电话" ></el-input>
                   </el-form-item>
                   <el-form-item label="邮寄地址" prop="address">
                       <el-input v-model="ruleForm.address" placeholder="请输入邮寄地址" ></el-input>
                   </el-form-item>
                   <el-form-item label="邮箱" prop="email" style="margin-bottom:10px;">
                       <el-input v-model="ruleForm.email" placeholder="请输入邮箱" ></el-input>
                   </el-form-item>


                   <el-form-item label="职工认证" prop="jobaccreditation">
                       <el-radio-group v-model="ruleForm.jobaccreditation" @change="isShow">
                           <el-radio label="是工会职工" ></el-radio>
                           <el-radio label="不是工会职工" ></el-radio>
                       </el-radio-group>
                   </el-form-item>
                   <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
                       <div v-if="show">
                           <el-form-item label="姓名" prop="truename">
                               <el-input v-model="ruleForm.truename" placeholder="请输入姓名" ></el-input>
                           </el-form-item>
                           <el-form-item label="身份证号" prop="idcard">
                               <el-input v-model="ruleForm.idcard" placeholder="请输入身份证号" ></el-input>
                           </el-form-item>
                           <el-form-item label="所属单位" prop="department">
                               <el-input v-model="ruleForm.department" placeholder="请选择所属单位" @focus="openSelect"></el-input>
                           </el-form-item>
                           <el-form-item label="岗位名称" prop="jobname">
                               <el-input v-model="ruleForm.jobname" placeholder="请输入岗位名称" ></el-input>
                           </el-form-item>
                       </div>
                   </transition>



                   <el-form-item style="margin-top:10px;">
                       <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                       <el-button @click="resetForm('ruleForm')">取消</el-button>
                   </el-form-item>
               </el-form>
           </div>
       </form>
       <mt-datetime-picker ref="picker" type="date" @confirm="handleConfirm" :startDate="new Date(0)">
       </mt-datetime-picker>
       <mt-popup v-model="popupOpen" popup-transition="popup-fade" style="background:none;">
           <div class="popup">
               <div class="popTitle">
                    所属单位 <img src="../../../../static/wx/del.png" @click="popupOpen=false">
               </div>
               <div class="popContent">
                   <div class="search">
                       <el-input placeholder="您也可以搜索单位哦" icon="search" v-model="searchVal">
                       </el-input>
                   </div>
                   <el-radio-group v-model="radio2" @change="radioChange">
                       <el-radio :label="item.val" v-for="(item, index) in items" :key="index" v-if="searchFilter(item.val,searchVal)">{{searchFilter(item.val,searchVal)}}</el-radio>
                   </el-radio-group>
               </div>
               <div class="popBtn">
                   <img src="../../../../static/wx/popbtn.png" @click="selectVal">
               </div>
           </div>
       </mt-popup>
   </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import moment from 'moment';
    import {searchFilter} from '../../../filters'
    export default{
        data(){
            return{
                imageUrl: '',
                ruleForm: {
                    name: '',
                    sex: '',
                    marriage:'',
                    birth: '',
                    phone: '',
                    address: '',
                    email: '',
                    jobaccreditation:'',
                    truename:'',
                    idcard:'',
                    department:'',
                    jobname:''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    sex: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    marriage: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    birth: [
                        { required: true, message: '请选择生日', trigger: 'change' }
                    ],
                    phone: [
                        { required: true, message: '请填写电话号码', trigger: 'change' }
                    ],
                    address: [
                        { required: true, message: '请填写住址', trigger: 'change' }
                    ],
                    email: [
                        { required: true, message: '请填写邮箱', trigger: 'change' }
                    ],
                    jobaccreditation: [
                        { required: true, message: '请选择是否为工会职工', trigger: 'change' }
                    ],
                    truename: [
                        { required: true, message: '请填写名字', trigger: 'change' },
                        { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
                    ],
                    idcard: [
                        { required: true, message: '请填写身份证号码', trigger: 'change' },
                    ],
                    department: [
                        { required: true, message: '请选择所属单位', trigger: 'change' }
                    ],
                    jobname: [
                        { required: true, message: '请填写岗位名称', trigger: 'change' }
                    ]
                },
                pickerValue:'',
                popupOpen:false,
                radio2:"", //选择器的默认值
                searchVal:'',//搜索框额默认值
                radioValue:'',
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
                show:false, // 是否显示 职工认证表单
            }
        },
        components:{

        },
        computed: {

        },
        methods:{
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
            resetForm(formName) {
                this.$refs[formName].resetFields();
                window.history.go(-1);
            },
            openPicker() {  //打开日期选择弹窗
                this.$refs.picker.open();
            },
            handleConfirm(data){   //日期选择确定时的操作
                console.log(data);
                this.ruleForm.birth=moment(data,'YYYY-MM-DD').format('YYYY-MM-DD');
            },
            openSelect(){  //打开选择单位弹窗
                this.popupOpen=true;
            },
            radioChange(val){
                console.log(val);
                this.radioValue=val;
            },
            selectVal(){  //选择所属单位确定按钮
                this.popupOpen=false;
                if (this.radioValue){
                    this.ruleForm.department=this.radioValue;
                    this.radio2='';
                    this.searchVal='';
                }
            },
            isShow(val){  //是否为 职工
                if (val=='是工会职工'){
                    this.show=true;
                }else{
                    this.show=false;
                }
            },
            searchFilter,
        },
        created () {

        }
    }
</script>
