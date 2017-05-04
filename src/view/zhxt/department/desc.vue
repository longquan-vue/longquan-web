<style lang="less" scoped>
  @import "./unions.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>区总介绍</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <el-form :model="setting" ref="relation" label-width="0" class="dep_desc">
      <el-form-item required>
        <quill-editor :content="decode(setting.introduce)" @input="changeSys({introduce:encode($event)})" :options="editorOption"/>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filters from '../../../filters'
  export default{
    computed: {...mapGetters(['setting', 'editorOption'])},
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go']),
      ...filters,
      submitForm() {
        this.$refs.relation.validate((valid) => valid ? this.saveSys() : false);
      },
    },
    created () {
      this.getSetting();
    },
  }
</script>
