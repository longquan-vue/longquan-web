<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="data.edit">添加招聘信息</span>
      <span v-if="!data.edit">编辑招聘信息</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
          <el-form-item label="招聘标题：" prop="name">
            <el-input placeholder="请输入..."  :value="data.name" @input="(v)=>setData({name:v})"/>
          </el-form-item>
          <el-form-item label="招聘岗位：" prop="job">
            <el-input placeholder="请输入..."  :value="data.job" @input="(v)=>setData({job:v})"/>
          </el-form-item>
          <el-form-item label="招聘人数：" prop="num">
            <el-input placeholder="请输入..."  :value="data.num" @input="(v)=>setData({num:v})">
              <template slot="append">人</template>
            </el-input placeholder="请输入..." >
          </el-form-item>
          <el-form-item label="薪资待遇：" prop="pay">
            <el-input placeholder="请输入..."  :value="data.pay" @input="(v)=>setData({pay:v})">
              <template slot="append">元/月</template>
            </el-input placeholder="请输入..." >
          </el-form-item>
          <el-form-item label="招聘单位：" prop="company">
            <el-input placeholder="请输入..."  :value="data.company" @input="(v)=>setData({company:v})"/>
          </el-form-item>
          <el-form-item label="单位地址：" prop="address">
            <el-input placeholder="请输入..."  :value="data.address" @input="(v)=>setData({address:v})"/>
          </el-form-item>
          <el-form-item label="招聘时间：" prop="start">
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
          <el-row v-for="(item,idx) in linkmanList" :key="idx" style="margin-bottom: 0">
            <el-form-item :label="'联系人 '+(idx+1)+'：'" prop="linkman">
              <el-input placeholder="请输入..."  :value="item.linkman" @input="(v)=>setListVal(['linkmans.'+idx,v])"/>
            </el-form-item>
            <el-form-item :label="'联系电话 '+(idx+1)+'：'" prop="phone">
              <el-input placeholder="请输入..."  :value="item.phone" @input="(v)=>setListVal(['phones.'+idx,v])"/>
            </el-form-item>
          </el-row>
          <el-form-item label="">
            <img src="/static/zhxt/add.png" alt="add" style="width: 36px;height: 36px;cursor: pointer" @click="addLinkman">
          </el-form-item>
          <el-form-item label="招聘要求：" prop="claim">
            <quill-editor :content="decode(data.claim)" @input="setData({claim:encode($event)})" :options="editorOption"/>
          </el-form-item>
          <el-form-item label="福利待遇：" prop="treatment">
            <quill-editor :content="decode(data.treatment)" @input="setData({treatment:encode($event)})" :options="editorOption"/>
          </el-form-item>
          <div v-if="!data.edit">
            <el-form-item label="发布者：" prop="admin">
              <el-input placeholder="无"  v-model="data.admin.name" readonly/>
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
  import {required, number, array} from '../../../constant/rules'
  export default {
    data() {
      return {
        linkmanList: [{linkman: '', phone: ''}],
        rules: {
          name: required('请输入招聘标题...', {max: 20}),
          company: required('请输入招聘单位...'),
          address: required('请输入单位地址...'),
          linkman: required('请输入联系人姓名...'),
          phone: required('请输入联系电话...'),
        },
      }
    },
    components: {},
    computed: {...mapGetters(['data', 'editorOption'])},
    watch: {
      data(){
        this.setLinkmanList()
      }
    },
    methods: {
      ...filter,
      ...mapActions(['getRecruitDetail', 'createRecruit', 'updateRecruit', 'setListVal', 'clear', 'setData', 'go']),
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.data.edit ? this.createRecruit() : this.updateRecruit();
          } else {
            this.$message.error('*号字段必须填写');
            return false;
          }
        });
      },
      setLinkmanList(){
        this.linkmanList = this.data && this.data.linkmans ? this.data.linkmans.map((linkman, idx) => ({linkman, phone: this.data.phones[idx]})) : []
      },
      addLinkman(){
        this.setListVal([`linkmans.${this.data.linkmans.length}`, ''])
        this.setListVal([`phones.${this.data.phones.length}`, ''])
        this.setLinkmanList();
      }
    },
    created () {
      this.getRecruitDetail()
    },
    destroyed () {
      this.clear('recruit')
    }
  }
</script>
