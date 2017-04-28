<style lang="less" scoped>
  @import "welfare.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="!data.edit">编辑红包福利</span>
      <span v-if="data.edit">新增红包福利</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="data" label-width="140px" class="demo-data">
          <el-form-item label="福利名称：" prop="name">
            <el-input placeholder="请输入..."  :value="data.name" @input="(v)=>setData({name:v})"/>
          </el-form-item>
          <el-form-item label="福利数量：" prop="total">
            <el-input placeholder="请输入..."  :value="data.total" @input="(v)=>setData({total:v})">
              <template slot="append">份</template>
            </el-input>
          </el-form-item>
          <el-form-item label="福利类型：" prop="entry">
            <el-radio-group :value="data.entry" @input="(v)=>setData({entry:v})">
              <el-radio :label="0">所有用户可报名</el-radio>
              <el-radio :label="1">认证用户可报名</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="福利时间：" prop="startTime">
            <el-col :span="11">
              <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择开始时间..." :value="data.startTime" @input="(v)=>setData({startTime:v&&v.getTime()})" style="width: 100%;"/>
            </el-col>
            <el-col class="line" :span="2" style="text-align:center;">至</el-col>
            <el-col :span="11">
              <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择结束时间..." :value="data.endTime" @input="(v)=>setData({endTime:v&&v.getTime()})" style="width: 100%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="所需积分：" prop="score">
            <el-input placeholder="请输入..."  :value="data.score" @input="(v)=>setData({score:v})">
              <template slot="append">积分</template>
            </el-input>
          </el-form-item>
          <el-form-item label="人均兑换次数：" prop="time">
            <el-input placeholder="请输入..."  :value="data.time" @input="(v)=>setData({time:v})">
              <template slot="append">次/人</template>
            </el-input>
          </el-form-item>
          <el-form-item label="福利提供方：" prop="provider">
            <el-input placeholder="请输入..."  :value="data.provider" @input="(v)=>setData({provider:v})"/>
          </el-form-item>
          <el-form-item label="福利提供方链接：" prop="website">
            <el-input placeholder="请输入..."  :value="data.website" @input="(v)=>setData({website:v})"/>
          </el-form-item>
          <el-form-item label="兑换规则：" prop="rule">
            <quill-editor :content="decode(data.rule)" @input="setData({rule:encode($event)})" :options="editorOption"/>
          </el-form-item>
          <el-form-item label="微信红包祝福语：" prop="rule">
            <el-input placeholder="请输入..."  :value="data.wishing" @input="(v)=>setData({wishing:v})"/>
          </el-form-item>
          <div v-if="!data.edit">
            <el-form-item label="福利发布者：" prop="admin">
              <el-input placeholder="无"  :value="data.admin.name" readonly/>
            </el-form-item>
            <el-form-item label="发布时间：" prop="created">
              <el-input placeholder="无"  :value="date3Filter(data.created)" readonly/>
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
  import {number, required} from '../../../constant/rules'
  export default {
    data() {
      return {
        rules: {
          name: required('请输入福利名称...', {max: 15}),
          total: number('请输入福利数量...'),
          entry: number('请选择福利类型...'),
          startTime: number('请选择福利时间...'),
          score: number('请输入福利积分...', {min: 0}),
          time: number('请输入人均兑换次数...'),
          provider: required('请输入提供方...'),
          rule: required('请输入兑换规则...'),
          wishing: required('请输入红包祝福语...', {max: 10}),
        },
      }
    },
    components: {},
    computed: {...mapGetters(['data', 'editorOption'])},
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
