<style lang="less" scoped>
  @import "service.less";
</style>
<template>
  <div class="contentBox article_docs">
    <div class="contentBoxtitle">
      <span>服务类型设置</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <el-form :model="type" ref="service" label-width="120px" class="demo-ruleForm">
        <el-form-item label="类型配置：" required>
          <div v-for="(item,key) in type.service" class="article_guide" :key="key">
            <Avatar :success="(v)=>item.url = v" width="200" height="200" :url="item.url"/>
            <el-input placeholder="请输入..." :value="item.name" @input="(v)=>item.name = v">
              <template slot="prepend">名称：</template>
            </el-input>
            <img src="/static/zhxt/error.png" class="close" alt="close" @click="del(key)">
          </div>
          <div class="article_guide"><img src="/static/zhxt/add.png" class="add" alt="add" @click="$set(type.service,new Date().getTime(),{name:'',url:''})"></div>
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
  import Avatar from '../../../../components/public/Avatar.vue'
  export default{
    data(){
      return {
        type: {service: {}}
      }
    },
    computed: {...mapGetters(['articleType'])},
    components: {Avatar},
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go']),
      submitForm() {
        this.changeSys({articleType: JSON.stringify(this.type)})
        this.$refs.service.validate((valid) => valid ? this.saveSys() : false);
      },
      del(key){
        this.$delete(this.type.service, key)
      }
    },
    created () {
      this.getSetting().then(() => this.type = {service: {}, ...this.articleType});
    },
  }
</script>
