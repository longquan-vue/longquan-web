<style lang="less" scoped>
  @import "advanced.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>先进人物类型设置</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <el-form :model="type" ref="advanced" label-width="120px" class="demo-ruleForm">
        <el-form-item label="类型配置：" required>
          <div v-for="(item,key) in type.advanced" :key="key" class="article_advanced">
            <span>样式：</span>
            <div class="advanced_img" v-for="(img,index) in advancedType" @click="item.type = index">
              <img :src="img" class="img">
              <img src="/static/zhxt/ok.png" class="ok" v-if="index == item.type">
            </div>
            <el-input placeholder="请输入..." :value="item.name" @input="(v)=>item.name = v">
              <template slot="prepend">名称：</template>
            </el-input>
            <img src="/static/zhxt/error.png" class="close" alt="close" @click="del(key)">
          </div>
          <el-row>
            <img src="/static/zhxt/add.png" class="add" alt="add" @click="$set(type.advanced,new Date().getTime(),{name:'',type:0})">
          </el-row>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="submitForm">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import {advancedType} from '../../../../constant'
  export default{
    data(){
      return {
        type: {advanced: {}},
        advancedType
      }
    },
    computed: {...mapGetters(['articleType'])},
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go']),
      submitForm() {
        this.changeSys({articleType: JSON.stringify(this.type)})
        this.$refs.advanced.validate((valid) => valid ? this.saveSys() : false);
      },
      del(key){
        this.$delete(this.type.advanced, key)
      }
    },
    created () {
      this.getSetting().then(() => this.type = {advanced: {}, ...this.articleType});
    },
  }
</script>
