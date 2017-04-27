<style lang="less" scoped>
  @import 'unions.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>工会组建审核列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelectInput title="搜索条件" :options="{'name':'单位名称'}" def-key="name" :change="change"/>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="name" label="单位名称" min-width="100"/>
          <MyColumn prop="address" label="单位地址" min-width="100"/>
          <MyColumn prop="type" label="单位类型" min-width="150"/>
          <MyColumn prop="industry" label="所属行业" min-width="150"/>
          <MyColumn prop="workers" label="职工总数" min-width="150"/>
          <MyColumn prop="feWorkers" label="女职工总数" min-width="150"/>
          <MyColumn prop="applyName" label="申请人姓名" min-width="150"/>
          <MyColumn prop="applyPhone" label="联系电话" min-width="150"/>
          <MyColumn prop="applyEmail" label="邮箱地址" min-width="150"/>
          <MyColumn prop="created" label="申请时间" :formatter="({created})=>date3Filter(created)" min-width="150"/>
          <MyColumn prop="audit" label="状态" :formatter="({audit})=>audit2Filter(audit)" min-width="150"/>
          <MyColumn label="操作" width="200px">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['depEdit',scope.row.id])">编辑审核</el-button>
              <el-button size="small" type="text" @click="del(scope.$index,scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="findDep"/>
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
      ...mapActions(['findDep', 'delDep', 'clear', 'changeSelect', 'go']),
      ...filter,
      change(key, value){
        this.changeSelect({key, value});
        this.findDep();
      },
      del(idx, {id, name}) {
        confirm(`确定删除健身项目[${name}]吗?`, 'warning').then(() => this.delDep([id, idx]))
      },
    },
    created () {
      this.findDep();
    },
    destroyed () {
      this.clear('dep')
    }
  }
</script>

