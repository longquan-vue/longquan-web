<style lang="less" scoped>
  @import "guide.less";
</style>
<template>
  <div class="contentBox article_docs">
    <div class="contentBoxtitle">
      <span>办事指南类型设置</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <el-form :model="type" ref="guide" label-width="120px">
        <el-form-item label="类型配置：" required>
          <div v-for="(item,key) in type.guide" class="article_guide" :key="key">
            <Avatar :success="(v)=>item.url = v" width="200" height="200" :url="item.url"/>
            <el-input placeholder="请输入..." :value="item.name" @input="(v)=>item.name = v">
              <template slot="prepend">名称：</template>
            </el-input>
            <img src="/static/zhxt/error.png" class="close" alt="close" @click="del(key)">
          </div>
          <div class="article_guide"><img src="/static/zhxt/add.png" class="add" alt="add" @click="$set(type.guide,new Date().getTime(),{name:'',url:''})"></div>
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
        type: {guide: {}}
      }
    },
    components: {Avatar},
    computed: {...mapGetters(['articleType'])},
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go']),
      submitForm() {
        this.changeSys({articleType: JSON.stringify(this.type)})
        this.$refs.guide.validate((valid) => valid ? this.saveSys() : false);
      },
      del(key){
        this.$delete(this.type.guide, key)
      }
    },
    created () {
      this.getSetting().then(() => this.type = {guide: {}, ...this.articleType});
    },
  }
</script>
