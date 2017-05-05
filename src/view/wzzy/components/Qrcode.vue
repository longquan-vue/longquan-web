<template>
  <el-dialog title="微信二维码登录" v-model="show" @close="changeSys({qrcode:false})" size="tiny">
    <div class="codeBox">
      <img :src="qrcode">
      <div v-if="timeout">
        <p style="font-size:12px;line-height:30px;color:#999;">Tips : 二维码的有效时间为2分钟,请点击按钮重新获取。</p>
        <el-button type="primary" @click="reGetCode">重新获取</el-button>
      </div>
    </div>
  </el-dialog>
</template>
<style lang="less" scoped>
  .codeBox{
      text-align: center;
      img{ width: 200px;}
  }
</style>
<script type="es6">
  import {userLoginApi} from '../../../api/userApi'
  import {mapGetters, mapActions} from 'vuex'
  import {alert} from '../../../actions'
  export default{
    data(){
      return {
        qrcode: '',
        timeout: false,
        show: false,
        timer:null
      }
    },
    watch: {
      setting({qrcode}){
        qrcode ? this.getCode() : this.clearCode()
      },
    },
    computed: {
      ...mapGetters(['setting']),
    },
    methods: {
      ...mapActions(['getMine', 'changeSys']),
      getCode(){
        this.show = true;
        userLoginApi().then(({accessToken, qrcode, sessionId, ts}) => {
          this.$cookie.set('access_token', accessToken, 7);
          this.$cookie.set('session_wzzy', sessionId, 7);
          this.$socket.open(sessionId).on('login', ({user}) => {
            alert('登陆成功!');
            this.changeSys({qrcode: false});
            this.getMine(user);
            this.$emit('success', user);
          });
          this.qrcode = `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${qrcode}`;
          this.timer = setTimeout(() => {
            this.timeout = true;
            this.$socket.close();
          }, 120000)
        })
      },
      reGetCode(){
        this.timeout = false;
        this.getCode();
      },
      clearCode(){
        this.qrcode = '';
        this.timeout = false;
        this.$socket.close();
        this.show = false;
        clearTimeout(this.timer);
      }
    },
  }
</script>

