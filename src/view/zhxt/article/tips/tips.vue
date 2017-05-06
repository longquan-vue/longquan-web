<style lang="less" scoped>
  @import './tips.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>公示公告列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelectInput :options="{'title':'标题'}" def-key="title" :change="change"/>
        <el-date-picker v-model="dateValue" type="daterange" placeholder="选择日期范围"/>
        <el-button type="primary" icon="search" @click="search">搜索</el-button>
        <el-button style="float: right" type="primary" @click="go(['editTips','create'])" icon="plus">发布公告</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="title" label="标题" min-width="120"/>
          <MyColumn prop="files" label="附件" :formatter="({files})=>filesFilter(files)" min-width="110"/>
          <MyColumn prop="files" label="附件下载次数" :formatter="({files})=>filesNumFilter(files)" min-width="110"/>
          <MyColumn prop="num" label="浏览次数" min-width="110"/>
          <MyColumn prop="adminName" label="文章发布者" min-width="140"/>
          <MyColumn prop="created" label="发布时间" :formatter="({created})=>date3Filter(created)" min-width="170"/>
          <MyColumn label="操作" width="120px">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['editTips',scope.row.id])"> 编辑</el-button>
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
  import MyColumn from '../../../../components/common/table/MyTableColumn'
  import MyTable from '../../../../components/common/table/MyTable'
  import MyPagination from '../../../../components/public/page/MyPagination.vue'
  import MySelectInput from '../../../../components/public/selectInput/MySelectInput.vue'
  import filter from '../../../../filters'
  import {confirm} from '../../../../actions'
  export default {
    data() {
      return {
        dateValue: []
      }
    },
    components: {MySelectInput, MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['clear', 'findArticle', 'changeSelect', 'changePage', 'delArticle', 'go']),
      ...filter,
      del(idx, {id, name}) {
        confirm(`确定删除公示公告[${name}]吗?`, 'warning').then(() => this.delArticle([id, idx]))
      },
      change(key, value){
        this.changeSelect({key, value});
        this.findArticle([0, 0])
      },
      search(){
        if (this.dateValue.length > 0) {
          this.changePage({start: this.dateValue[0].getTime(), end: this.dateValue[1].getTime()})
        } else {
          this.changePage({start: null, end: null})
        }
        this.findArticle([0, 0]);
      },
    },
    created () {
      // this.findArticle([0, 0])
    },
    destroyed () {
      this.clear('article')
    }
  }
</script>

