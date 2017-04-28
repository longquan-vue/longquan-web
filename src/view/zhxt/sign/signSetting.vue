<style lang="less" scoped>
  @import "sign.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>签到设置</span></div>
    <div class="contentBoxCont">
      <el-row>
        <el-col :span="12">
          <el-form :model="setting" ref="setting" label-width="130px" class="demo-ruleForm">
            <el-form-item label="基础签到积分：" prop="sign" :rules="[{required:true,message:'积分不能为空',min:1},{type:'number',message:'积分必须为数字值'}]">
              <el-input placeholder="请输入..."  type="age" :value.number="setting.sign" auto-complete="off" @input="(v)=>changeSys({sign:v*1})" style="width:90%;"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm">提交</el-button>
              <el-button @click="go()">取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <p style="line-height:36px;color:#999;">提示:系统默认积分为10分,签到积分规则为:连续签到以基础积分为基数进行递增，一周一个轮回</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  export default{
    computed: {...mapGetters(['setting'])},
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go']),
      submitForm() {
        this.$refs.setting.validate((valid) => valid ? this.saveSys() : false);
      },
    },
    created () {
      this.getSetting();
    },
  }
</script>
