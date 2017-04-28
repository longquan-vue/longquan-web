<style lang="less" scoped>
  @import "echo.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="data.edit">发布回音壁</span>
      <span v-if="!data.edit">回答回音壁</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="form" label-width="120px" class="demo-ruleForm">
          <el-form-item label="标题：" prop="title">
            <el-input placeholder="请输入..."  :value="data.title" @input="(v)=>setData({title:v})"/>
          </el-form-item>
          <el-form-item label="问题描述：" prop="question">
            <quill-editor :content="decode(data.question)" @input="setData({question:encode($event)})" :options="editorOption"/>
          </el-form-item>
          <el-form-item label="答案：" prop="answer">
            <quill-editor :content="decode(data.answer)" @input="setData({answer:encode($event)})" :options="editorOption"/>
          </el-form-item>
          <el-form-item label="附件：" prop="files">
            <MyUpload :files="data.files" type="text" :edit="data.edit"/>
          </el-form-item>
          <div v-if="!data.edit">
            <el-form-item label="答题者：" prop="replier">
              <el-input placeholder="无"  v-model="data.replier" readonly/>
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
  import MyUpload from '../../../components/public/MyUpload.vue'
  import {alert} from '../../../actions'
  import {number, required, array} from '../../../constant/rules'
  export default {
    data() {
      return {
        rules: {
          title: required('请填写标题...', {min: 1, max: 30}),
        },
      }
    },
    components: {MyUpload},
    computed: {...mapGetters(['data', 'editorOption'])},
    methods: {
      ...filter,
      ...mapActions(['getEcho', 'createEcho', 'updateEcho', 'clear', 'setData', 'go']),
      submitForm(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.data.edit ? this.createEcho() : this.updateEcho();
          } else {
            alert('*号字段必须填写!', 'error');
            return false;
          }
        });
      },
    },
    created () {
      this.getEcho()
    },
    destroyed () {
      this.clear('echo')
    }
  }
</script>
