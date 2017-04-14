<template>
    <div class="contentBox">
        <div class="contentBoxtitle">
            <span>签到设置</span>
        </div>
        <div class="contentBoxCont">
            <el-row>
                <el-col :span="12">
                    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="120px" class="demo-ruleForm">
                        <el-form-item label="基础签到积分" prop="age"
                                      :rules="[
                          { required: true, message: '积分不能为空'},
                          { type: 'number', message: '积分必须为数字值'}
                        ]"
                        >
                            <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off" style="width:90%;"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                            <el-button @click="goBack">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="12">
                    <p style="line-height:36px;color:#999;">体式:系统默认积分为10分,签到积分规则为:连续签到以基础积分为基数进行递增，一周一个轮回</p>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script type="es6">
    export default{
        data(){
            return{
                numberValidateForm: {
                  age: ''
                }
            }
        },
        components:{

        },
        methods: {
            goBack(){
                this.$router.go(-1);
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
