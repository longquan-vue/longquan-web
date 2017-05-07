<style lang="less" scoped>
  @import 'unions.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>区总领导列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelectInput title="搜索条件" :options="{'name':'名称','position':'职位'}" def-key="name" :change="change"/>
        <el-button style="float:right;" type="primary" @click="go(['leaderEdit','create'])" icon="plus">添加领导</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="name" label="姓名" min-width="100"/>
          <MyColumn prop="position" label="职位" min-width="150"/>
          <MyColumn prop="descript" label="简介" min-width="100"/>
          <MyColumn label="操作" width="150" fixed="right">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['leaderEdit',scope.row.id])">编辑</el-button>
              <el-button size="small" type="text" @click="del(scope.$index,scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="findLeader"/>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import MySelectInput from '../../../components/public/selectInput/MySelectInput.vue'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import filter from '../../../filters'
  import {confirm} from '../../../actions'
  export default {
    components: {MySelectInput, MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['findLeader', 'delLeader', 'clear', 'changeSelect', 'go']),
      ...filter,
      change(key, value){
        this.changeSelect({key, value});
        this.findLeader();
      },
      del(idx, {id, name}) {
        confirm(`确定删领导[${name}]吗?`, 'warning').then(() => this.delLeader([id, idx]))
      },
    },
    created () {
      // this.findLeader();
    },
    destroyed () {
      this.clear('leader')
    }
  }
</script>

