<style lang="less" scoped>
  @import "unions.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="!data.mine">工会组建编辑审核</span>
      <span v-if="data.mine">我的工会信息</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <el-form :model="data" :rules="rules" ref="ruleForm" label-width="130px">
        <div class="dep_info">
          <div class="info"><span>公会信息</span></div>
          <el-form-item label="公会名称：" prop="name">
            <el-input placeholder="请输入..."  :value="data.name" @input="(v)=>setData({name:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="上级工会：" prop="parentid">
            <el-select :value="data.parentid || '无'" placeholder="请选择上级工会..." @input="(v)=>setData({parentid:v})" style="width: 100%" :disabled="!data.mine || data.audit == 2">
              <el-option v-for="item in opts" :label="item.name" :key="item.id" :value="item.id"/>
            </el-select>
          </el-form-item>
          <el-form-item label="单位类型：" prop="type">
            <el-input placeholder="请输入..."  :value="data.type" @input="(v)=>setData({type:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="所属行业：" prop="industry">
            <el-input placeholder="请输入..."  :value="data.industry" @input="(v)=>setData({industry:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="成立时间：" prop="register">
            <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择成立时间..." :value="data.register" @input="(v)=>setData({register:v&&v.getTime()})" style="width: 100%;" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="单位地址：" prop="address">
            <el-input placeholder="请输入..."  :value="data.address" @input="(v)=>setData({address:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="法人登记号：" prop="corporation">
            <el-input placeholder="请输入..."  :value="data.corporation" @input="(v)=>setData({corporation:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="法人电话：" prop="corPhone">
            <el-input placeholder="请输入..."  :value="data.corPhone" @input="(v)=>setData({corPhone:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="邮编：" prop="code">
            <el-input placeholder="请输入..."  :value="data.code" @input="(v)=>setData({code:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item/>
          <el-form-item label="职工总数：" prop="workers">
            <el-input placeholder="请输入..."  :value="data.workers" @input="(v)=>setData({workers:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="女职工总数：" prop="feWorkers">
            <el-input placeholder="请输入..."  :value="data.feWorkers" @input="(v)=>setData({feWorkers:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="会员总数：" prop="users">
            <el-input placeholder="请输入..."  :value="data.users" @input="(v)=>setData({users:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="女会员总数：" prop="feUsers">
            <el-input placeholder="请输入..."  :value="data.feUsers" @input="(v)=>setData({feUsers:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="分工会数：" prop="childs">
            <el-input placeholder="请输入..."  :value="data.childs" @input="(v)=>setData({childs:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="分工会小组数：" prop="groups">
            <el-input placeholder="请输入..."  :value="data.groups" @input="(v)=>setData({groups:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="届数：" prop="terms">
            <el-input placeholder="请输入..."  :value="data.terms" @input="(v)=>setData({terms:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="换届时间：" prop="general">
            <el-date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择换届时间..." :value="data.general" @input="(v)=>setData({general:v&&v.getTime()})" style="width: 100%;" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="主席姓名：" prop="chaiName">
            <el-input placeholder="请输入..."  :value="data.chaiName" @input="(v)=>setData({chaiName:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="本届任期：" prop="term">
            <el-input placeholder="请输入..."  :value="data.term" @input="(v)=>setData({term:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="行政职务：" prop="duties">
            <el-input placeholder="请输入..."  :value="data.duties" @input="(v)=>setData({duties:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="主席电话：" prop="chaiPhone">
            <el-input placeholder="请输入..."  :value="data.chaiPhone" @input="(v)=>setData({chaiPhone:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="主席手机号：" prop="chaiTel">
            <el-input placeholder="请输入..."  :value="data.chaiTel" @input="(v)=>setData({chaiTel:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="专（兼）职：" prop="job">
            <el-input placeholder="请输入..."  :value="data.job" @input="(v)=>setData({job:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="是否开展家庭活动：" prop="activity" label-width="180px">
            <el-radio-group :value="data.activity" @input="(v)=>setData({activity:v})" :disabled="!data.mine || data.audit == 2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否签订集体合同：" prop="contract" label-width="180px">
            <el-radio-group :value="data.contract" @input="(v)=>setData({contract:v})" :disabled="!data.mine || data.audit == 2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否建立职代会：" prop="congress" label-width="180px">
            <el-radio-group :value="data.congress" @input="(v)=>setData({congress:v})" :disabled="!data.mine || data.audit == 2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="有无劳动调解机构：" prop="mediation" label-width="180px">
            <el-radio-group :value="data.mediation" @input="(v)=>setData({mediation:v})" :disabled="!data.mine || data.audit == 2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否进行厂务公开：" prop="affairs" label-width="180px">
            <el-radio-group :value="data.affairs" @input="(v)=>setData({affairs:v})" :disabled="!data.mine || data.audit == 2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否设立持股会：" prop="stock" label-width="180px">
            <el-radio-group :value="data.stock" @input="(v)=>setData({stock:v})" :disabled="!data.mine || data.audit == 2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否进行工资集体协商：" prop="wages" label-width="180px">
            <el-radio-group :value="data.wages" @input="(v)=>setData({wages:v})" :disabled="!data.mine || data.audit == 2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否设立董事监事会：" prop="supervisors" label-width="180px">
            <el-radio-group :value="data.supervisors" @input="(v)=>setData({supervisors:v})" :disabled="!data.mine || data.audit == 2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否设立党支部：" prop="branch" label-width="180px">
            <el-radio-group :value="data.branch" @input="(v)=>setData({branch:v})" :disabled="!data.mine || data.audit == 2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否进行民主评议：" prop="appraisal" label-width="180px">
            <el-radio-group :value="data.appraisal" @input="(v)=>setData({appraisal:v})" :disabled="!data.mine || data.audit == 2">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="职工之家等级：" prop="leve">
            <el-input placeholder="请输入..."  :value="data.leve" @input="(v)=>setData({leve:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
        </div>
        <div class="dep_info">
          <div class="info"><span>申请人信息</span></div>
          <el-form-item label="申请人姓名：" prop="applyName">
            <el-input placeholder="请输入..."  :value="data.applyName" @input="(v)=>setData({applyName:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="电话：" prop="applyPhone">
            <el-input placeholder="请输入..."  :value="data.applyPhone" @input="(v)=>setData({applyPhone:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item label="邮箱地址：" prop="applyEmail">
            <el-input placeholder="请输入..."  :value="data.applyEmail" @input="(v)=>setData({applyEmail:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
          <el-form-item/>
          <el-form-item label="申请备注：" prop="applyMark" style="width: 99.5%">
            <el-input placeholder="请输入..."  :value="data.applyMark" type="textarea" :rows="5" @input="(v)=>setData({applyMark:v})" :disabled="!data.mine || data.audit == 2"/>
          </el-form-item>
        </div>
        <div class="dep_info">
          <div class="info"><span>审核信息</span></div>
          <el-form-item label="审核状态：" v-if="data.mine" prop="audit">
            <el-input placeholder="请输入..."  :value="audit2Filter(data.audit)" disabled readonly/>
          </el-form-item>
          <el-form-item label="审核：" v-if="!data.mine" prop="audit">
            <el-radio-group :value="data.audit" @input="(v)=>setData({audit:v})">
              <el-radio :label="2">通过</el-radio>
              <el-radio :label="3">不通过</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item/>
          <el-form-item :label="data.mine?'审核失败原因：':'不通过原因：'" prop="fail" style="width: 99.5%">
            <el-input placeholder="请输入..."  :value="data.fail" :placeholder="data.mine?'无':'请输入失败原因...'" @input="(v)=>setData({fail:v})" type="textarea" :rows="5" :disabled="data.mine" :readonly="data.mine"/>
          </el-form-item>
          <el-form-item label="审核者：" v-if="data.mine" style="width: 99.5%">
            <el-input placeholder="无"  :value="data.admin.name || '无'" readonly/>
          </el-form-item>
          <el-form-item label="审核时间：" v-if="data.mine" prop="audTime" style="width: 99.5%">
            <el-input placeholder="无"  :value="date3Filter(data.audTime)" readonly/>
          </el-form-item>
        </div>
        <div style="width:100%;text-align: center">
          <el-button type="primary" @click="submitForm" v-if="!data.mine || data.audit != 2">提交</el-button>
          <el-button type="primary" @click="go()" v-if="data.mine && data.audit == 2">返回</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filter from '../../../filters'
  import {alert} from '../../../actions'
  import {number, required, array} from '../../../constant/rules'
  import {findDepApi} from '../../../api/departmentApi'
  export default {
    data() {
      return {
        rules: {},
        opts: [],
      }
    },
    computed: {...mapGetters(['data']),},
    methods: {
      ...filter,
      ...mapActions(['getDep', 'updateDep', 'auditDep', 'clear', 'setData', 'go']),
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.data.mine ? this.updateDep() : this.auditDep();
          } else {
            alert('*号字段必须填写', 'error');
            return false;
          }
        });
      },
    },
    beforeRouteUpdate (to, from, next) {
      next();
      this.getDep()
    },
    created () {
      this.getDep()
      findDepApi({}).then(({list}) => this.opts = list)
    },
    destroyed () {
      this.clear('dep')
    }
  }
</script>
