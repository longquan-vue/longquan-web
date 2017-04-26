<style lang="less" scoped>
  @import "link.less";
</style>
<template>
  <div class="contentBox link_box">
    <div class="contentBoxtitle">
      <span>添加友情链接</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <el-form :model="data" ref="data" label-width="90px" class="demo-ruleForm">
        <el-row v-for="(link,idx) in data.links" :key="idx">
          <el-col :span="6">
            <el-form-item label="名称" :prop="'links.'+idx+'.name'" :rules="[{required:true,message:'名称不能为空！'}]">
              <el-input :value="link.name" @input="(v)=>link.name=v"/>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="所属类型" :prop="'links.'+idx+'.type'" :rules="[{required:true,message:'所属类型不能为空！'}]">
              <el-select :value="link.type" placeholder="请选择类型..." @input="(v)=>link.type=v">
                <el-option v-for="(val,key) in articleType.link" :label="val" :key="key" :value="key"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="URL" :prop="'links.'+idx+'.url'" :rules="[{required:true,message:'URL不能为空！'}]">
              <el-input :value="link.url" @input="(v)=>link.url=v"/>
            </el-form-item>
          </el-col>
          <el-col :span="2"><img src="/static/zhxt/error.png" alt="close" class="close" @click="del(idx)"></el-col>
        </el-row>
        <img src="/static/zhxt/add.png" alt="add" class="add" @click="$set(data.links,data.links.length,{name:'',type:'',url:''})">
        <div style="text-align: center">
          <el-button type="primary" @click="submitForm">保存</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import filter from '../../../../filters'
  import {alert} from '../../../../actions'
  export default {
    data() {
      return {
        data: {links: []},
      }
    },
    computed: {...mapGetters(['articleType']),},
    methods: {
      ...filter,
      ...mapActions(['getArticle', 'createLink', 'clear', 'go']),
      submitForm(){
        this.$refs.data.validate((valid) => {
          if (valid) {
            this.createLink(this.data.links)
          } else {
            alert('*号字段必须填写!', 'error');
            return false;
          }
        });
      },
      del(idx){
        this.$delete(this.data.links, idx)
      }
    },
    destroyed () {
      this.clear()
    }
  }
</script>
