<style lang="less">
  @import './user.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>用户列表</span></div>
    <div class="contentBoxCont">
      <div class="btnGroup mgb20">
        <mySelect title="性别" field="sex" :options="{1:'男',2:'女'}" value="x" :change="change"></mySelect>
        <myInput title="年龄" field="birthday" :format="ageFilter" end="岁以上" :change="change"></myInput>
        <mySelect title="婚姻" field="marriage" :options="{1:'已婚',2:'未婚'}" value="x" :change="change"></mySelect>
        <mySelect title="职工认证" field="audit" :options="{0:'未认证',1:'认证中',2:'已认证',3:'认证失败'}" value="x" :change="change"></mySelect>
        <mySelect title="是否冻结" field="marriage" :options="{0:'是',1:'否'}" value="x" :change="change"></mySelect>
        <myInput title="积分" field="score" end="以上" :change="change"></myInput>
        <mySelectInput title="搜索条件" :options="{'name':'姓名','idCard':'身份证号','depName':'所属单位','phone':'电话号码','nickname':'昵称'}" def-key="name" def-val="value" :change="change"></mySelectInput>
      </div>
      <div class="btn mgb20" v-if="false">
        <el-button type="primary" @click="dialogFormVisible = true" icon="plus">群发站内信</el-button>
      </div>
      <div class="tableList mgb20">
        <el-table :data="list" border style="width: 100%">
          <el-table-column type="index" label="编号" fixed="left"></el-table-column>
          <el-table-column prop="nickname" label="昵称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="idCard" label="身份证" show-overflow-tooltip></el-table-column>
          <el-table-column prop="sex" :formatter="sex2Filter" label="性别"></el-table-column>
          <el-table-column prop="marriage" :formatter="marriage2Filter" label="婚姻"></el-table-column>
          <el-table-column prop="birthday" :formatter="date2Filter" label="生日" show-overflow-tooltip></el-table-column>
          <el-table-column prop="phone" label="电话" show-overflow-tooltip></el-table-column>
          <el-table-column prop="mail" label="邮箱" show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="邮寄地址" show-overflow-tooltip></el-table-column>
          <el-table-column prop="depName" label="所属单位" show-overflow-tooltip></el-table-column>
          <el-table-column prop="position" label="岗位名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="audit" :formatter="auditFilter" label="职工认证"></el-table-column>
          <el-table-column prop="score" label="剩余积分"></el-table-column>
          <el-table-column prop="created" label="注册日期" :formatter="date3Filter" show-overflow-tooltip></el-table-column>
          <el-table-column prop="deleted" label="是否冻结用户" :formatter="freezeFilter"></el-table-column>
          <el-table-column label="操作" fixed="right" width="150px">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['useredit',scope.row.id])">编辑</el-button>
              <el-button size="small" type="text" @click="go(['userpoint',scope.row.id])">积分</el-button>
              <el-button size="small" type="text" @click="handleDelete(scope.row.id,scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pageSlide">
        <myPage :method="findUserList"/>
      </div>
    </div>
    <myDialog title="提示" :data="data" content="您确定要删除此条信息吗" ref="dialog" :show="show" :method="delUser"></myDialog>
  </div>
</template>
<script type="es6">
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import mySelect from '../../../components/public/select/mySelect.vue'
  import myInput from '../../../components/public/select/myInput.vue'
  import mySelectInput from '../../../components/public/selectInput/mySelectInput.vue'
  import myPage from '../../../components/public/page/page.vue'
  import myDialog from '../../../components/public/dialog/dialog.vue'
  import filter from '../../../filters'
  export default {
    data() {
      return {
        data: [],
        show: false  //删除弹框控制
      }
    },
    components: {
      mySelect, mySelectInput, myPage, myDialog, myInput
    },
    methods: {
      handleDelete(id, idx) {
        this.data = [id, idx];
        this.$refs.dialog.show()
      },
      ...mapActions(['findUserList', 'clear', 'changeSelect', 'delUser', 'go']),
      ...filter,
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.findUserList();
      },
    },
    computed: {...mapGetters(['list'])},
    created () {
      this.findUserList();
    },
    destroyed () {
      this.clear()
    }
  }
</script>

