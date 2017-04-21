<style lang="less">
  @import "./poll.less";
</style>
<template>
  <div class="contentBox poll">
    <div class="contentBoxtitle">
      <span v-if="data.edit">添加投票选举</span>
      <span v-if="!data.edit">编辑投票选举</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <div v-if="step == 0">
            <el-form-item label="投票选举标题" prop="title">
              <el-input :value="data.title" @input="(v)=>setData({title:v})"></el-input>
            </el-form-item>
            <el-form-item label="投票选举描述" prop="desc">
              <el-input :value="data.description" @input="(v)=>setData({description:v})"></el-input>
            </el-form-item>
            <el-form-item label="投票选举时间" required>
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
            <el-form-item label="人均投票次数" prop="time">
              <el-input :value="data.time" @input="(v)=>setData({time:v})"></el-input>
            </el-form-item>
            <el-form-item label="是否重复投票" prop="repetition">
              <el-radio-group :value="data.repetition" @input="(v)=>setData({repetition:v})">
                <el-radio :label="0">单日可以重复投票给同一对象</el-radio>
                <el-radio :label="1">单日不能重复投票给同一对象</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="连续投票天数" prop="days">
              <el-input :value="data.days" @input="(v)=>setData({days:v})"></el-input>
            </el-form-item>
            <el-form-item label="同步显示" prop="sync">
              <el-checkbox-group :value="JSON.parse(data.sync)" @input="(v)=>setData({sync:JSON.stringify(v)})">
                <el-checkbox label="0">网站</el-checkbox>
                <el-checkbox label="1">服务号</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="投票规则" prop="rule">
              <quill-editor :content="data.rule" @input="(v)=>setData({rule:v})" :config="{}"></quill-editor>
            </el-form-item>
            <div v-if="!data.edit">
              <el-form-item label="福利发布者" prop="admin">
                <el-input v-model="data.admin.name" readonly></el-input>
              </el-form-item>
              <el-form-item label="发布时间" prop="created">
                <el-input :value="date3Filter(data.created)" readonly></el-input>
              </el-form-item>
            </div>
          </div>
          <div v-if="step == 1">
            <div v-for="(item,idx) in questions">
              <div class="tap"><span class="num">第 {{1+idx}} 项 --- {{item.name}}</span><span class="stop" @click="$set(item,'stop',!item.stop)">{{item.stop?'展开':'收起'}}</span><span class="del" @click="delQuestions(idx)">删除</span></div>
              <div v-show="!item.stop">
                <el-form-item label="标题：" prop="title">
                  <el-input :value="item.title" @input="(v)=>setQuestions('questions.'+idx+'.title',v)"></el-input>
                </el-form-item>
                <el-form-item label="配图：">
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
                        <el-input :value="opt.description" class="description" style="top: 36px;" type="textarea" :rows="7" @input="(v)=>setQuestions('questions.'+idx+'.files.'+index+'.description',v)"></el-input>
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
  import MyUpload from '../../../components/public/MyUpload.vue'
  import {alert} from '../../../actions'
  export default {
    data() {
      return {
        step: 0,
        questions: [],
        rules: {
          title: [
            {required: true, message: '请输入活动名称', trigger: 'change'},
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
      ...mapActions(['getPoll', 'createPoll', 'updatePoll', 'upload', 'clear', 'setData', 'setListVal', 'delList', 'go']),
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.data.edit ? this.createPoll() : this.updatePoll();
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
