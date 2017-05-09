<style lang="less" scoped>
  @import "./style.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>网站设置</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <el-form :model="setting" ref="relation" label-width="120px" class="fwh_setting">
      <!--<el-form-item label="名称：" required>-->
      <!--</el-form-item>-->
      <el-form-item label="LOGO：" prop="logo" :rules="[{required:true,message:'logo不能为空'}]">
        <Avatar :success="(logo)=>changeSys({logo})" width="200" height="200" :url="setting.logo"/>
        <span class="av_tip">大小为200 * 200，格式为JPG/PNG</span>
      </el-form-item>
      <el-form-item label="联系信息：" required>
        <el-row>
          <el-input placeholder="请输入..." :value="relation.email" @input="(v)=>relation.email = v">
            <template slot="prepend">Email：</template>
          </el-input>
        </el-row>
        <el-row v-for="(val,idx) in relation.other" :key="idx">
          <el-col :span="22">
            <el-input placeholder="请输入..." :value="val" @input="(v)=>relation.other[idx] = v"/>
          </el-col>
          <el-col :span="2">
            <img src="/static/zhxt/error.png" class="close" alt="close" @click="del(idx)">
          </el-col>
        </el-row>
        <el-row>
          <img src="/static/zhxt/add.png" class="add" alt="add" @click="$set(relation.other,relation.other.length,'')">
        </el-row>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import {alert} from '../../../actions'
  import Avatar from '../../../components/public/Avatar.vue'
  export default{
    data(){
      return {
        relation: {email: '', other: []}
      }
    },
    components: {Avatar},
    computed: {...mapGetters(['setting'])},
    methods: {
      ...mapActions(['getSetting', 'saveSys', 'changeSys', 'go']),
      submitForm() {
        this.changeSys({relation: JSON.stringify(this.relation)})
        this.$refs.relation.validate((valid) => valid ? this.saveSys() : false);
      },
      del(idx){
        this.$delete(this.relation.other, idx)
      }
    },
    created () {
      this.getSetting().then(() => this.relation = JSON.parse(this.setting.relation || '{"email":"","other":[]}'));
    },
  }
</script>
