<template>
    <div class="contentBox">
        <div class="contentBoxtitle">
            <span>用户列表</span>
            <a @click="goBack" style="float:right;"><el-button type="primary" icon="arrow-left"></el-button></a>
        </div>
        <div class="contentBoxCont">
            <div style="width:80%;margin:auto;">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="昵称" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="用户积分" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="男" readonly></el-radio>
                            <el-radio label="女" readonly></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="生日" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="婚姻" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="已婚" readonly></el-radio>
                            <el-radio label="未婚" readonly></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="联系电话" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱地址" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="邮寄地址" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="注册时间" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="职工认证" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="是工会员工" readonly></el-radio>
                            <el-radio label="不是工会员工" readonly></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="所属单位" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="职位名称" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="冻结用户" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="是" readonly></el-radio>
                            <el-radio label="否" readonly></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <!--<el-form-item>-->
                    <!--<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>-->
                    <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
                    <!--</el-form-item>-->
                </el-form>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {
                ruleForm:{
                    name:'钟成'
                }
            }
        },
        computed:{
        },
        methods:{
           goBack(){
               this.$router.go(-1);
           }
        }
    }
</script>
