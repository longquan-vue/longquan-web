<style lang="less">
  @import "welfare.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="!data.edit">编辑福利预告</span>
      <span v-if="data.edit">新增福利预告</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" ref="data" label-width="120px" class="demo-data">
          <el-form-item label="内容" prop="content" :rules="{required: true, message: '请输入内容', trigger: 'blur', min: 1, max: 40}">
            <el-input :value="data.content" @input="(v)=>setData({content:v})"/>
          </el-form-item>
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
  export default {
    computed: {...mapGetters(['data']),},
    methods: {
      ...mapActions(['getArticle', 'createArticle', 'clear', 'setData', 'go']),
      submitForm() {
        this.$refs.data.validate((valid) => {
          if (valid) {
            this.data.edit ? this.createArticle() : this.updateWelfare();
          } else {
            return false;
          }
        })
      },
    },
    created () {
      this.setData({title: '福利预告', type: 6})
      this.getArticle()
    },
    destroyed () {
      this.clear('article')
    }
  }
</script>
