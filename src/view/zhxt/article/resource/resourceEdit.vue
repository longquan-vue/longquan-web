<style lang="less" scoped>
  @import "resource.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span v-if="data.edit">发布资料中心</span>
      <span v-if="!data.edit">修改资料中心</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div style="width:80%;margin:auto;">
        <el-form :model="data" :rules="rules" ref="form" label-width="120px" class="demo-ruleForm">
          <el-form-item label="标题" prop="title">
            <el-input :value="data.title" @input="(v)=>setData({title:v})"/>
          </el-form-item>
          <el-form-item label="资料类型" prop="subType">
            <el-select :value="data.subType" placeholder="请选择资料类型..." @input="(v)=>setData({subType:v})">
              <el-option v-for="(val,key) in articleType.resource" :label="val" :key="key" :value="key"/>
            </el-select>
          </el-form-item>
          <!--<el-form-item label="配图" prop="pics">-->
            <!--<MyUpload :files="data.pics" filed="pics" :edit="data.edit"/>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="同步显示" prop="sync">-->
            <!--<el-checkbox-group :value="JSON.parse(data.sync|| '[0,1,2]')" @input="(v)=>setData({sync:JSON.stringify(v)})">-->
              <!--<el-checkbox :label="0">网站</el-checkbox>-->
              <!--<el-checkbox :label="1">服务号</el-checkbox>-->
              <!--<el-checkbox :label="2">企业号</el-checkbox>-->
            <!--</el-checkbox-group>-->
          <!--</el-form-item>-->
          <el-form-item label="内容" prop="content">
            <quill-editor ref="myTextEditor" :content="decode(data.content)" @input="(v)=>setData({content:encode(v)})" :config="{}"/>
          </el-form-item>
          <el-form-item label="附件" prop="files">
            <MyUpload :files="data.files" type="text" :edit="data.edit"/>
          </el-form-item>
          <div v-if="!data.edit">
            <el-form-item label="发布者" prop="admin">
              <el-input v-model="data.admin.name" readonly/>
            </el-form-item>
            <el-form-item label="发布时间" prop="created">
              <el-input :value="date3Filter(data.created)" readonly/>
            </el-form-item>
          </div>
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
  import filter from '../../../../filters'
  import MyUpload from '../../../../components/public/MyUpload.vue'
  import {alert} from '../../../../actions'
  import {number, required, array} from '../../../../constant/rules'
  export default {
    data() {
      return {
        rules: {
          files: array(),
          title: required('请填写标题...', {min: 1, max: 30}),
//          sync: required('请选择同步服务...'),
        },
      }
    },
    components: {MyUpload},
    computed: {...mapGetters(['data', 'articleType']),},
    methods: {
      ...filter,
      ...mapActions(['getArticle', 'createArticle', 'updateArticle', 'clear', 'setData', 'go']),
      submitForm(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.data.edit ? this.createArticle() : this.updateArticle();
          } else {
            alert('*号字段必须填写!', 'error');
            return false;
          }
        });
      },
    },
    created () {
      this.setData({type: 2,sync:'[0,1,2]'});
      this.getArticle()
    },
    destroyed () {
      this.clear('article')
    }
  }
</script>
