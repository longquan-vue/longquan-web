<template>
    <div class="contentBox">
        <div class="contentBoxtitle">
            <span v-if="show==1">编辑红包福利</span>
            <span v-else>新增红包福利</span>
            <a @click="goBack" style="float:right;"><el-button type="primary" icon="arrow-left"></el-button></a>
        </div>
        <div class="contentBoxCont">
            <div style="width:80%;margin:auto;">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="福利名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="福利总量" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="福利时间" prop="name">
                        <el-date-picker v-model="ruleForm.time" type="datetimerange" placeholder="选择时间范围">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="所需积分" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="兑换次数" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="福利提供方" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="福利提供方链接" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="兑换规则" prop="name">
                        <el-input type="textarea" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="微信红包祝福语" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <div v-if="show==1">
                        <el-form-item label="福利发布者" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="发布时间" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                    </div>
                    <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                },
                show:false
            }
        },
        computed:{

        },
        mounted: function() {
            this.isEdit();
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            isEdit(){  // 判断是否为 编辑 或者 新增
                let status=this.$route.query.id;
                if (status==1){
                    this.show=true;
                }else {
                    this.show=false;
                }
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
            },
            handleRemove(file, fileList) {  //删除图片
                console.log(file, fileList);
            }
        }
    }
</script>
