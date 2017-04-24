<style lang="less" scoped>
  @import './health.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>健身项目列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="项目类型" field="type" :options="{1:'单人项目',2:'双人项目',3:'多人项目'}" :change="change"/>
        <MySelectInput title="搜索条件" :options="{'name':'项目名称'}" def-key="name" :change="change"/>
        <el-button style="float: right" type="primary" @click="go(['healthEdit','create'])" icon="plus">添加健身项目</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" label="编号"/>
          <MyColumn prop="name" label="名称" min-width="100"/>
          <MyColumn prop="type" label="类型" :formatter="spotType" min-width="100"/>
          <MyColumn prop="score" label="报名所需积分" min-width="150"/>
          <MyColumn label="操作" width="200">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['healthEdit',scope.row.id])">编辑</el-button>
              <el-button size="small" type="text" @click="go(['healthEnter',scope.row.id,{name:scope.row.name}])">预约管理</el-button>
              <el-button size="small" type="text" @click="pause(scope.$index,scope.row)">{{scope.row.status == 1 ? '暂停' : '开启'}}</el-button>
              <el-button size="small" type="text" @click="del(scope.$index,scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getHealth"/>
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
    components: {MySelect, MySelectInput, MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['getHealth', 'delHealth', 'pauseHealth', 'clear', 'changeSelect', 'go']),
      ...filter,
      change(key, value){
        this.changeSelect({key, value});
        this.getHealth();
      },
      del(idx, {id, name}) {
        confirm(`确定删除健身项目[${name}]吗?`, 'warning').then(() => this.delHealth([id, idx]))
      },
      pause(idx, {id, status, name}){
        confirm(`确定${status == 1 ? '暂停' : '开启'}健身项目[${name}]吗?`, 'warning').then(() => this.pauseHealth([id, `${idx}.status`, status == 1 ? 2 : 1]))
      },
    },
    created () {
      this.getHealth();
    },
    destroyed () {
      this.clear('health')
    }
  }
</script>

