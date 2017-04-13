<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>用户列表</span>
      <a @click="go(['userList'])" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="昵称" prop="nickname">
            <el-input v-model="data.nickname" readonly></el-input>
          </el-form-item>
          <el-form-item label="用户积分" prop="score">
            <el-input v-model="data.score" readonly></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="data.sex">
              <el-radio :label="1" disabled>男</el-radio>
              <el-radio :label="2" disabled>女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生日" prop="birthday">
            <el-input v-model="data.birthday" readonly></el-input>
          </el-form-item>
          <el-form-item label="婚姻" prop="marriage">
            <el-radio-group v-model="data.marriage">
              <el-radio :label="0" disabled>未知</el-radio>
              <el-radio :label="1" disabled>已婚</el-radio>
              <el-radio :label="2" disabled>未婚</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="data.phone" readonly></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址" prop="email">
            <el-input v-model="data.email" readonly></el-input>
          </el-form-item>
          <el-form-item label="邮寄地址" prop="address">
            <el-input v-model="data.address" readonly></el-input>
          </el-form-item>
          <el-form-item label="注册时间" prop="created">
            <el-input v-model="data.created" readonly></el-input>
          </el-form-item>
          <el-form-item label="职工认证" prop="audit">
            <el-radio-group v-model="isaudit">
              <el-radio :label="true" disabled>是工会员工</el-radio>
              <el-radio :label="false" disabled>不是工会员工</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="data.name" readonly></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idCard">
            <el-input v-model="data.idCard" readonly></el-input>
          </el-form-item>
          <el-form-item label="所属单位" prop="depName">
            <el-input v-model="data.depName" readonly></el-input>
          </el-form-item>
          <el-form-item label="职位名称" prop="position">
            <el-input v-model="data.position" readonly></el-input>
          </el-form-item>
          <el-form-item label="冻结用户" prop="name">
            <el-radio-group v-model="data.deleted">
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
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
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
    methods: {...mapActions(['getUser', 'clear', 'go'])},
    created () {
      this.getUser();
    },
    destroyed () {
      this.clear()
    }
  }
</script>
