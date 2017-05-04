<style lang="less">
  .wzzy-recruitDetail {
  .wzzy-recruitDetail-head {
    overflow: hidden;    padding: 20px 0;    border-bottom: 1px solid #E7E7E7;    line-height: 40px;
  span {    font-size: 22px;    color: #333;  }

  a {
    float: right;    width: 150px;    height: 40px;    background-color: #FF7E00;    color: #ffffff;
    font-size: 16px;    border-radius: 4px;    text-align: center;    cursor: pointer;
  }

  }
  .wzzy-recruitDetail-cont {

  li {
    padding: 20px 0;
    border-bottom: 1px solid #E7E7E7;
    font-size: 16px;
    overflow: hidden;

  .labelMsg {
    color: #8a8a8a;
    float: left;
    width: 10%;
  }

  .labelCont {
    color: #333;
    float: left;
    width: 85%;
  }

  }
  }
  }
  .formSubmit {
    width: 200px;
    height: 40px;
    display: block;
    margin: 20px auto;
    background-color: #E00404;
    text-align: center;
    line-height: 40px;
    color: #ffffff;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  .wzzy-dialog {

  .el-dialog__header {
    padding: 0;
  }

  .el-dialog--tiny {
    width: 700px;
  }

  .wzzy-dialog-header {
    text-align: center;
    display: block;
    font-size: 22px;
    color: #ff7e00;
    background-color: #FFE8D2;
    height: 70px;
    line-height: 70px;
    position: relative;

  img {
    position: absolute;
    right: 20px;
    top: 26px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;

  &:hover {
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }

  }
  }
  }
</style>
<template>
  <div class="wzzyLaborUnion" style="padding-top:20px;">
    <div class="pagewrap">
      <div class="wzzy-content">
        <div class="grid-left">
          <div class="the-place" style="">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/view/wzzy/service/1/0' }">招聘信息</el-breadcrumb-item>
              <el-breadcrumb-item>详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="wzzy-sub-content">
            <div class="wzzy-recruitDetail">
              <div class="wzzy-recruitDetail-head">
                <span>{{data.name}}</span>
                <a @click="openSign">报名</a>
              </div>
              <ul class="wzzy-recruitDetail-cont">
                <li>
                  <div class="labelMsg">招聘岗位：</div>
                  <div class="labelCont">{{data.job}}</div>
                </li>
                <li>
                  <div class="labelMsg">招聘人数：</div>
                  <div class="labelCont">{{data.num}} 人</div>
                </li>
                <li>
                  <div class="labelMsg">薪资待遇：</div>
                  <div class="labelCont">{{data.pay}} 元/月</div>
                </li>
                <li>
                  <div class="labelMsg">招聘单位：</div>
                  <div class="labelCont">{{data.company}}</div>
                </li>
                <li>
                  <div class="labelMsg">单位地址：</div>
                  <div class="labelCont">{{data.address}}</div>
                </li>
                <li>
                  <div class="labelMsg">招聘时间：</div>
                  <div class="labelCont">{{date4Filter(data)}}</div>
                </li>
                <li>
                  <div class="labelMsg">招聘要求：</div>
                  <div class="labelCont" v-html="decode(data.claim)"></div>
                </li>
                <li>
                  <div class="labelMsg">福利待遇：</div>
                  <div class="labelCont" v-html="decode(data.treatment)"></div>
                </li>
                <div v-for="(link,index) in data.linkmans">
                  <li>
                    <div class="labelMsg">联系人：</div>
                    <div class="labelCont">{{link}}</div>
                  </li>
                  <li>
                    <div class="labelMsg">联系电话：</div>
                    <div class="labelCont">{{data.phones[index]}}</div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" size="tiny" class="wzzy-dialog" :show-close="false">
        <span slot="title" class="wzzy-dialog-header">
            招聘报名表
            <img src="../../../../static/wzzy/wzzy-close.png" @click="dialogVisible=false">
        </span>
      <el-form :model="login" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="姓名：" prop="name">
          <el-input :value="login.name" @input="(v)=>getMine({name:v})"></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="sex">
          <el-radio-group :value="login.sex" @input="(v)=>getMine({sex:v})">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生年月：" prop="birthday">
          <el-date-picker type="date" format="yyyy-MM-dd" placeholder="选择出生日期..." :value="login.birthday" @input="(v)=>getMine({birthday:v&&v.getTime()})" style="width: 100%;"/>
        </el-form-item>
        <el-form-item label="婚姻：" prop="marriage">
          <el-radio-group :value="login.marriage" @input="(v)=>getMine({marriage:v})">
            <el-radio :label="1">已婚</el-radio>
            <el-radio :label="2">未婚</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="籍贯：" prop="province">
          <el-input :value="login.province" style="width: 49%" @input="(v)=>getMine({province:v})">
            <template slot="append">省</template>
          </el-input>
          <el-input :value="login.city" style="width: 49%" @input="(v)=>getMine({city:v})">
            <template slot="append">市</template>
          </el-input>
        </el-form-item>
        <el-form-item label="工作经验：" prop="exp">
          <el-radio-group :value="login.exp" @input="(v)=>getMine({exp:v})">
            <el-radio :label="1">有</el-radio>
            <el-radio :label="0">无</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="联系电话：" prop="phone">
          <el-input :value="login.phone" placeholder="请输入联系电话..." @input="(v)=>getMine({phone:v})"></el-input>
        </el-form-item>
      </el-form>
      <a class="formSubmit" @click="submitForm()">提交</a>
    </el-dialog>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filters from '../../../filters'
  import {confirm} from '../../../actions'
  export default{
    data(){
      return {
        dialogVisible: false,
        rules: {
          name: [
            {required: true, message: '请输入您的姓名'},
            {min: 2, max: 8, message: '长度在 2 到 8 个字符'}
          ],
          phone: [
            {required: true, message: '联系电话不能为空'},
          ],
        }
      }
    },
    components: {},
    computed: {
      ...mapGetters(['data', 'login', 'params']),
    },
    methods: {
      ...mapActions(['go', 'clear', 'getRecruitDetail', 'entryRecruit', 'changeSys', 'getMine']),
      ...filters,
      openSign(){
        if (this.login && this.login.id) {
          this.dialogVisible = true;
        } else {
          confirm('您还未登陆，无法报名。请先登录...', 'warning').then(() => this.changeSys({qrcode: true}))
        }
      },
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.entryRecruit([this.params.id, this.login])
          } else {
            return false;
          }
        });
      },
    },
    created () {
      this.getRecruitDetail()
    },
    destroyed(){
      this.clear()
    }
  }
</script>
