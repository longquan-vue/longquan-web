<style lang="less">
  @import './admin.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>职工列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelectInput title="搜索条件" :options="{'name':'姓名',position:'职位',mobile:'联系方式',userid:'账号'}" def-key="name" :change="change"/>
        <el-button style="float: right" type="primary" @click="go(['adminEdit','create'])" icon="plus">添加职工</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="avatar" label="头像" min-width="60">
            <template scope="scope">
              <img :src="scope.row.avatar" alt="avatar" class="avatar">
            </template>
          </MyColumn>
          <MyColumn prop="name" label="姓名" min-width="100"/>
          <MyColumn prop="userid" label="账号" min-width="100"/>
          <MyColumn prop="mobile" label="联系方式" min-width="100"/>
          <MyColumn prop="position" label="职位" min-width="100"/>
          <MyColumn prop="gender" label="性别" :formatter="({gender})=>sexFilter(gender*1)" min-width="100"/>
          <MyColumn label="操作">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['adminEdit',scope.row.id])">编辑</el-button>
              <el-button size="small" type="text" @click="del(scope.$index,scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getAdminList"/>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import MySelect from '../../../components/public/select/MySelect.vue'
  import MySelectInput from '../../../components/public/selectInput/MySelectInput.vue'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import filter from '../../../filters'
  import {confirm} from '../../../actions'
  export default {
    components: {
      MySelect, MySelectInput, MyPagination, MyColumn, MyTable
    },
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['getAdminList', 'delHealth', 'pauseHealth', 'clear', 'changeSelect', 'go']),
      ...filter,
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getAdminList();
      },
      del(idx, {id, name}) {
        confirm(`确定删除健身项目[${name}]吗?`, 'warning').then(() => this.delHealth([id, idx]))
      },
      pause(idx, {id, status, name}){
        confirm(`确定${status == 1 ? '暂停' : '开启'}健身项目[${name}]吗?`, 'warning').then(() => this.pauseHealth([id, `${idx}.status`, status == 1 ? 2 : 1]))
      },
    },
    created () {
      this.getAdminList();
    },
    destroyed () {
      this.clear()
    }
  }
</script>

