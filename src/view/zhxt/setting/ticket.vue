<style lang="less" scoped>
  @import "./style.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>二维码管理</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <el-form :model="setting" ref="setting" label-width="0" class="demo-ruleForm ticket">
      <el-row>
        <el-col :span="12">
          <el-form-item prop="wechatTicket" :rules="[{required:true,message:'微信公众号二维码不能为空'}]">
            <Avatar :success="(wechatTicket)=>changeSys({wechatTicket})" :url="setting.wechatTicket"/>
            <div class="av_tip">微信公众号二维码，格式为JPG/PNG</div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="blogTicket" :rules="[{required:true,message:'微博二维码不能为空'}]">
            <Avatar :success="(blogTicket)=>changeSys({blogTicket})" :url="setting.blogTicket"/>
            <div class="av_tip">新浪微博二维码，格式为JPG/PNG</div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div style="text-align: center">
      <el-button type="primary" @click="submitForm">提交</el-button>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import {alert} from '../../../actions'
  import Avatar from '../../../components/public/Avatar.vue'
  export default{
    components: {Avatar},
    computed: {...mapGetters(['setting'])},
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go']),
      submitForm() {
        this.$refs.setting.validate((valid) => valid ? this.saveSys() : false)
      },
    },
    created () {
      this.getSetting();
    },
  }
</script>
