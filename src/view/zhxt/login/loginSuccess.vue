<template>
  <div class="login-wrap" flex items="center" justify="center">
    <div class="ms-login">
      <p style="text-align:center;"><img src="../../../../static/wx/success.png"></p>
      <el-button type="primary" @click="close">登录成功,点击关闭</el-button>
    </div>
  </div>
</template>
<script type="es6">
  export default {
    methods: {
      close(){
        wx.closeWindow();
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
</style>
