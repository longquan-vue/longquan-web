<style lang="less">
  @import "./poll.less";
</style>
<template>
  <div class="contentBox poll">
    <div class="contentBoxtitle">
      <span v-if="data.edit">添加问卷</span>
      <span v-if="!data.edit">编辑问卷</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <div v-if="step == 0">
            <el-form-item label="问卷标题" prop="name">
              <el-input :value="data.name" @input="(v)=>setData({name:v})"></el-input>
            </el-form-item>
            <el-form-item label="问卷描述" prop="desc">
              <el-input :value="data.desc" @input="(v)=>setData({desc:v})"></el-input>
            </el-form-item>
            <el-form-item label="调查时间" required>
              <el-col :span="11">
                <el-form-item prop="start">
                  <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择开始时间" :value="data.start" @input="(v)=>setData({start:v&&v.getTime()})" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2" style="text-align:center;">-</el-col>
              <el-col :span="11">
                <el-form-item prop="end">
                  <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择结束时间" :value="data.end" @input="(v)=>setData({end:v&&v.getTime()})" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="积分奖励" prop="score">
              <el-input :value="data.score" @input="(v)=>setData({score:v})"></el-input>
            </el-form-item>
            <el-form-item label="答题次数" prop="time">
              <el-input :value="data.time" @input="(v)=>setData({time:v})"></el-input>
            </el-form-item>
            <el-form-item label="同步显示" prop="sync">
              <el-checkbox-group :value="data.sync" @input="(v)=>setData({sync:v})">
                <el-checkbox label="0">网站</el-checkbox>
                <el-checkbox label="1">服务号</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="答题规则" prop="rule">
              <quill-editor :content="data.rule" @input="(v)=>setData({rule:v})" :config="{}"></quill-editor>
            </el-form-item>
            <div v-if="!data.edit">
              <el-form-item label="发布者" prop="admin">
                <el-input v-model="data.admin.name" readonly></el-input>
              </el-form-item>
              <el-form-item label="发布时间" prop="created">
                <el-input :value="date3Filter(data.created)" readonly></el-input>
              </el-form-item>
            </div>
          </div>
          <div v-if="step == 1">
            <div v-for="(item,idx) in questions">
              <div class="tap"><span class="num">第 {{numFilter(idx+1)}} 项 --- {{item.name}}</span><span class="stop" @click="$set(item,'stop',!item.stop)">{{item.stop?'展开':'收起'}}</span><span class="del" @click="delQuestions(idx)">删除</span></div>
              <div v-show="!item.stop">
                <el-form-item label="问题题目：" prop="name">
                  <el-input :value="item.name" @input="(v)=>setQuestions('questions.'+idx+'.name',v)"></el-input>
                </el-form-item>
                <el-form-item label="问题类型：" prop="type">
                  <el-radio-group :value="item.type" @input="(v)=>setQuestions('questions.'+idx+'.type',v)">
                    <el-radio :label="0">单选</el-radio>
                    <el-radio :label="1">多选</el-radio>
                    <el-radio :label="2">问答</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="选项：" v-if="item.type == 0 || item.type == 1">
                  <div v-for="(opt,index) in item.options" style="padding-bottom: 15px">
                    <el-input :value="opt.name" @input="(v)=>setQuestions('questions.'+idx+'.options.'+index+'.name',v)">
                      <template slot="prepend">{{['A','B','C','D','E','F','G','H','I','J','K','L'][index]}}：</template>
                      <el-button slot="append" icon="delete" @click="delOptions(idx,index)"></el-button>
                    </el-input>
                  </div>
                  <el-button type="primary" @click="addOptions(idx,item.options.length)" icon="plus">添加选项</el-button>
                </el-form-item>
              </div>
            </div>
            <el-form-item>
              <el-button type="primary" @click="addQuestions" icon="plus">添加问题</el-button>
            </el-form-item>
          </div>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="step = step-1" v-if="step > 0">上一步</el-button>
            <el-button type="primary" @click="submitForm" v-if="step == 1">保存</el-button>
            <el-button type="primary" @click="step = step+1" v-if="step < 1">下一步</el-button>
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
  import {alert} from '../../../actions'
  export default {
    data() {
      return {
        step: 0,
        questions: [],
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
    watch: {
      data(){
        this.setQuestions();
      }
    },
    components: {
      MyUpload
    },
    computed: {
      ...mapGetters(['action', 'data']),
    },
    methods: {
      ...filter,
      ...mapActions(['getPoll', 'createActivity', 'updateActivity', 'upload', 'clear', 'setData', 'setListVal', 'delList', 'go']),
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
      setQuestions(key, val){
        if (key && val) {
          this.setListVal([key, val]);
        }
        this.questions = this.data.questions.map((q) => ({...q}))
      },
      addOptions(idx, index){
        if (index >= 5) {
          return alert('配图最多为五张！', 'error')
        }
        this.setListVal(['questions.' + idx + '.options.' + index, {name: ''}]);
        this.setQuestions();
      },
      delOptions(idx, index){
        this.delList(['questions.' + idx + '.options', index]);
        this.setQuestions();
      },
      delQuestions(index){
        this.delList(['questions', index]);
        this.setQuestions();
      },
      addQuestions(){
        this.setListVal(['questions.' + this.questions.length, {name: '', options: [], type: 0}]);
        this.setQuestions();
      }
    },
    created () {
      this.getPoll()
    },
    destroyed () {
      this.clear('poll')
    }
  }
</script>
