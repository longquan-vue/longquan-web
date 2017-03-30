<template>
    <div class="contentBox">
        <div class="contentBoxtitle">
            <span v-if="show==1">编辑福利预告</span>
            <span v-else>新增福利预告</span>
            <a @click="goBack" style="float:right;"><el-button type="primary" icon="arrow-left"></el-button></a>
        </div>
        <div class="contentBoxCont">
            <div style="width:80%;margin:auto;">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="内容" prop="content">
                        <el-input v-model="ruleForm.content"></el-input>
                    </el-form-item>
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
                    content: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入内容', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
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
            }
        }
    }
</script>
