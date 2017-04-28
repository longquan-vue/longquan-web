<style lang="less">
  @import "../../../../static/normal.less";
  @import "./recruitManageEdit.less";
</style>
<template>
  <div class="centerCruitEdit" style="">
    <appHead title="查看编辑"></appHead>
    <el-form :model="data" label-position="top" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="招聘标题" prop="name" style="padding-top:0.5rem;">
        <el-input :value="data.name" @input="(v)=>setData({name:v})" placeholder="请输入招聘的标题，20字以内"></el-input>
      </el-form-item>
      <el-form-item label="招聘岗位" prop="name">
        <el-input :value="data.name" @input="(v)=>setData({name:v})" placeholder='请输入岗位名称,岗位之间用","隔开'></el-input>
      </el-form-item>
      <el-form-item label="招聘人数" prop="num">
        <el-input :value="data.num" @input="(v)=>setData({num:v})" placeholder="不限">
          <template slot="append">人</template>
        </el-input>
      </el-form-item>
      <el-form-item label="薪资待遇" prop="pay">
        <el-input :value="data.pay" @input="(v)=>setData({pay:v})" placeholder="面议">
          <template slot="append">元/月</template>
        </el-input>
      </el-form-item>
      <el-form-item label="招聘单位" prop="company">
        <el-input :value="data.company" @input="(v)=>setData({company:v})" placeholder='请输入招聘单位全称'></el-input>
      </el-form-item>
      <el-form-item label="单位地址" prop="address">
        <el-input type="textarea" :rows="2" placeholder="请输入招聘单位详细地址" :value="data.address" @input="(v)=>setData({address:v})"></el-input>
      </el-form-item>
      <el-form-item label="招聘时间区间" required style="margin-bottom:10px;">
        <el-col :span="11">
          <!--<el-form-item prop="date1">-->
          <!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>-->
          <!--</el-form-item>-->
          <group>
            <datetime title="" v-model="value5" placeholder="开始时间" :min-year=2017 :max-year=2018 format="YYYY-MM-DD" @on-change="changeStart"
                      confirm-text="完成" clear-text="清除" cancel-text="取消">
              <el-form-item prop="start" style="padding-left:0;padding-right:0">
                <el-input placeholder="开始时间" icon="search" :value="dateFilter(data.start)"></el-input>
              </el-form-item>
            </datetime>
          </group>
        </el-col>
        <el-col class="line" :span="2" style="text-align:center">-</el-col>
        <el-col :span="11">
          <group>
            <datetime title="" v-model="value6" placeholder="结束时间" :min-year=2017 :max-year=2018 format="YYYY-MM-DD" @on-change="changeEnd"
                      confirm-text="完成" clear-text="清除" cancel-text="取消">
              <el-form-item prop="end" style="padding-left:0;padding-right:0">
                <el-input placeholder="结束时间" icon="search" :value="dateFilter(data.end)"></el-input>
              </el-form-item>
            </datetime>
          </group>
        </el-col>
      </el-form-item>
      <div class="connectPerson" v-for="(domain, index) in data.linkmans" :key="index" style="background:#fff;padding-top:0.3rem" :class="{mg40:index!=0?true:false}">
        <el-form-item label="联系人" :prop="'linkmans.' + index"
                      :rules="{ required: true, message: '联系人不能为空', trigger: 'change' }">
          <el-input :value="domain" placeholder="请输入联系人名称" @input="(v)=>setListVal(['linkmans.'+index,v])"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :prop="'phones.' + index"
                      :rules="{ required: true, message: '联系人电话不能为空', trigger: 'change' }">
          <el-input :value="data.phones[index]" @input="(v)=>setListVal(['phones.'+index,v])" placeholder="请输入联系人电话" style="display:inline-block;"></el-input>
          <el-button v-if="index!=0" @click.prevent="removeDomain(index)" style="margin-top:0.3rem;position:absolute;right:0">删除</el-button>
        </el-form-item>
      </div>
      <el-form-item style="margin-bottom:0.3rem;">
        <el-button @click="addDomain">+</el-button>
      </el-form-item>
      <el-form-item label="招聘要求" prop="claim" style="margin-bottom:0.3rem;padding-top:0.3rem;">
        <quill-editor :content="decode(data.claim)" @input="setData({claim:encode($event)})" :options="editorOption2" style="border:1px solid #bfcbd9;border-radius: 4px"/>
      </el-form-item>
      <el-form-item label="福利待遇" prop="treatment" style="margin-bottom:0.3rem;padding-top:0.3rem;">
        <quill-editor :content="decode(data.treatment)" @input="setData({treatment:encode($event)})" :options="editorOption2" style="border:1px solid #bfcbd9;border-radius: 4px"/>
      </el-form-item>
      <a @click="submitForm('ruleForm')" class="baoming" style="margin-bottom:0">提交</a>
    </el-form>
  </div>
</template>

<script type="es6">
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import filter from '../../../filters'
  import appHead from '../../../components/public/apphead/Apphead.vue'
  import {Datetime, Group, XButton, XDialog, TransferDomDirective as TransferDom} from 'vux'
  import myImgDialog from '../../../components/public/img-dialog/imgDialog.vue'

  export default{
    data(){
      return {
        value5: '',
        value6: '',
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'change'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ],
        },
      }
    },
    directives: {
      TransferDom
    },
    components: {
      appHead, Datetime, Group, XButton, myImgDialog, XDialog
    },
    computed: {...mapGetters(['data','editorOption2'])},
    methods: {
      ...mapActions(['clear', 'goto', 'getRecruitDetail', 'setData', 'setList', 'delList', 'setListVal']),
      ...filter,
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changeStart (value) {
        console.log('change', value);
        this.setData({start: new Date(value).getTime()})
      },
      changeEnd (value) {
        this.setData({end: new Date(value).getTime()})
      },
      removeDomain(index) {   //删除联系人
        this.delList(['linkmans', index]);
        this.delList(['phones', index]);
        // var index = this.ruleForm.linkmans.indexOf(item);
        // if (index !== -1) {
        //     this.delList()
        // }
      },
      addDomain() {    //新增联系人
        this.setList({key: 'linkmans', data: ''});
        this.setList({key: 'phones', data: ''});
      }
    },
    created () {
      this.getRecruitDetail();
    },
    destroyed(){
      this.clear()
    }
  }
</script>
