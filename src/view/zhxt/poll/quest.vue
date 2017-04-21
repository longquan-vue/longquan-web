<style lang="less">
  @import './poll.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>问卷调查列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="问卷状态" field="status" :options="{1:'报名中',2:'已结束'}" :change="change"/>
        <MySelectInput :options="{'name':'问卷名称'}" def-key="name" :change="change"/>
        <el-button style="float: right" type="primary" @click="go(['questEdit','create'])" icon="plus">添加问卷</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" label="编号" fixed="left"/>
          <MyColumn prop="name" label="问卷标题" width="120"/>
          <MyColumn prop="sponsor" label="积分奖励"/>
          <MyColumn prop="coSponsor" label="问卷状态"/>
          <MyColumn prop="start" label="调查时间" :formatter="date5Filter" width="170"/>
          <MyColumn prop="entryStart" label="发布时间" :formatter="date4Filter" width="170"/>
          <MyColumn prop="place" label="人均答题次数" width="120"/>
          <MyColumn prop="entry" label="题数" :formatter="entryType" width="160"/>
          <MyColumn prop="current" label="答卷数量" width="120"/>
          <MyColumn prop="score" label="同步显示" width="160"/>
          <MyColumn label="操作" fixed="right" width="300px">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['questEdit',scope.row.id])">编辑</el-button>
              <el-button size="small" type="text" @click="go(['questEdit',scope.row.id])">导出问卷统计结果</el-button>
              <el-button size="small" type="text" @click="">导出全部答案</el-button>
              <el-button size="small" type="text" @click="del(scope.$index, scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getActivity"/>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import {mapGetters, mapActions} from 'vuex'
  import MySelect from '../../../components/public/select/MySelect.vue'
  import MySelectInput from '../../../components/public/selectInput/MySelectInput.vue'
  import filter from '../../../filters'
  import {confirm} from '../../../actions'
  export default {
    components: {
      MySelect, MySelectInput, MyPagination, MyColumn, MyTable
    },
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['clear', 'getActivity', 'changeSelect', 'deleteActivity', 'go']),
      ...filter,
      del(idx, {id, name}) {
        confirm(`确定删除调查问卷[${name}]吗?`, 'warning').then(() => this.deleteActivity([id, idx]))
      },
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getActivity()
      },
    },
    created () {
      this.getActivity()
    },
    destroyed () {
      this.clear('poll')
    }
  }
</script>

