<template>
  <div class="wzzy-tab">
    <a class="ask-ques" @click="showDialog">我要咨询</a>
    <el-dialog v-model="dialogVisible" size="tiny" class="wzzy-dialog" :show-close="false">
      <span slot="title" class="wzzy-dialog-header">
        我要咨询
        <img src="/static/wzzy/wzzy-close.png" @click="dialogVisible=false">
      </span>
      <div class="my-ask">
        <p>提示：遵守国家有关法律、法规，尊重网上道德，承担一切因您的行为而直接或间接引起的法律责任。龙泉驿区总工会拥有管理笔名和留言的一切权利。</p>
        <div class="my-ask-box">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="echo_question">
            <el-form-item label="标题" prop="title">
              <el-input type="textarea" v-model="ruleForm.title" :rows="2"></el-input>
            </el-form-item>
            <el-form-item label="咨询内容" prop="question">
              <quill-editor :content="decode(ruleForm.question)" @input="ruleForm.question = encode($event)" :options="editorOption"/>
            </el-form-item>
          </el-form>
          <a class="formSubmit" @click="submitForm()">提交</a>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<style lang="less">
  .ask-ques {
    display: block;width: 100%;height: 40px;border-radius: 4px;cursor: pointer;margin-bottom: 20px;color: #BC0000;font-size: 16px;line-height: 40px;text-align: center;border: 1px solid #BC0000;
    -webkit-transition: all 0.3s;-moz-transition: all 0.3s;-ms-transition: all 0.3s;-o-transition: all 0.3s;transition: all 0.3s;
    &:hover {color: #fff;background-color: #BC0000;}
  }
  .my-ask {
    &>p {font-size: 14px;color: #818181;padding-bottom: 15px;border-bottom: 1px solid #E7E7E7;}
    .my-ask-box {padding-top: 20px;}
  }
  .formSubmit {width: 250px;height: 40px;display: block;margin: 20px auto;background-color: #E00404;text-align: center;line-height: 40px;color: #ffffff;font-size: 16px;border-radius: 4px;cursor: pointer;}
  .echo_question {
    .ql-container {height: 3rem;  }
  }
</style>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filters from '../../../filters'
  import {confirm} from '../../../actions'
  export default{
    data(){
      return {
        dialogVisible: false,
        ruleForm: {
          title: '',
          question: ''
        },
        rules: {
          title: [
            {required: true, message: '请填写咨询标题'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符'}
          ],
          question: [
            {required: true, message: '请填写咨询内容'},
            {min: 3, max: 200, message: '长度在 3 到 200 个字符'}
          ]
        }
      }
    },
    computed: {
      ...mapGetters(['login', 'editorOption']),
    },
    methods: {
      ...mapActions(['changeSys', 'createEcho']),
      ...filters,
      showDialog(){
        if (this.login && this.login.id) {
          this.dialogVisible = true;
        } else {
          confirm('您还未登陆，无法报名。请先登录...', 'warning').then(() => this.changeSys({qrcode: true}))
        }
      },
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.createEcho(this.ruleForm)
          } else {
            return false;
          }
        });
      },
    },
  }
</script>
