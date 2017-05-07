<style lang="less" scoped>
  @import 'echo.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>回音壁列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelectInput :options="{'title':'标题'}" def-key="title" :change="change"/>
        <el-button style="float: right" type="primary" @click="go(['echoEdit','create'])" icon="plus">发布</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="title" label="标题" min-width="120"/>
          <MyColumn prop="questioner" label="提问者" min-width="120"/>
          <MyColumn prop="quesTime" label="提问时间" :formatter="({quesTime})=>date3Filter(quesTime)" min-width="160"/>
          <MyColumn prop="replier" label="回答者" min-width="120"/>
          <MyColumn prop="status" label="是否显示" width="100">
            <template scope="scope">
              <el-button size="small" type="text" @click="pause(scope.$index,scope.row)">{{scope.row.status == 1 ? '关闭' : '显示'}}</el-button>
            </template>
          </MyColumn>
          <MyColumn prop="created" label="发布时间" :formatter="({created})=>date3Filter(created)" min-width="160"/>
          <MyColumn label="操作" width="100">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['echoEdit',scope.row.id])"> 编辑</el-button>
              <el-button size="small" type="text" @click="del(scope.$index, scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="findEcho"/>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import MySelectInput from '../../../components/public/selectInput/MySelectInput.vue'
  import filter from '../../../filters'
  import {confirm} from '../../../actions'
  export default {
    components: {MySelectInput, MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['clear', 'findEcho', 'changeSelect', 'delEcho', 'pauseEcho', 'go']),
      ...filter,
      del(idx, {id, title}) {
        confirm(`确定删除问题[${title}]吗?`, 'warning').then(() => this.delEcho([id, idx]))
      },
      change(key, value){
        this.changeSelect({key, value});
        this.findEcho()
      },
      pause(idx, {id, status, title}){
        confirm(`确定${status == 1 ? '关闭' : '显示'}问题[${title}]吗?`, 'warning').then(() => this.pauseEcho([id, `${idx}.status`, status == 1 ? 2 : 1]))
      },
    },
    created () {
      // this.findEcho()
    },
    destroyed () {
      this.clear('echo')
    }
  }
</script>

