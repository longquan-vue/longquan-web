<style lang="less" scoped>
  @import 'unions.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>组织架构列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelectInput title="搜索条件" :options="{'name':'名称','parent':'上级单位','adminName':'负责人'}" def-key="name" :change="change"/>
        <el-button style="float:right;" type="primary" @click="go(['depEdit','create'])" icon="plus">添加单位</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="name" label="单位名称" min-width="100"/>
          <MyColumn prop="parent" label="上级单位" :formatter="({parent})=>parent||'无'" min-width="100"/>
          <MyColumn prop="adminName" label="负责人" :formatter="({adminName})=>adminName||'无'" min-width="150"/>
          <MyColumn prop="position" label="职位" :formatter="({position})=>position||'无'" min-width="150"/>
          <MyColumn prop="mobile" label="联系电话" :formatter="({mobile})=>mobile||'无'" min-width="150"/>
          <MyColumn label="操作" width="150" fixed="right">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['depEdit',scope.row.id])">编辑</el-button>
              <el-button size="small" type="text" @click="del(scope.$index,scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="findDepList"/>
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
      ...mapActions(['findDepList', 'delDep', 'clear', 'changeSelect', 'go']),
      ...filter,
      change(key, value){
        this.changeSelect({key, value});
        this.findDepList();
      },
      del(idx, {id, name}) {
        confirm(`确定删单位[${name}]吗?`, 'warning').then(() => this.delDep([id, idx]))
      },
    },
    created () {
      // this.findDepList();
    },
    destroyed () {
      this.clear('dep')
    }
  }
</script>

