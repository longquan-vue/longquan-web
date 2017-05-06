<style lang="less" scoped>
  .guideBulidForm {background-color: #FFF5F5;padding: 20px;  }
  .showApply-rule{
    padding: 0.3rem;height: 100%;
    p{ font-size: 0.4rem;margin-bottom: 0.3rem;
      span{ display: block;}
    }
  }
</style>
<template>
  <div class="fwh-build" style="background-color: #F0F0F0;height: 100%;overflow: scroll;">
    <div class="guideBulidForm">
      <img src="../../../../static/wx/apply.png" style="width:100%;margin-bottom:0.5rem;" @click="showApply = true">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" label-position="top">
        <el-form-item label="单位名称：" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入单位名称..."></el-input>
        </el-form-item>
        <el-form-item label="单位地址：" prop="address">
          <el-input v-model="ruleForm.address" placeholder="请输入单位地址..."></el-input>
        </el-form-item>
        <el-form-item label="单位类型：" prop="mold" style="width:100%">
          <el-select v-model="ruleForm.mold" placeholder="请选择单位类型..." style="width:100%">
            <el-option :label="item" :value="item" :key="item" v-for="item in molds"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属行业：" prop="industry">
          <el-select v-model="ruleForm.industry" placeholder="请选择所属行业..." style="width:100%">
            <el-option :label="item" :value="item" :key="item" v-for="item in industrys"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职工总数：" prop="workers">
          <el-input v-model.number="ruleForm.workers" placeholder="请输入单位员工总数..."></el-input>
        </el-form-item>
        <el-form-item label="女职工总数：" prop="feWorkers">
          <el-input v-model.number="ruleForm.feWorkers" placeholder="请输入单位女员工总数..."></el-input>
        </el-form-item>
        <el-form-item label="申请人姓名：" prop="applyName">
          <el-input v-model="ruleForm.applyName" placeholder="请输入申请人姓名..."></el-input>
        </el-form-item>
        <el-form-item label="联系电话：" prop="applyPhone">
          <el-input v-model="ruleForm.applyPhone" placeholder="请输入申请人联系电话..."></el-input>
        </el-form-item>
        <el-form-item label="申邮箱地址：" prop="applyEmail">
          <el-input v-model="ruleForm.applyEmail" placeholder="请输入申请人邮箱地址..."></el-input>
        </el-form-item>
        <el-form-item label="申请备注：" prop="applyMark">
          <el-input type="textarea" :rows="6" v-model="ruleForm.applyMark" placeholder="请输入..."></el-input>
        </el-form-item>
        <div style="text-align: center">
          <el-button type="danger" style="width:270px;" @click="submitForm()">立即申请</el-button>
        </div>
      </el-form>
    </div>

    <div v-transfer-dom>
      <popup v-model="showApply" position="right" width="100%" style="background:#fff" @on-first-show="resetScroller">
        <div class="position-horizontal-demo">
          <x-header :left-options="{backText: '',preventGoBack:true}" @on-click-back="showApply = false">填表说明</x-header>
          <scroller lock-x ref="scroller" height="-46">
            <div class="showApply-rule">
              <p>1、以下内容请务必填写；</p>
              <p>2、“工会职务”是指工会委员会委员的内部分工情况。如：副主席、经审主任、女职工主任、组织委员、文体委员、安全生产委员等；</p>
              <p>3、“是否有党组织”如无党组织则填报“无”，如有党组织则填报：
                <span>（1）党委，</span>
                <span>（2）党总支，</span>
                <span>（3）党支部；</span>
              </p>
              <p>4、“所在单位类别”按以下内容填报：
                <span v-for="(item,index) in molds">({{index}}) {{item}}</span>
              </p>
              <p>5、“所在单位行业分类”按以下内容填报：
                <span v-for="(item,index) in industrys">({{index}}) {{item}}</span>
              </p>
            </div>
          </scroller>
        </div>
      </popup>
    </div>

  </div>
</template>

<script type="es6">
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import {molds, industrys} from '../../../constant'
  import filters from '../../../filters'
  import { TransferDomDirective as TransferDom, Popup , XHeader,Scroller} from 'vux'
  import {createDepApi} from '../../../api/departmentApi'
  import {success} from '../../../actions'
  export default{
    data(){
      return{
        molds, industrys,
        showApply:false,
        ruleForm: {
          name: '',
          address: '',
          mold: '',
          industry: '',
          workers: '',
          feWorkers: '',
          applyName: '',
          applyPhone: '',
          applyEmail: '',
          applyMark: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入单位名称', trigger: 'change'},
            {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'change'}
          ],
          address: [
            {required: true, message: '请输入单位地址', trigger: 'change'},
            {min: 2, max: 40, message: '长度在 2 到 40 个字符', trigger: 'change'}
          ],
          mold: [
            {required: true, message: '请选择单位类型', trigger: 'change'}
          ],
          industry: [
            {required: true, message: '请选择所属行业', trigger: 'change'}
          ],
          workers: [
            {required: true, message: '请输入职工总数', trigger: 'change'},
            {min: 1, max: 5, message: '长度在 2 到 5 个字符', trigger: 'change'},
            {type: 'number', message: '职工总数必须为数字值'}
          ],
          feWorkers: [
            {required: true, message: '请输入女职工总数', trigger: 'change'},
            {min: 1, max: 5, message: '长度在 2 到 5 个字符', trigger: 'change'},
            {type: 'number', message: '女职工总数必须为数字值'}
          ],
          applyName: [
            {required: true, message: '请输入申请人姓名', trigger: 'change'},
            {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'change'}
          ],
          applyPhone: [
            {required: true, message: '请输入联系方式', trigger: 'change'},
          ],
          applyEmail: [
            {required: true, message: '请输入联系邮箱', trigger: 'change'},
          ],
          applyMark: [
            {required: true, message: '请填写申请备注', trigger: 'blur'}
          ]
        }
      }
    },
    directives: {
      TransferDom
    },
    components:{
      Popup,XHeader,Scroller
    },
    computed: {
    },
    methods:{
      ...mapActions(['go','clear','getMine']),
      ...filters,
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            createDepApi(this.ruleForm).then(() => success('申请成功!')).catch((e) => console.error(e))
          } else {
            return false;
          }
        });
      },
      async resetScroller () {
        await this.$nextTick(() => {
          this.$refs.scroller.reset()
        })
      },
    },
    created () {

    },
    destroyed(){

    }
  }
</script>
