<style lang="less" scoped>
  @import "./welfare.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>福利预告列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <el-date-picker v-model="dateValue" type="daterange" placeholder="选择发布时间..."/>
        <el-button type="primary" icon="search" @click="search">搜索</el-button>
        <MySelectInput :options="{'content':'内容','adminName':'发布者'}" def-key="content" :change="change"/>
        <span style="float:right;">
          <el-button style="float:right;" type="primary" @click="go(['welfarePrevEdit','create'])" icon="plus">添加福利预告</el-button>
        </span>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="content" label="内容" min-width="120"/>
          <MyColumn prop="adminName" label="发布者" min-width="120"/>
          <MyColumn prop="created" label="发布时间" :formatter="({created})=>date3Filter(created)" min-width="160"/>
          <MyColumn label="是否显示" width="100">
            <template scope="scope">
              <el-button type="primary" size="small" @click="pause(scope.$index,scope.row)">{{scope.row.status==2?'显示':'隐藏'}}</el-button>
            </template>
          </MyColumn>
          <MyColumn label="操作" fixed="right" width="110">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['welfarePrevEdit',scope.row.id])">编辑</el-button>
              <el-button size="small" type="text" @click="del(scope.$index, scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="findArticle"/>
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
    data() {
      return {
        dateValue: []
      }
    },
    components: {MySelectInput, MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['clear', 'findArticle', 'delArticle', 'changePage', 'pauseArticle', 'changeSelect', 'go']),
      ...filter,
      del(idx, {id, content}) {
        confirm(`确定删除福利预告[${content}]吗?`, 'warning').then(() => this.delArticle([id, idx]))
      },
      change(key, value){
        this.changeSelect({key, value});
        this.findArticle([6, 0]);
      },
      pause(idx, {id, status, content}){
        confirm(`确定${status == 2 ? '显示' : '隐藏'}福利预告[${content}]吗?`, 'warning').then(() => this.pauseArticle([id, `${idx}.status`, status == 1 ? 2 : 1]))
      },
      search(){
        if (this.dateValue.length > 0) {
          this.changePage({start: this.dateValue[0].getTime(), end: this.dateValue[1].getTime()})
        } else {
          this.changePage({start: null, end: null})
        }
        this.findArticle([6, 0]);
      },
    },
    created () {
      this.findArticle([6, 0]);
    },
    destroyed () {
      this.clear('welfare')
    }
  }
</script>

