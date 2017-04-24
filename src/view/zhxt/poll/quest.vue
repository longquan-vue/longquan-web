<style lang="less">
  @import './poll.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>问卷调查列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="问卷状态" field="status" :options="{0:'未开始',1:'进行中',2:'已结束'}" :change="change"/>
        <MySelectInput :options="{'name':'问卷名称'}" def-key="name" :change="change"/>
        <el-button style="float: right" type="primary" @click="go(['questEdit','create'])" icon="plus">添加问卷</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="title" label="问卷标题" min-width="100"/>
          <MyColumn prop="score" label="积分奖励" min-width="100"/>
          <MyColumn prop="status" label="问卷状态" min-width="100"/>
          <MyColumn prop="start" label="调查时间" :formatter="date4Filter" min-width="100"/>
          <MyColumn prop="created" label="发布时间" :formatter="({created})=>date3Filter(created)" min-width="160"/>
          <MyColumn prop="time" label="人均答题次数" min-width="130"/>
          <MyColumn prop="questionNum" label="题数" min-width="70"/>
          <MyColumn prop="answerNum" label="答卷数量" min-width="100"/>
          <MyColumn prop="sync" label="同步显示" :formatter="syncFilter" min-width="130"/>
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
        <MyPagination :method="getPollList"/>
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
  import filter from '../../../filters'
  import {confirm} from '../../../actions'
  export default {
    components: {MySelect, MySelectInput, MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['clear', 'getPollList', 'changeSelect', 'delPoll', 'go']),
      ...filter,
      del(idx, {id, title}) {
        confirm(`确定删除调查问卷[${title}]吗?`, 'warning').then(() => this.delPoll([id, idx]))
      },
      change(key, value){
        this.changeSelect({key, value});
        this.getPollList()
      },
    },
    created () {
      this.changeSelect({key: 'type', value: 0});
      this.getPollList()
    },
    destroyed () {
      this.clear('poll')
    }
  }
</script>

