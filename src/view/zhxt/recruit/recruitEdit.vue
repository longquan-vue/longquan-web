<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="data.edit">添加招聘信息</span>
      <span v-if="!data.edit">编辑招聘信息</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="招聘标题" prop="name">
            <el-input :value="data.name" @input="(v)=>setData({name:v})"/>
          </el-form-item>
          <el-form-item label="招聘岗位" prop="job">
            <el-input :value="data.job" @input="(v)=>setData({job:v})"/>
          </el-form-item>
          <el-form-item label="招聘人数" prop="num">
            <el-input :value="data.num" @input="(v)=>setData({num:v})"/>
          </el-form-item>
          <el-form-item label="薪资待遇" prop="pay">
            <el-input :value="data.pay" @input="(v)=>setData({pay:v})"/>
          </el-form-item>
          <el-form-item label="招聘单位" prop="company">
            <el-input :value="data.company" @input="(v)=>setData({company:v})"/>
          </el-form-item>
          <el-form-item label="单位地址" prop="address">
            <el-input :value="data.address" @input="(v)=>setData({address:v})"/>
          </el-form-item>
          <el-form-item label="招聘时间" required>
            <el-col :span="11">
              <el-form-item prop="start">
                <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择开始时间" :value="data.start" @input="(v)=>setData({start:v&&v.getTime()})" style="width: 100%;"/>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2" style="text-align:center;">-</el-col>
            <el-col :span="11">
              <el-form-item prop="end">
                <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择结束时间" :value="data.end" @input="(v)=>setData({end:v&&v.getTime()})" style="width: 100%;"/>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-row v-for="(linkman,idx) in data.linkmans" :key="idx">
            <el-form-item label="联系人" prop="linkman">
              <el-input :value="linkman" @input="(v)=>setData({linkmans:v})"/>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
              <el-input :value="data.phones[idx]" @input="(v)=>setData({phones:v})"/>
            </el-form-item>
          </el-row>
          <el-form-item label="招聘要求" prop="claim">
            <quill-editor :content="data.claim" @input="(v)=>setData({claim:v})" :config="{}"/>
          </el-form-item>
          <el-form-item label="福利待遇" prop="treatment">
            <quill-editor :content="data.treatment" @input="(v)=>setData({treatment:v})" :config="{}"/>
          </el-form-item>
          <div v-if="!data.edit">
            <el-form-item label="发布者" prop="admin">
              <el-input v-model="data.admin.name" readonly/>
            </el-form-item>
            <el-form-item label="发布时间" prop="created">
              <el-input :value="date3Filter(data.created)" readonly/>
            </el-form-item>
          </div>
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
  import MyUpload from '../../../components/public/MyUpload.vue'
  export default {
    data() {
      return {
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'change'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'change'}
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
      MyUpload
    },
    computed: {
      ...mapGetters(['data']),
    },
    methods: {
      ...filter,
      ...mapActions(['getRecruitDetail', 'createRecruit', 'updateRecruit', 'setList', 'clear', 'setData', 'go']),
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.data.edit ? this.createRecruit() : this.updateRecruit();
          } else {
            this.$message.error('*号字段必须填写');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.ruleForm.resetFields();
      },
    },
    created () {
      this.getRecruitDetail()
    },
    destroyed () {
      this.clear('recruit')
    }
  }
</script>
