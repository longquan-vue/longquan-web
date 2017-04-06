<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <div class="swichBox">
                <img v-if="!show" src="../../../../static/wx/code.png" @click="getCode">
                <img v-if="show" src="../../../../static/wx/pc.png" @click="clearCode">
            </div>
            <div class="codeBox" v-if="show">
                <img :src="qrcode">
                <div v-if="timeout">
                    <p style="font-size:12px;line-height:30px;color:#999;">Tips : 二维码的有效时间为2分钟,请点击按钮重新获取。</p>
                    <el-button type="primary" @click="reGetCode">重新获取</el-button>
                </div>
            </div>
            <div class="passBox" v-if="!show">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </div>
                    <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    import {codeApi} from '../../../api/adminApi'
    import moment from 'moment'
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                show:false,
                qrcode:'',
                timeout:false
            }
        },
        created(){
            console.log(new Date().getTime());
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        self.$router.push('/view/recruitment');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            async getCode(){
                const {accessToken,qrcode,sessionId,ts} = await codeApi();
                const s = new WebSocket(`ws://java.ichuangye.cn/websocket/${sessionId}`);
                s.onopen = (msg)=>{
                   console.log(msg)
                };
                s.onclose = (msg)=>{
                    console.log(msg)
                };
                s.onmessage = ({data})=>{
                    console.log(data)
                };
                s.onerror = (msg)=>{
                    console.log(msg)
                };
                this.qrcode = qrcode;
                this.show = true;
                const localTime = new Date().getTime();
                const time = ts-localTime;
                console.log(time);
                setTimeout(()=>{
                    this.timeout=true;
                },time+120000)
            },
            async reGetCode(){
                const {accessToken,qrcode,sessionId,ts} = await codeApi();
                this.qrcode = qrcode;
                this.timeout=false;
                const localTime = new Date().getTime();
                const time = ts-localTime;
                setTimeout(()=>{
                    this.timeout=true;
                },time)
            },
            clearCode(){
                this.show = false;
                this.qrcode = '';
                this.timeout = false;
            }
        }
    }
</script>

<style scoped lang="less">
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:380px;
        height:auto;
        margin:-150px 0 0 -190px;
        padding:50px 40px 40px 40px;;
        border-radius: 5px;
        background: #fff;
        .swichBox{ position: absolute;
            right: 10px;top: 10px;width: 32px;height: 32px;
            img{ width: 100%;cursor: pointer;}
        }
        .codeBox{ width: 100%; text-align: center;
            img{ height: 200px;;width: 200px;}
        }
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
