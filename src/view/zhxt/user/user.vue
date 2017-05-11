<style lang="less">
  @import './user.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>用户列表</span></div>
    <div class="contentBoxCont">
      <div class="btnGroup mgb20">
        <MySelect title="性别" field="sex" :options="{1:'男',2:'女'}" :change="change"/>
        <MyInput title="年龄" field="birthday" :format="ageFilter" end="岁以上" :change="change"/>
        <MySelect title="婚姻" field="marriage" :options="{1:'已婚',2:'未婚'}" :change="change"/>
        <MySelect title="职工认证" field="audit" :options="{0:'未认证',1:'认证中',2:'已认证',3:'认证失败'}" :change="change"/>
        <MySelect title="是否冻结" field="marriage" :options="{0:'是',1:'否'}" :change="change"/>
        <MyInput title="积分" field="score" end="以上" :change="change"/>
        <MySelectInput title="搜索条件" :options="{'name':'姓名','idCard':'身份证号','depName':'所属单位','phone':'电话号码','nickname':'昵称'}" def-key="name" :change="change"/>
      </div>
      <div class="btn mgb20" v-if="false">
        <el-button type="primary" @click="dialogFormVisible = true" icon="plus">群发站内信</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list" :fit="true">
          <MyColumn type="index" fixed="left"/>
          <MyColumn label="昵称" min-width="150" :show-tooltip-when-overflow="false" >
            <template scope="scope">
              <span v-html="emoji(scope.row.nickname)"></span>
            </template>
          </MyColumn>
          <MyColumn prop="name" label="姓名" min-width="100"/>
          <MyColumn prop="idCard" label="身份证" min-width="140"/>
          <MyColumn prop="sex" :formatter="sex2Filter" label="性别" min-width="80"/>
          <MyColumn prop="marriage" :formatter="marriage2Filter" label="婚姻" min-width="80"/>
          <MyColumn prop="birthday" :formatter="date2Filter" label="生日" min-width="120"/>
          <MyColumn prop="phone" label="电话" min-width="140"/>
          <MyColumn prop="mail" label="邮箱" min-width="120"/>
          <MyColumn prop="address" label="邮寄地址" min-width="120"/>
          <MyColumn prop="depName" label="所属单位" min-width="120"/>
          <MyColumn prop="position" label="岗位名称" min-width="120"/>
          <MyColumn prop="audit" :formatter="auditFilter" label="职工认证" min-width="120"/>
          <MyColumn prop="score" label="剩余积分" min-width="120"/>
          <MyColumn prop="created" label="注册日期" :formatter="date3Filter" min-width="160"/>
          <MyColumn prop="deleted" label="是否冻结用户" :formatter="freezeFilter" min-width="140"/>
          <MyColumn label="操作" fixed="right" width="150">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['userEdit',scope.row.id])">编辑</el-button>
              <el-button size="small" type="text" @click="go(['userPoint',scope.row.id])">积分</el-button>
              <el-button size="small" type="text" @click="handleDelete(scope.row,scope.$index)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="findUserList"/>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import MySelect from '../../../components/public/select/MySelect.vue'
  import MySelectInput from '../../../components/public/selectInput/MySelectInput.vue'
  import MyInput from '../../../components/public/select/MyInput.vue'
  import filter from '../../../filters'
  import {confirm} from '../../../actions'
  export default {
    components: {MySelect, MySelectInput, MyPagination, MyInput, MyColumn, MyTable},
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['findUserList', 'clear', 'changeSelect', 'delUser', 'go']),
      ...filter,
      handleDelete({id, nickname}, idx) {
        confirm(`确定删除用户[${nickname}]吗?`, 'warning').then(() => this.delUser([id, idx]))
      },
      change(key, value){
        this.changeSelect({key, value});
        this.findUserList();
      },
    },
    created () {
      // this.findUserList();
    },
    destroyed () {
      this.clear()
    }
  }
</script>

