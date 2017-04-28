<style lang="less" scoped>
  @import "activity.less";
</style>
<template>
  <div class="contentBox article_docs">
    <div class="contentBoxtitle">
      <span>活动类型设置</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <el-form :model="type" ref="activity" label-width="120px" class="demo-ruleForm">
        <el-form-item label="类型配置：" required>
          <el-row v-for="(val,key) in type.activity" :key="key">
            <el-col :span="22">
              <el-input placeholder="请输入..."  :value="val" @input="(v)=>type.activity[key] = v">
                <template slot="prepend">名称：</template>
              </el-input>
            </el-col>
            <el-col :span="2">
              <img src="/static/zhxt/error.png" class="close" alt="close" @click="del(key)">
            </el-col>
          </el-row>
          <el-row>
            <img src="/static/zhxt/add.png" class="add" alt="add" @click="$set(type.activity,new Date().getTime(),'')">
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
  export default{
    data(){
      return {
        type: {activity: {}}
      }
    },
    computed: {...mapGetters(['articleType'])},
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go']),
      submitForm() {
        this.changeSys({articleType: JSON.stringify(this.type)})
        this.$refs.activity.validate((valid) => valid ? this.saveSys() : false);
      },
      del(key){
        this.$delete(this.type.activity, key)
      }
    },
    created () {
      this.getSetting().then(() => this.type = {activity: {}, ...this.articleType});
    },
  }
</script>
