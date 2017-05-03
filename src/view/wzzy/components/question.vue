<template>
    <div class="wzzy-tab">

        <a class="ask-ques" @click="dialogVisible=true">我要咨询</a>

        <el-dialog v-model="dialogVisible" size="tiny" class="wzzy-dialog" :show-close="false">
            <span slot="title" class="wzzy-dialog-header" >
                我要咨询
                <img src="../../../../static/wzzy/wzzy-close.png" @click="dialogVisible=false">
            </span>
            <div class="my-ask">
                <p>提示：遵守国家有关法律、法规，尊重网上道德，承担一切因您的行为而直接或间接引起的法律责任。龙泉驿区总工会拥有管理笔名和留言的一切权利。</p>
                <div class="my-ask-box">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="标题" prop="ask">
                            <el-input type="textarea" v-model="ruleForm.ask" :rows="2"></el-input>
                        </el-form-item>
                        <el-form-item label="咨询内容" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc" :rows="8"></el-input>
                        </el-form-item>
                    </el-form>
                    <a class="formSubmit" @click="submitForm('ruleForm')">提交</a>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<style lang="less">
    .ask-ques{ display: block;width: 100%;height: 40px;border-radius: 4px;cursor: pointer;
        margin-bottom: 20px;
        color: #BC0000;font-size: 16px;;line-height: 40px;text-align: center;
        border: 1px solid #BC0000;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        &:hover{ color: #fff;background-color: #BC0000;}
    }
    .my-ask{
        p{ font-size: 14px;color: #818181;padding-bottom: 15px;border-bottom: 1px solid #E7E7E7;}
        .my-ask-box{ padding-top: 20px;}
    }
    .formSubmit{ width: 250px;height: 40px;display: block;margin:20px auto;background-color: #E00404;text-align: center;line-height: 40px;
        color: #ffffff;font-size: 16px;border-radius: 4px;cursor: pointer;
    }
</style>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    export default{
        data(){
            return{
                dialogVisible: false,
                ruleForm: {
                    ask: '',
                    desc:''
                },
                rules: {
                    ask: [
                        { required: true, message: '请填写咨询标题'},
                        { min: 3, max: 20, message: '长度在 3 到 20 个字符'}
                    ],
                    desc: [
                        { required: true, message: '请填写咨询内容' },
                        { min: 3, max: 200, message: '长度在 3 到 200 个字符' }
                    ]
                }
            }
        },
        components:{

        },
        computed: {
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