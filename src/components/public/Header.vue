<template>
  <div class="header">
    <div class="logo"><img :src="setting.logo" alt="logo">后台管理系统</div>
    <div class="nav">
      <el-menu theme="dark" :default-active="onRoutesNav" class="el-menu-demo" mode="horizontal" router>
        <!--<el-menu-item index="/view/glpt/oa/count">企业号</el-menu-item>-->
        <!--<el-menu-item index="/view/glpt/recruitment">服务号</el-menu-item>-->
      </el-menu>
    </div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/logo.png">
                    {{login.name}}
                </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['login', 'setting']),
      onRoutesNav(){
        if (this.$route.path.indexOf('oa') > 0) {
          return '/view/oa/count';
        } else {
          return '/view/recruitment';
        }

      }
    },
    methods: {
      ...mapActions(['getMine', 'getSetting', 'go', 'loginOut']),
      handleCommand(command) {
        if (command == 'loginout') {
          this.loginOut();
        }
      }
    },
    created () {
      this.getSetting();
      this.getMine();
    },
  }
</script>
<style lang="less" scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
  }

  .header .nav {
    float: left;
  }

  .header .nav .el-menu--horizontal .el-menu-item {
    height: 70px;
    line-height: 70px;
  }

  .header .logo {
    float: left;
    width: 250px;
    text-align: center;
  }

  .header .logo img {
    width: 48px;
    height: 48px;
    vertical-align: middle;
    margin-right: 15px;
  }

  .user-info {
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff;
  }

  .user-info .el-dropdown-link {
    position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
  }

  .user-info .user-logo {
    position: absolute;
    left: 0;
    top: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .el-dropdown-menu__item {
    text-align: center;
  }
</style>
