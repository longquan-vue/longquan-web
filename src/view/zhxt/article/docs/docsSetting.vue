<style lang="less" scoped>
  @import "docs.less";
</style>
<template>
  <div class="contentBox article_docs">
    <div class="contentBoxtitle">
      <span>资料类型设置</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <el-form :model="type" ref="file" label-width="120px" class="demo-ruleForm">
        <el-form-item label="类型配置：" required>
          <el-row v-for="(val,key) in type.file" :key="key">
            <el-col :span="22">
              <el-input placeholder="请输入..."  :value="val" @input="(v)=>type.file[key] = v">
                <template slot="prepend">名称：</template>
              </el-input>
            </el-col>
            <!--<el-col :span="5">-->
              <!--<el-radio-group :value="data.repetition" @input="(v)=>setData({repetition:v})">-->
                <!--<el-radio :label="0">单日可以重复投票给同一对象</el-radio>-->
                <!--<el-radio :label="1">单日不能重复投票给同一对象</el-radio>-->
              <!--</el-radio-group>-->
            <!--</el-col>-->
            <el-col :span="2">
              <img src="/static/zhxt/error.png" class="close" alt="close" @click="del(key)">
            </el-col>
          </el-row>
          <el-row>
            <img src="/static/zhxt/add.png" class="add" alt="add" @click="$set(type.file,new Date().getTime(),'')">
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
        type: {file: {}}
      }
    },
    computed: {...mapGetters(['articleType'])},
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go']),
      submitForm() {
        this.changeSys({articleType: JSON.stringify(this.type)})
        this.$refs.file.validate((valid) => valid ? this.saveSys() : false);
      },
      del(key){
        this.$delete(this.type.file, key)
      }
    },
    created () {
      this.getSetting().then(() => this.type = {file: {}, ...this.articleType});
    },
  }
</script>
