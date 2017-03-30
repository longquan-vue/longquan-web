<template>
    <div class="contentBox">
        <div class="contentBoxtitle">
            <span>积分管理</span>
            <a @click="goBack" style="float:right;"><el-button type="primary" icon="arrow-left"></el-button></a>
        </div>
        <div class="contentBoxCont">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="当前积分" prop="prev" style="width:200px;">
                    <el-input v-model="ruleForm.prev" readonly></el-input>
                </el-form-item>
                <el-form-item label="积分管理" prop="next">
                    <el-select v-model="value" style="width:100px;">
                        <el-option v-for="item in options"  :key="item.label" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input v-model.number="ruleForm.next" style="width:200px;" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {
                ruleForm:{
                    prev:2000,
                    next:'',
                },
                options: [{
                    value: '选项1',
                    label: '增加'
                }, {
                    value: '选项2',
                    label: '减少'
                }],
                value: '增加',
                rules: {
                    next: [
                        { required: true, message: '请填写活动人数' },
                        { type: 'number', message: '必须是数字' },
                    ]
                }
            }
        },
        computed:{
        },
        methods:{
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
        }
    }
</script>
