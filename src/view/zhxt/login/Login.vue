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
        <el-form :model="admin" :rules="rules" ref="admin" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="userid">
            <el-input v-model="admin.userid" placeholder="请输入用户名、电话号码或邮箱..."/>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input type="password" placeholder="请输入密码..." v-model="admin.pwd" @keyup.enter.native="submitForm()"/>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm()">登录</el-button>
          </div>
          <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import {codeApi} from '../../../api/adminApi'
  import {mapActions} from 'vuex'
  import moment from 'moment'
  import md5 from 'md5'
  export default {
    data: function () {
      return {
        admin: {
          userid: '',
          pwd: ''
        },
        rules: {
          userid: [
            {required: true, message: '请输入用户名、电话号码或邮箱...', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入密码...', trigger: 'blur'}
          ]
        },
        show: false,
        qrcode: '',
        timeout: false
      }
    },
    methods: {
      ...mapActions(['login']),
      submitForm() {
        this.$refs.admin.validate((valid) => {
          if (valid) {
            const {userid, pwd} = this.admin
            this.login({userid, pwd: md5(pwd)})
          } else {
            return false;
          }
        });
      },
      getCode(){
        this.show = true;
        codeApi().then(({accessToken, qrcode, sessionId, ts}) => {
          this.$cookie.set('token_zhxt', accessToken, 'Session');
          this.$cookie.set('session_zhxt', sessionId, 'Session');
          this.$socket.open(sessionId).on('login', ({user}) => this.login(user));
          this.qrcode = qrcode;
          setTimeout(() => {
            this.timeout = true;
            this.$socket.close();
//          }, ts - new Date().getTime() + 120000)
          }, 120000)
        })
      },
      reGetCode(){
        this.timeout = false;
        this.getCode();
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
  .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ms-title {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #fff;

  }

  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 380px;
    height: auto;
    margin: -150px 0 0 -190px;
    padding: 50px 40px 40px 40px;;
    border-radius: 5px;
    background: #fff;

  .swichBox {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 32px;
    height: 32px;

  img {
    width: 100%;
    cursor: pointer;
  }

  }
  .codeBox {
    width: 100%;
    text-align: center;

  img {
    height: 200px;;
    width: 200px;
  }

  }
  }
  .login-btn {
    text-align: center;
  }

  .login-btn button {
    width: 100%;
    height: 36px;
  }
</style>
