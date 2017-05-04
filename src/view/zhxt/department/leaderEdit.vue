<style lang="less" scoped>
  @import "unions.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="!data.edit">创建单位</span>
      <span v-if="data.edit">编辑单位</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <el-form :model="data" :rules="rules" ref="ruleForm" label-width="130px">
        <el-form-item label="单位名称：" prop="name">
          <el-input placeholder="请输入..." :value="data.name" @input="(v)=>setData({name:v})"/>
        </el-form-item>
        <el-form-item label="上级单位：" prop="parentid">
          <el-select :value="data.parentid || '无'" placeholder="请选择上级工会..." @input="(v)=>setData({parentid:v})" style="width: 100%">
            <el-option v-for="item in opts" :label="item.name" :key="item.id" :value="item.id"/>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人：" prop="adminId">
          <el-select :value="data.adminId || '无'" placeholder="请选择上级工会..." :loading="loading" :remote-method="getUser" remote filterable @input="(v)=>setData({adminId:v})" style="width: 100%">
            <el-option v-for="item in list" :key="item.id" :label="item.name" :value="item.id"/>
          </el-select>
        </el-form-item>
        <div style="width:100%;text-align: center">
          <el-button type="primary" @click="submitForm">提交</el-button>
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
        loading: false
      }
    },
    computed: {...mapGetters(['data', 'list'])},
    methods: {
      ...filter,
      ...mapActions(['getDep', 'updateDep', 'getAdminList', 'createDep', 'clear', 'setData', 'go']),
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.data.edit ? this.updateDep() : this.createDep();
          } else {
            alert('*号字段必须填写', 'error');
            return false;
          }
        });
      },
      async getUser(v){
        this.loading = true;
        const param = {page: 1, pageSize: 20};
        if (v.length == 32) {
          param.filed = ['id']
        } else {
          param.filed = ['name']
        }
        await this.getAdminList({...param, keyWord: [v]})
        this.loading = false
      }
    },
    created () {
      this.setData({type: 0});
      this.getDep()
      findDepApi({}).then(({list}) => this.opts = list)
    },
    destroyed () {
      this.clear('dep')
    }
  }
</script>
