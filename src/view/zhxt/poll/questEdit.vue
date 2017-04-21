<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="data.edit">添加工会活动</span>
      <span v-if="!data.edit">编辑工会活动</span>
      <a @click="go(['activityList'])" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="活动配图">
            <MyUpload :files="data.files" :edit="data.edit"/>
          </el-form-item>
          <el-form-item label="活动名称" prop="name">
            <el-input :value="data.name" @input="(v)=>setData({name:v})"></el-input>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="start">
                <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择开始日期" :value="data.start" @input="(v)=>setData({start:v&&v.getTime()})" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2" style="text-align:center;">-</el-col>
            <el-col :span="11">
              <el-form-item prop="end">
                <el-date-picker type="datetime" placeholder="选择结束日期" :value="data.end" @input="(v)=>setData({end:v&&v.getTime()})" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="报名时间" required>
            <el-col :span="11">
              <el-form-item prop="entryStart">
                <el-date-picker type="datetime" placeholder="选择开始日期" :value="data.entryStart" @input="(v)=>setData({entryStart:v&&v.getTime()})" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2" style="text-align:center;">-</el-col>
            <el-col :span="11">
              <el-form-item prop="entryEnd">
                <el-date-picker type="datetime" placeholder="选择结束日期" :value="data.entryEnd" @input="(v)=>setData({entryEnd:v&&v.getTime()})" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="报名人数" prop="total">
            <el-input :value="data.total" @input="(v)=>setData({total:v})"></el-input>
          </el-form-item>
          <el-form-item label="报名权限" prop="entry">
            <el-radio-group :value="data.entry" @input="(v)=>setData({entry:v})">
              <el-radio :label="0">所有用户可报名</el-radio>
              <el-radio :label="1">认证用户可报名</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="报名所需积分" prop="score">
            <el-input :value="data.score" @input="(v)=>setData({score:v})"></el-input>
          </el-form-item>
          <el-form-item label="主办方" prop="sponsor">
            <el-input :value="data.sponsor" @input="(v)=>setData({sponsor:v})"></el-input>
          </el-form-item>
          <el-form-item label="协办方" prop="coSponsor">
            <el-input :value="data.coSponsor" @input="(v)=>setData({coSponsor:v})"></el-input>
          </el-form-item>
          <el-form-item label="承办方" prop="organizer">
            <el-input :value="data.organizer" @input="(v)=>setData({organizer:v})"></el-input>
          </el-form-item>
          <el-form-item label="活动地点" prop="place">
            <el-input :value="data.place" @input="(v)=>setData({place:v})"></el-input>
          </el-form-item>
          <el-form-item label="福利提供方链接" prop="website">
            <el-input :value="data.website" @input="(v)=>setData({website:v})"></el-input>
          </el-form-item>
          <el-form-item label="活动内容" prop="detail">
            <quill-editor ref="myTextEditor" :content="data.detail" @input="(v)=>setData({detail:v})" :config="{}"></quill-editor>
          </el-form-item>
          <el-form-item label="活动规则介绍" prop="rule">
            <quill-editor ref="myTextEditor" :content="data.rule" @input="(v)=>setData({rule:v})" :config="{}"></quill-editor>
          </el-form-item>
          <div v-if="!data.edit">
            <el-form-item label="福利发布者" prop="admin">
              <el-input v-model="data.admin.name" readonly></el-input>
            </el-form-item>
            <el-form-item label="发布时间" prop="created">
              <el-input :value="date3Filter(data.created)" readonly></el-input>
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
      MyUpload
    },
    computed: {
      ...mapGetters(['data']),
    },
    methods: {
      ...filter,
      ...mapActions(['getActivityDetail', 'createActivity', 'updateActivity', 'setList', 'clear', 'setData', 'go']),
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.data.edit ? this.createActivity() : this.updateActivity();
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
      this.getActivityDetail()
    },
    destroyed () {
      this.clear('activity')
    }
  }
</script>
