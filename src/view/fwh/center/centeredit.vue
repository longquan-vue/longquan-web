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
               <el-form :model="ruleForm" label-position="right" :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm" style="background:#fff;">
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
                   <el-form-item label="邮箱" prop="email">
                       <el-input v-model="ruleForm.email" placeholder="请输入邮箱" ></el-input>
                   </el-form-item>


                   <el-form-item label="职工认证" prop="marriage">
                       <el-radio-group v-model="ruleForm.marriage">
                           <el-radio label="是工会职工"></el-radio>
                           <el-radio label="不是工会职工"></el-radio>
                       </el-radio-group>
                   </el-form-item>

                   <el-form-item label="姓名" prop="truename">
                       <el-input v-model="ruleForm.truename" placeholder="请输入姓名" ></el-input>
                   </el-form-item>
                   <el-form-item label="身份证号" prop="idcard">
                       <el-input v-model="ruleForm.idcard" placeholder="请输入身份证号" ></el-input>
                   </el-form-item>
                   <el-form-item label="身份证号" prop="jobname">
                       <el-input v-model="ruleForm.jobname" placeholder="请输入身份证号" ></el-input>
                   </el-form-item>


                   <el-form-item style="margin-top:20px;">
                       <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                       <el-button @click="resetForm('ruleForm')">取消</el-button>
                   </el-form-item>
               </el-form>
           </div>
       </form>
       <mt-datetime-picker ref="picker" type="date" @confirm="handleConfirm" :startDate="new Date(0)">
       </mt-datetime-picker>
   </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import moment from 'moment';
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
                    email: ''
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
                    ]
                },
                pickerValue:''
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
                console.log(file);
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
            }
        },
        created () {

        }
    }
</script>
