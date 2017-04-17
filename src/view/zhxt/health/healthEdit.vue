<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="data.edit">添加健身活动</span>
      <span v-if="!data.edit">编辑健身活动</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
          <el-form-item label="项目图标：">
            <MyUpload :files="data.files" :edit="data.edit"/>
          </el-form-item>
          <el-form-item label="项目名称：" prop="name">
            <el-input :value="data.name" @input="(v)=>setData({name:v})"></el-input>
          </el-form-item>
          <el-form-item label="项目类型：" required>
            <el-input :value="data.name" @input="(v)=>setData({name:v})"></el-input>
          </el-form-item>
          <el-form-item label="多人项目人数上限：" required>
            <el-input :value="data.name" @input="(v)=>setData({name:v})"></el-input>
          </el-form-item>
          <el-form-item label="预约报名所需积分：" prop="total">
            <el-input :value="data.total" @input="(v)=>setData({total:v})"></el-input>
          </el-form-item>
          <el-form-item label="开启日期：" prop="entry">
            <InlineCalendar></InlineCalendar>
          </el-form-item>
          <el-form-item label="时间区间：" prop="score">
            <el-input :value="data.score" @input="(v)=>setData({score:v})"></el-input>
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
  import {InlineCalendar} from 'vux'
  import filter from '../../../filters'
  import MyUpload from '../../../components/public/MyUpload.vue'
  export default {
    data() {
      return {
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'change'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change'}
          ],
          start: [
            {type: 'number', required: true, message: '请选择开始日期', trigger: 'change'}
          ],
          end: [
            {type: 'number', required: true, message: '请选择开始日期', trigger: 'change'}
          ],
          entryStart: [
            {type: 'number', required: true, message: '请选择开始日期', trigger: 'change'}
          ],
          entryEnd: [
            {type: 'number', required: true, message: '请选择开始日期', trigger: 'change'}
          ],
        },
      }
    },
    components: {
      MyUpload, InlineCalendar
    },
    computed: {
      ...mapGetters(['data']),
    },
    methods: {
      ...filter,
      ...mapActions(['gethealthDetail', 'setList', 'clear', 'setData', 'go']),
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.createActivity();
          } else {
            this.$message.error('*号字段必须填写');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
    created () {
      this.gethealthDetail()
    },
    destroyed () {
      this.clear('health')
    }
  }
</script>
