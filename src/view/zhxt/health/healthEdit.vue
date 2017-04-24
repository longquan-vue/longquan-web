<style lang="less" scoped>
  @import "./health.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="data.edit">添加健身活动</span>
      <span v-if="!data.edit">编辑健身活动</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
          <el-form-item label="项目图标：" prop="picUrl">
            <div class="imgBox" v-for="(src,idx) in healthIcon">
              <img :src="src" class="img" :alt="'项目图标'+idx" @click="setData({picUrl:src})"/>
              <img src="/static/zhxt/ok.png" v-if="src == data.picUrl" class="activity"/>
            </div>
          </el-form-item>
          <el-form-item label="项目名称：" prop="name">
            <el-input :value="data.name" @input="(v)=>setData({name:v})"/>
          </el-form-item>
          <el-form-item label="项目类型：" prop="type">
            <el-radio-group :value="data.type" @input="(v)=>setData({type:v,total:data.total>3?data.total:v})">
              <el-radio :label="1">单人项目</el-radio>
              <el-radio :label="2">双人项目</el-radio>
              <el-radio :label="3">多人项目</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="多人项目人数上限：" prop="total" v-if="data.type == 3">
            <el-input :value="data.total" @input="(v)=>setData({total:v})"/>
          </el-form-item>
          <el-form-item label="预约报名所需积分：" prop="score">
            <el-input :value="data.score" @input="(v)=>setData({score:v})">
              <template slot="append">积分</template>
            </el-input>
          </el-form-item>
          <el-form-item label="开启日期：" prop="dates">
            <Calendar :value="data.dates" @on-change="(v)=>setData({dates:v})"/>
          </el-form-item>
          <el-form-item label="时间区间：" prop="starts">
            <el-row v-for="(time,idx) in times" :key="idx" style="margin-bottom: 0">
              <el-col :span="10">
                <el-time-select style="width: 100%" placeholder="请选择开始时间..." @input="(v)=>changeTime('starts.'+idx,v)" :value="time.start" :picker-options="{start:'08:30',step:'00:15',end:'22:30'}"/>
              </el-col>
              <el-col :span="2" style="text-align: center">至</el-col>
              <el-col :span="10">
                <el-time-select style="width: 100%" placeholder="请选择结束时间..." @input="(v)=>changeTime('ends.'+idx,v)" :value="time.end" :picker-options="{start:'08:30',step:'00:15',end:'22:30',minTime:time.start}"/>
              </el-col>
              <el-col :span="2" style="text-align: center"><img src="/static/zhxt/error.png" class="error" alt="close" @click="delTime(idx)"></el-col>
            </el-row>
            <img src="/static/zhxt/add.png" alt="add" @click="addTime">
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
  import Calendar from '../../../components/public/calender/Calender.vue'
  import filter from '../../../filters'
  import MyUpload from '../../../components/public/MyUpload.vue'
  import moment from 'moment'
  import {healthIcon} from '../../../constant'
  import {alert} from '../../../actions'
  import {number, required,array} from '../../../constant/rules'
  export default {
    data() {
      return {
        healthIcon,
        times: [],
        rules: {
          name: required('请填写项目名称...', {max: 10}),
          picUrl: required('请选择项目图标...'),
          type: number('请选择项目类型...'),
          total: number('请填写项目人数上限...'),
          score: number('请填写报名所需积分...'),
          dates: array(),
          starts: array(),
        },
      }
    },
    components: {MyUpload, Calendar},
    computed: {...mapGetters(['data']),},
    watch: {
      data(){
        this.setTimes()
      }
    },
    methods: {
      ...filter,
      ...mapActions(['gethealthDetail', 'createHealth', 'updateHealth', 'clear', 'setData', 'setListVal', 'delList', 'go']),
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.data.edit ? this.createHealth() : this.updateHealth();
          } else {
            alert('*号字段必须填写', 'error');
            return false;
          }
        });
      },
      setTimes(){
        this.times = this.data && this.data.starts ? this.data.starts.map((start, idx) => ({start: moment(start).format("HH:mm"), end: moment(this.data.ends[idx]).format("HH:mm")})) : [];
      },
      changeTime(key, val){
        this.setListVal([key, moment(`1970-01-01 ${val}`, 'YYYY-MM-DD HH:mm').format('x') * 1]);
        this.setTimes()
      },
      delTime(idx){
        this.delList(['starts', idx]);
        this.delList(['ends', idx]);
        this.setTimes()
      },
      addTime(){
        this.setListVal([`starts.${this.times.length}`, moment('1970-01-01 08:30', 'YYYY-MM-DD HH:mm').format('x') * 1]);
        this.setListVal([`ends.${this.times.length}`, moment('1970-01-01 22:30', 'YYYY-MM-DD HH:mm').format('x') * 1]);
        this.setTimes()
      }
    },
    created () {
      this.gethealthDetail()
    },
    destroyed () {
      this.clear('health')
    }
  }
</script>
