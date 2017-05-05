<style lang="less" scoped>
  @import "unions.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="!data.edit">添加领导</span>
      <span v-if="data.edit">修改领导</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <el-form :model="data" :rules="rules" ref="ruleForm" label-width="130px">
        <el-form-item label="姓名：" prop="name">
          <el-input placeholder="请输入姓名..." :value="data.name" @input="(v)=>setData({name:v})"/>
        </el-form-item>
        <el-form-item label="职位：" prop="position">
          <el-input placeholder="请输入职位..." :value="data.position" @input="(v)=>setData({position:v})"/>
        </el-form-item>
        <el-form-item label="照片：" prop="picUrl">
          <Avatar :url="data.picUrl" width="170" height="220"/><span style="display: inline-block;padding-left: 15px;">图片大小为170px * 220px，格式为PIC、PNG</span>
        </el-form-item>
        <el-form-item label="简介：" prop="descript">
          <el-input placeholder="请输入简介..." type="textarea" :rows="5" :value="data.descript" @input="(v)=>setData({descript:v})"/>
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
  import {alert} from '../../../actions'
  import {number, required} from '../../../constant/rules'
  import Avatar from '../../../components/public/Avatar.vue'
  export default {
    data() {
      return {
        rules: {},
      }
    },
    computed: {...mapGetters(['data'])},
    components:{Avatar},
    methods: {
      ...mapActions(['getLeader', 'updateLeader', 'createLeader', 'clear', 'setData', 'go']),
      submitForm(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.data.edit ? this.updateLeader() : this.createLeader();
          } else {
            alert('*号字段必须填写', 'error');
            return false;
          }
        });
      },
    },
    created () {
      this.getLeader()
    },
    destroyed () {
      this.clear('leader')
    }
  }
</script>
