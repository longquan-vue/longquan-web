<style lang="less">
  .guideBulid {
    .guideBulidTitle {
      margin: 40px auto;width: 360px;font-size: 22px;color: #cc0000;position: relative;text-align: center;
      &:before {content: '';width: 90px;height: 1px;background-color: #E7E7E7;position: absolute;top: 50%;left: 0;  }
      &:after {content: '';width: 90px;height: 1px;background-color: #E7E7E7;position: absolute;top: 50%;right: 0;  }
    }
    .guideBulidRule {margin-bottom: 20px;
      h2 {font-size: 18px;color: #333;font-weight: bold  }
      p {font-size: 16px;color: #333;line-height: 28px;  }
    }
    .guideBulidForm {background-color: #FFF5F5;padding: 20px;  }
  }
</style>
<template>
  <div class="guideBulid">
    <div class="guideBulidTitle">
      <span>工会组建申请表</span>
    </div>
    <div class="guideBulidRule">
      <h2>填表说明:</h2>
      <p>1、以下内容请务必填写；</p>
      <p>2、“工会职务”是指工会委员会委员的内部分工情况。如：副主席、经审主任、女职工主任、组织委员、文体委员、安全生产委员等；</p>
      <p>3、“是否有党组织”如无党组织则填报“无”，如有党组织则填报：（1）党委，（2）党总支，（3）党支部；</p>
    </div>
    <div class="guideBulidForm">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
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
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import {molds, industrys} from '../../../constant'
  import filters from '../../../filters'
  import {createDepApi} from '../../../api/departmentApi'
  import {success} from '../../../actions'
  export default{
    data(){
      return {
        molds, industrys,
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
            {min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'change'}
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
            {required: true, message: '请输入职工总数'},
            // {min: 1, max: 5, message: '长度在 1 到 5 个字符'},
            {type: 'number', message: '职工总数必须为数字值'}
          ],
          feWorkers: [
            {required: true, message: '请输入女职工总数'},
            // {min: 1, max: 5, message: '长度在 1 到 5 个字符'},
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
    methods: {
      ...filters,
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            createDepApi(this.ruleForm).then(() => success('申请成功!'))
          } else {
            return false;
          }
        });
      },
    },
    created () {

    },
    destroyed(){

    }
  }
</script>
