<style lang="less">
  @import "./poll.less";
</style>
<template>
  <div class="contentBox poll">
    <div class="contentBoxtitle">
      <span v-if="data.edit">添加问卷</span>
      <span v-if="!data.edit">编辑问卷</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <div v-show="step == 0">
            <el-form-item label="问卷标题：" prop="title">
              <el-input :value="data.title" @input="(v)=>setData({title:v})"/>
            </el-form-item>
            <el-form-item label="问卷描述：" prop="description">
              <el-input :value="data.description" @input="(v)=>setData({description:v})"/>
            </el-form-item>
            <el-form-item label="调查时间" required>
              <el-col :span="11">
                <el-form-item prop="start">
                  <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择开始时间..." :value="data.start" @input="(v)=>setData({start:v&&v.getTime()})" style="width: 100%;"/>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2" style="text-align:center;">至</el-col>
              <el-col :span="11">
                <el-form-item prop="end">
                  <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择结束时间..." :value="data.end" @input="(v)=>setData({end:v&&v.getTime()})" style="width: 100%;"/>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="积分奖励：" prop="score">
              <el-input :value="data.score" @input="(v)=>setData({score:v})">
                <template slot="append">积分</template>
              </el-input>
            </el-form-item>
            <el-form-item label="答题次数：" prop="time">
              <el-input :value="data.time" @input="(v)=>setData({time:v})">
                <template slot="append">次</template>
              </el-input>
            </el-form-item>
            <el-form-item label="同步显示：" prop="sync">
              <el-checkbox-group :value="JSON.parse(data.sync|| '[0,1]')" @input="(v)=>setData({sync:JSON.stringify(v)})">
                <el-checkbox :label="0">网站</el-checkbox>
                <el-checkbox :label="1">服务号</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="答题规则：" prop="rule">
              <quill-editor :content="decode(data.rule)" @input="setData({rule:encode($event)})" :config="editorOption"/>
            </el-form-item>
            <div v-if="!data.edit">
              <el-form-item label="发布者：" prop="admin">
                <el-input v-model="data.admin.name" readonly/>
              </el-form-item>
              <el-form-item label="发布时间：" prop="created">
                <el-input :value="date3Filter(data.created)" readonly/>
              </el-form-item>
            </div>
          </div>
          <div v-show="step == 1">
            <div v-for="(item,idx) in questions">
              <div class="tap"><span class="num">第 {{numFilter(idx+1)}} 项 --- {{item.title}}</span><span class="stop" @click="$set(item,'stop',!item.stop)">{{item.stop?'展开':'收起'}}</span><span class="del" @click="delQuestions(idx)">删除</span></div>
              <div v-show="!item.stop">
                <el-form-item label="问题题目：" :prop="'questions.'+idx+'.title'" :rules="[{ required: true, message: '请输入题目...',min:1,max:60}]">
                  <el-input :value="item.title" @input="(v)=>setQuestions('questions.'+idx+'.title',v)"/>
                </el-form-item>
                <el-form-item label="问题类型：" :prop="'questions.'+idx+'.type'" :rules="[{ required: true, message: '请选择问题类型...'}]">
                  <el-radio-group :value="item.type" @input="(v)=>setQuestions('questions.'+idx+'.type',v)">
                    <el-radio :label="1">单选</el-radio>
                    <el-radio :label="2">多选</el-radio>
                    <el-radio :label="3">问答</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="选项：" v-if="item.type == 1 || item.type == 2" :prop="'questions.'+idx+'.options'" :rules="[{ required: true, message: '请设置选项...',min:20}]">
                  <div v-for="(opt,index) in item.options" style="padding-bottom: 15px">
                    <el-input v-model="opt.name" @change="(v)=>setQuestions('questions.'+idx+'.options',JSON.stringify(item.options))">
                      <template slot="prepend">{{words(index)}}：</template>
                      <el-button slot="append" icon="delete" @click="delOptions(idx,index)"/>
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
  import {alert} from '../../../actions'
  import {required, number} from '../../../constant/rules'
  export default {
    data() {
      return {
        step: 0,
        questions: [],
        rules: {
          title: required('请输入投票选举标题...', {max: 60}),
          description: required('请输入投票选举描述...', {max: 200}),
          start: number('请选择投票选举开始时间...'),
          end: number('请选择投票选举结束时间...'),
          time: number('请输入投票选举人均投票次数...'),
          score: number('请输入投票选举奖励积分...'),
          sync: required('请选择同步...'),
          rule: required('请输入投票规则...'),
        },
      }
    },
    watch: {
      data(){
        this.setQuestions();
      }
    },
    computed: {...mapGetters(['action', 'data', 'editorOption'])},
    methods: {
      ...filter,
      ...mapActions(['getPoll', 'createPoll', 'updatePoll', 'upload', 'clear', 'setData', 'setListVal', 'delList', 'go']),
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          console.log(valid)
          if (valid) {
            this.data.edit ? this.createPoll() : this.updatePoll();
          } else {
            alert('*号字段必须填写', 'error');
            return false;
          }
        });
      },
      setQuestions(key, val){
        if (key && val) {
          this.setListVal([key, val]);
        }
        this.questions = this.data && this.data.questions ? this.data.questions.map((q) => ({...q, options: JSON.parse(q.options)})) : []
      },
      addOptions(idx, index){
        if (index >= 5) {
          return alert('配图最多为五张！', 'error')
        }
        this.questions[idx].options.push({name: ''});
        this.setQuestions('questions.' + idx + '.options', JSON.stringify(this.questions[idx].options));
      },
      delOptions(idx, index){
        this.questions[idx].options.splice(index, 1);
        this.setQuestions('questions.' + idx + '.options', JSON.stringify(this.questions[idx].options));
      },
      delQuestions(index){
        this.delList(['questions', index]);
        this.setQuestions();
      },
      addQuestions(){
        this.setListVal(['questions.' + this.questions.length, {name: '', options: '[]', type: 1}]);
        this.setQuestions();
      }
    },
    created () {
      this.setData({type: 0})
      this.getPoll()
    },
    destroyed () {
      this.clear('poll')
    }
  }
</script>
