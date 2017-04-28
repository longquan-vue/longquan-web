<style lang="less">
  @import "./poll.less";
</style>
<template>
  <div class="contentBox poll">
    <div class="contentBoxtitle">
      <span v-if="data.edit">添加投票选举</span>
      <span v-if="!data.edit">编辑投票选举</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
          <div v-show="step == 0">
            <el-form-item label="投票选举标题：" prop="title">
              <el-input placeholder="请输入..."  :value="data.title" @input="(v)=>setData({title:v})"/>
            </el-form-item>
            <el-form-item label="投票选举描述：" prop="description">
              <el-input placeholder="请输入..."  :value="data.description" @input="(v)=>setData({description:v})"/>
            </el-form-item>
            <el-form-item label="投票选举时间：" required>
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
              <el-input placeholder="请输入..."  :value="data.score" @input="(v)=>setData({score:v})">
                <template slot="append">积分/天</template>
              </el-input>
            </el-form-item>
            <el-form-item label="人均投票次数：" prop="time">
              <el-input placeholder="请输入..."  :value="data.time" @input="(v)=>setData({time:v})">
                <template slot="append">次/天/人</template>
              </el-input>
            </el-form-item>
            <el-form-item label="是否重复投票：" prop="repetition">
              <el-radio-group :value="data.repetition" @input="(v)=>setData({repetition:v})">
                <el-radio :label="0">单日可以重复投票给同一对象</el-radio>
                <el-radio :label="1">单日不能重复投票给同一对象</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="连续投票天数：" prop="days">
              <el-input placeholder="请输入..."  :value="data.days" @input="(v)=>setData({days:v})">
                <template slot="append">天</template>
              </el-input>
            </el-form-item>
            <el-form-item label="同步显示：" prop="sync">
              <el-checkbox-group :value="JSON.parse(data.sync||'[0,1]')" @input="(v)=>setData({sync:JSON.stringify(v)})">
                <el-checkbox :label="0">网站</el-checkbox>
                <el-checkbox :label="1">服务号</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="投票规则：" prop="rule">
              <quill-editor :content="decode(data.rule)" @input="setData({rule:encode($event)})" :options="editorOption"/>
            </el-form-item>
            <div v-if="!data.edit">
              <el-form-item label="福利发布者：" prop="admin">
                <el-input placeholder="无"  v-model="data.admin.name" readonly/>
              </el-form-item>
              <el-form-item label="发布时间：" prop="created">
                <el-input placeholder="无"  :value="date3Filter(data.created)" readonly/>
              </el-form-item>
            </div>
          </div>
          <div v-show="step == 1">
            <div v-for="(item,idx) in questions">
              <div class="tap"><span class="num">第 {{1+idx}} 项 --- {{item.name}}</span><span class="stop" @click="$set(item,'stop',!item.stop)">{{item.stop?'展开':'收起'}}</span><span class="del" @click="delQuestions(idx)">删除</span></div>
              <div v-show="!item.stop">
                <el-form-item label="标题：" :prop="'questions.'+idx+'.title'" :rules="{ required: true, message: '请输入标题...',min:1,max:10}">
                  <el-input placeholder="请输入..."  :value="item.title" @input="(v)=>setQuestions('questions.'+idx+'.title',v)"/>
                </el-form-item>
                <el-form-item label="配图：" :prop="'questions.'+idx+'.files'" :rules="{ required: true,type: 'array', message: '请上传配图...',min:1,max:5}">
                  <div v-for="(opt,index) in item.files" style="padding-bottom: 15px;position: relative;">
                    <div style="position: absolute;right: 15px;cursor: pointer;z-index: 2;" @click="delOptions(idx,index)">删除</div>
                    <el-row class="avatar_box">
                      <el-upload
                        class="avatar-uploader"
                        :action="action"
                        :show-file-list="false"
                        :http-request="upload"
                        :on-success="(file)=>setQuestions('questions.'+idx+'.files.'+index,file)">
                        <img v-if="opt.url" :src="opt.url" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                      <div class="desc">说明：
                        <el-input placeholder="请输入..."  :value="opt.description" class="description" style="top: 36px;" type="textarea" :rows="7" @input="(v)=>setQuestions('questions.'+idx+'.files.'+index+'.description',v)"/>
                      </div>
                    </el-row>
                  </div>
                  <el-button type="primary" @click="addOptions(idx,item.files.length)" icon="plus">添加配图</el-button>
                </el-form-item>
              </div>
            </div>
            <el-form-item>
              <el-button type="primary" @click="addQuestions" icon="plus">添加投票项</el-button>
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
          repetition: required('请选择是否重复投票...'),
          days: number('请输入连续投票天数...'),
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
    components: {},
    computed: {...mapGetters(['action', 'data', 'editorOption'])},
    methods: {
      ...filter,
      ...mapActions(['getPoll', 'createPoll', 'updatePoll', 'upload', 'clear', 'setData', 'setListVal', 'delList', 'go']),
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
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
        this.questions = this.data && this.data.questions ? this.data.questions.map((q) => ({...q})) : []
      },
      addOptions(idx, index){
        if (index >= 5) {
          return alert('配图最多为五张！', 'error')
        }
        this.setListVal(['questions.' + idx + '.files.' + index, {url: '', description: ''}]);
        this.setQuestions();
      },
      delOptions(idx, index){
        this.delList(['questions.' + idx + '.files', index]);
        this.setQuestions();
      },
      delQuestions(index){
        this.delList(['questions', index]);
        this.setQuestions();
      },
      addQuestions(){
        this.setListVal(['questions.' + this.questions.length, {name: '', files: [], type: 0}]);
        this.setQuestions();
      }
    },
    created () {
      this.setData({type: 1})
      this.getPoll()
    },
    destroyed () {
      this.clear('poll')
    }
  }
</script>
