<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="!data.edit">编辑红包福利</span>
      <span v-if="data.edit">新增红包福利</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="data" label-width="140px" class="demo-data">
          <el-form-item label="福利名称" prop="name">
            <el-input :value="data.name" @input="(v)=>setData({name:v})"/>
          </el-form-item>
          <el-form-item label="福利数量" prop="total">
            <el-input :value="data.total" @input="(v)=>setData({total:v})"/>
          </el-form-item>
          <el-form-item label="福利类型" prop="name">
            <el-radio-group :value="data.entry" @input="(v)=>setData({entry:v})">
              <el-radio :label="0">所有用户可报名</el-radio>
              <el-radio :label="1">认证用户可报名</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="福利时间" prop="startTime">
            <el-col :span="11">
              <el-form-item prop="start">
                <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择开始日期" :value="data.startTime" @input="(v)=>setData({startTime:v&&v.getTime()})" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2" style="text-align:center;">-</el-col>
            <el-col :span="11">
              <el-form-item prop="end">
                <el-date-picker type="datetime" placeholder="选择结束日期" :value="data.endTime" @input="(v)=>setData({endTime:v&&v.getTime()})" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="所需积分" prop="score">
            <el-input :value="data.score" @input="(v)=>setData({score:v})"/>
          </el-form-item>
          <el-form-item label="人均兑换次数" prop="time">
            <el-input :value="data.time" @input="(v)=>setData({time:v})"/>
          </el-form-item>
          <el-form-item label="福利提供方" prop="provider">
            <el-input :value="data.provider" @input="(v)=>setData({provider:v})"/>
          </el-form-item>
          <el-form-item label="福利提供方链接" prop="website">
            <el-input :value="data.website" @input="(v)=>setData({website:v})"/>
          </el-form-item>
          <el-form-item label="兑换规则" prop="rule">
            <quill-editor ref="myTextEditor" :content="data.rule" @input="(v)=>setData({rule:v})" :config="{}"/>
          </el-form-item>
          <el-form-item label="微信红包祝福语" prop="rule">
            <el-input :value="data.wishing" @input="(v)=>setData({wishing:v})"/>
          </el-form-item>
          <div v-if="!data.edit">
            <el-form-item label="福利发布者" prop="admin">
              <el-input :value="data.admin.name" readonly/>
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
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
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
      ...mapActions(['getWelfareDetail', 'createWelfare', 'updateWelfare', 'clear', 'setData', 'go']),
      submitForm() {
        this.$refs.data.validate((valid) => {
          if (valid) {
            this.data.edit ? this.createWelfare() : this.updateWelfare();
          } else {
            return false;
          }
        })
      },
    },
    created () {
      this.setData({type: 2})
      this.getWelfareDetail()
    },
    destroyed () {
      this.clear('welfare')
    }
  }
</script>
