<style lang="less" scoped>
  @import "user.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>用户详情</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" ref="data" :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="昵称：" prop="nickname">
            <el-input :value="data.nickname" @input="(v)=>setData({nickname:v})"/>
          </el-form-item>
          <el-form-item label="用户积分：" prop="score">
            <el-input :value="data.score" @input="(v)=>setData({score:v})"/>
          </el-form-item>
          <el-form-item label="性别：" prop="sex">
            <el-radio-group :value="data.sex" @input="(v)=>setData({sex:v})">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生日：" prop="birthday">
            <el-date-picker type="date" placeholder="请选择出生日期..." :value="data.birthday" format="yyyy-MM-dd" @input="(v)=>setData({birthday:v&&v.getTime()})"/>
          </el-form-item>
          <el-form-item label="婚姻：" prop="marriage">
            <el-radio-group :value="data.marriage" @input="(v)=>setData({marriage:v})">
              <el-radio :label="0">未知</el-radio>
              <el-radio :label="1">已婚</el-radio>
              <el-radio :label="2">未婚</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系电话：" prop="phone">
            <el-input :value="data.phone" @input="(v)=>setData({phone:v})"/>
          </el-form-item>
          <el-form-item label="邮箱地址：" prop="email">
            <el-input :value="data.email" @input="(v)=>setData({email:v})"/>
          </el-form-item>
          <el-form-item label="邮寄地址：" prop="address">
            <el-input :value="data.address" @input="(v)=>setData({address:v})"/>
          </el-form-item>
          <el-form-item label="注册时间：">
            <el-input :value="data.created" readonly/>
          </el-form-item>
          <el-form-item label="职工认证：" prop="audit">
            <el-radio-group :value="isAudit" @input="(v)=>setData({audit:v})">
              <el-radio :label="2">是工会员工</el-radio>
              <el-radio :label="3">不是工会员工</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="姓名：" prop="name">
            <el-input :value="data.name" @input="(v)=>setData({name:v})"/>
          </el-form-item>
          <el-form-item label="身份证号：" prop="idCard">
            <el-input :value="data.idCard" @input="(v)=>setData({idCard:v})"/>
          </el-form-item>
          <el-form-item label="所属单位：" prop="depName">
            <el-input :value="data.depName" @input="(v)=>setData({depName:v})"/>
          </el-form-item>
          <el-form-item label="职位名称：" prop="position">
            <el-input :value="data.position" @input="(v)=>setData({position:v})"/>
          </el-form-item>
          <el-form-item label="冻结用户：" prop="deleted">
            <el-radio-group :value="data.deleted" @input="(v)=>setData({deleted:v})">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="submitForm">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filter from '../../../filters'
  import {required, number} from  '../../../constant/rules'
  export default {
    data() {
      return {
        rules: {}
      }
    },
    computed: {
      ...mapGetters(['data']),
      isAudit(){
        return this.data.audit == 2 ? 2 : 3;
      }
    },
    methods: {
      ...mapActions(['getUser', 'updateUser', 'setData', 'clear', 'go']),
      ...filter,
      submitForm() {
        this.$refs.data.validate((valid) => valid ? this.updateUser() : false)
      },
    },
    created () {
      this.getUser();
    },
    destroyed () {
      this.clear()
    }
  }
</script>
