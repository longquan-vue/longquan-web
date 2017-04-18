<style lang="less">
  @import "./style.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>服务号管理</span>
    </div>
    <el-tabs v-model="tab" type="card" @tab-click="changeType">
      <el-tab-pane label="关注设置" name="1"/>
      <el-tab-pane label="关注回复设置" name="2"/>
      <el-tab-pane label="服务号菜单设置" name="3"/>
    </el-tabs>
    <div class="contentBoxCont" v-if="tab == '1'">
      <el-form :model="setting" ref="setting" label-width="120px" class="demo-ruleForm">
        <el-form-item label="关注送积分" prop="score" :rules="[{required:true,message:'积分不能为空'},{type:'number',message:'积分必须为数字值'}]">
          <el-input type="age" :value.number="setting.score" auto-complete="off" @input="(v)=>changeSys({score:v*1})" style="width:90%;"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="contentBoxCont fwh_setting" v-if="tab == '2'">
      <el-form :model="sub" ref="sub" label-width="120px" class="demo-ruleForm">
        <el-form-item label="标题" prop="title" :rules="[{required:true,message:'标题不能为空'}]">
          <el-input :value="sub.title" auto-complete="off" @input="(v)=>setSub({title:v})" style="width:90%;"></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="picurl" :rules="[{required:true,message:'图片不能为空'}]">
          <div class="avatar_box">
            <el-upload
              class="avatar-uploader"
              :action="action"
              :show-file-list="false"
              :http-request="upload"
              :on-success="success"
              :before-upload="before">
              <img v-if="sub.picurl" :src="sub.picurl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <span>提示：支持JPG、PNG格式，360*200px</span>
          </div>
        </el-form-item>
        <el-form-item label="描述" prop="description" :rules="[{required:true,message:'描述不能为空'}]">
          <el-input type="textarea" :rows="5" :value="sub.description" auto-complete="off" @input="(v)=>setSub({description:v})" style="width:90%;"></el-input>
        </el-form-item>
        <el-form-item label="URL链接地址" prop="url" :rules="[{required:true,message:'URL链接地址不能为空'}]">
          <el-input :value="sub.url" auto-complete="off" @input="(v)=>setSub({url:v})" style="width:90%;"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="tab == '3'" class="fwh_menu">
      <div v-for="item in menu">
        <div class="name">{{item.name}}</div>
        <div class="sub_btn" v-for="button in item.sub_button">
          <span class="name">{{button.name}}</span>
          <span>{{button.type}}</span>
          <span>{{button.url}}</span>
        </div>
      </div>
    </div>
    <div style="text-align: center">
      <el-button type="primary" @click="submitForm">提交</el-button>
    </div>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import {getFwhMenuApi} from '../../../api/systemApi'
  export default{
    data(){
      return {
        tab: '1',
        menu: []
      }
    },
    computed: {
      ...mapGetters(['setting', 'sub', 'action']),
    },
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go', 'upload']),
      submitForm() {
        this.$refs.setting.validate((valid) => valid ? this.saveSys() : false);
      },
      changeType(){
        this.$router.replace({name: 'fwhSetting', query: {tab: this.tab}})
      },
      success(file){
        this.setSub({picurl: file.url})
      },
      setSub(sub){
        this.changeSys({sub: JSON.stringify({...this.sub, ...sub})})
      },
      before(file){
        const isJPG = file.type == 'image/jpeg' || file.type == 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 或者 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    },
    created () {
      this.tab = this.$route.query.tab || '1'
      this.getSetting();
      getFwhMenuApi().catch(({menu:{button}}) => {
        this.menu = button || [];
        console.log(this.menu)
      });
    },
  }
</script>
