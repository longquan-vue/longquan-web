<style lang="less" scoped>
  @import "./style.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>联系我们</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <el-form :model="setting" ref="relation" label-width="120px" class="demo-ruleForm ticket">
      <el-form-item label="联系信息" required>
        <el-row v-for="(val,idx) in relation" :key="idx">
          <el-col :span="22">
            <el-input :value="val" @input="(v)=>relation[idx] = v"/>
          </el-col>
          <el-col :span="2">
            <img src="/static/zhxt/error.png" class="close" alt="close" @click="del(idx)">
          </el-col>
        </el-row>
        <el-row>
          <img src="/static/zhxt/add.png" class="add" alt="add" @click="$set(relation,relation.length,'')">
        </el-row>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import {alert} from '../../../actions'
  export default{
    data(){
      return {
        relation: []
      }
    },
    computed: {...mapGetters(['setting'])},
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go']),
      submitForm() {
        this.changeSys({relation: JSON.stringify(this.relation)})
        this.$refs.relation.validate((valid) => valid ? this.saveSys() : false);
      },
      del(idx){
        this.$delete(this.relation, idx)
      }
    },
    created () {
      this.getSetting().then(() => this.relation = JSON.parse(this.setting.relation || '[]'));
    },
  }
</script>
