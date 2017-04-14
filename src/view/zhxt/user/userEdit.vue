<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>用户详情</span>
      <a @click="go(['userList'])" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="昵称" prop="nickname" @input="(v)=>setData({nickname:v})">
            <el-input :value="data.nickname" readonly></el-input>
          </el-form-item>
          <el-form-item label="用户积分" prop="score">
            <el-input :value="data.score" readonly @input="(v)=>setData({score:v})"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group :value="data.sex" @input="(v)=>setData({sex:v})">
              <el-radio :label="1" disabled>男</el-radio>
              <el-radio :label="2" disabled>女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生日" prop="birthday">
            <el-date-picker type="date" placeholder="请选择..." :value="data.birthday" disabled @input="(v)=>setData({birthday:v&&v.getTime()})"></el-date-picker>
          </el-form-item>
          <el-form-item label="婚姻" prop="marriage">
            <el-radio-group :value="data.marriage" @input="(v)=>setData({marriage:v})">
              <el-radio :label="0" disabled>未知</el-radio>
              <el-radio :label="1" disabled>已婚</el-radio>
              <el-radio :label="2" disabled>未婚</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input :value="data.phone" readonly @input="(v)=>setData({phone:v})"></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址" prop="email">
            <el-input :value="data.email" readonly @input="(v)=>setData({email:v})"></el-input>
          </el-form-item>
          <el-form-item label="邮寄地址" prop="address">
            <el-input :value="data.address" readonly @input="(v)=>setData({address:v})"></el-input>
          </el-form-item>
          <el-form-item label="注册时间" prop="created">
            <el-input :value="data.created" readonly @input="(v)=>setData({created:v})"></el-input>
          </el-form-item>
          <el-form-item label="职工认证" prop="audit">
            <el-radio-group :value="isaudit" @input="(v)=>setData({audit:v})">
              <el-radio :label="true" disabled>是工会员工</el-radio>
              <el-radio :label="false" disabled>不是工会员工</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input :value="data.name" readonly @input="(v)=>setData({name:v})"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idCard">
            <el-input :value="data.idCard" readonly @input="(v)=>setData({idCard:v})"></el-input>
          </el-form-item>
          <el-form-item label="所属单位" prop="depName">
            <el-input :value="data.depName" readonly @input="(v)=>setData({depName:v})"></el-input>
          </el-form-item>
          <el-form-item label="职位名称" prop="position">
            <el-input :value="data.position" readonly @input="(v)=>setData({position:v})"></el-input>
          </el-form-item>
          <el-form-item label="冻结用户" prop="deleted">
            <el-radio-group :value="data.deleted" @input="(v)=>setData({deleted:v})">
              <el-radio :label="1" disabled>是</el-radio>
              <el-radio :label="0" disabled>否</el-radio>
            </el-radio-group>
          </el-form-item>

          <!--<el-form-item>-->
          <!--<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>-->
          <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
          <!--</el-form-item>-->
        </el-form>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filter from '../../../filters'
  export default {
    data() {
      return {
        ruleForm: {
          name: '钟成',
        }
      }
    },
    computed: {
      ...mapGetters(['data']),
      isaudit(){
        return this.data.audit == 2;
      }
    },
    methods: {
      ...mapActions(['getUser','setData', 'clear', 'go']),
      ...filter
    },
    created () {
      this.getUser();
    },
    destroyed () {
      this.clear()
    }
  }
</script>
