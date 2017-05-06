<style lang="less" scoped>
  @import "./health.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>{{query.name}}---预约报名名单管理</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="性别" field="sex" :options="{1:'男',2:'女'}" :change="change"/>
        <MySelect title="婚姻" field="marriage" :options="{1:'已婚',2:'未婚'}" :change="change"/>
        <MySelect title="用户类型" field="audit" :options="{1:'普通用户',2:'职工认证用户'}" :change="change"/>
        <MySelectInput title="搜索条件" :options="{'name':'姓名','idCard':'身份证号','depName':'所属单位','phone':'电话号码','nickname':'昵称'}" def-key="name" :change="change"/>
        <!--<el-button type="primary" @click="" icon="plus">群发站内信</el-button>-->
        <el-button style="float: right" type="primary" @click="exportExl">导出EXCEL</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="start" :formatter="date4Filter2" label="时间段" min-width="150"/>
          <MyColumn prop="name" label="姓名" min-width="100"/>
          <MyColumn prop="sex" :formatter="sex2Filter" label="性别" min-width="80"/>
          <MyColumn prop="idCard" label="身份证号" min-width="150"/>
          <MyColumn prop="depName" label="所属单位" min-width="150"/>
          <MyColumn prop="status" label="是否签到" :formatter="signFilter" min-width="120"/>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getHealthEnter"/>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import MySelect from '../../../components/public/select/MySelect.vue'
  import MySelectInput from '../../../components/public/selectInput/MySelectInput.vue'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import filter from '../../../filters'
  import {alert} from '../../../actions'
  export default {
    components: {MySelect, MySelectInput, MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list', 'query'])},
    methods: {
      ...mapActions(['getHealthEnter', 'changeSelect', 'clear', 'go', 'exportHealthEntry']),
      ...filter,
      change(key, value){
        this.changeSelect({key, value});
        this.getHealthEnter();
      },
      exportExl(){
        if (this.list.length <= 0) {
          return alert('没有数据！', 'warning')
        }
        const newTab = window.open('about:blank');
        this.exportHealthEntry().then((url) => newTab.location.href = url)
      }
    },
    created () {
      // this.getHealthEnter();
    },
    destroyed () {
      this.clear('health');
    }
  }
</script>

