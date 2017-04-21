<style lang="less">
  @import './poll.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>投票选举列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="投票状态" field="status" :options="{1:'报名中',2:'已结束'}" :change="change"/>
        <MyInput title="投票名称" field="entry" :change="change"/>
        <el-button style="float: right" type="primary" @click="go(['voteEdit','create'])" icon="plus">添加投票</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" label="编号" fixed="left"/>
          <MyColumn prop="title" label="投票选举标题" width="120"/>
          <MyColumn prop="score" label="积分奖励（积分/天）"/>
          <MyColumn prop="status" label="问卷状态"/>
          <MyColumn prop="start" label="投票时间" :formatter="date4Filter" width="170"/>
          <MyColumn prop="created" label="发布时间" :formatter="({created})=>date3Filter(created)" width="170"/>
          <MyColumn prop="time" label="投票次数（次/天/人）" width="120"/>
          <MyColumn prop="days" label="连续可投天数" :formatter="entryType" width="160"/>
          <MyColumn prop="repetition" label="是否可以重复投票" width="120"/>
          <MyColumn prop="sync" label="同步显示" width="160"/>
          <MyColumn prop="status" label="操作" :formatter="stateType" width="120"/>
          <MyColumn label="操作" fixed="right" width="300px">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['voteEdit',scope.row.id])">编辑</el-button>
              <el-button size="small" type="text" @click="go(['activityEnter',scope.row.id])">导出统计结果</el-button>
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
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import {mapGetters, mapActions} from 'vuex'
  import MySelect from '../../../components/public/select/MySelect.vue'
  import MyInput from '../../../components/public/select/MyInput.vue'
  import filter from '../../../filters'
  import {confirm} from '../../../actions'
  export default {
    components: {
      MySelect, MyInput, MyPagination, MyColumn, MyTable
    },
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['clear', 'getPollList', 'changeSelect', 'delPoll', 'go']),
      ...filter,
      del(idx, {id, name}) {
        confirm(`确定删除投票调查[${name}]吗?`, 'warning').then(() => this.delPoll([id, idx]))
      },
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getPollList()
      },
    },
    created () {
      this.changeSelect({key: 'type', value: 1});
      this.getPollList()
    },
    destroyed () {
      this.clear('poll')
    }
  }
</script>

