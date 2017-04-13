<style lang="less">

</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>活动报名列表</span>
      <a @click="go(['activityList'])" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div class="btnGroup mgb20">
        <MySelect title="性别" field="sex" :options="{1:'男',2:'女'}" :change="change"/>
        <MySelect title="婚姻" field="marriage" :options="{1:'已婚',2:'未婚'}" :change="change"/>
        <MySelect title="用户类型" field="audit" :options="{1:'普通用户',2:'职工认证用户'}" :change="change"/>
        <MySelectInput title="搜索条件" :options="{'name':'姓名','idCard':'身份证号','depName':'所属单位','phone':'电话号码','nickname':'昵称'}" def-key="name" :change="change"/>
      </div>
      <div class="btn mgb20">
        <!--<el-button type="primary" @click="" icon="plus">群发站内信</el-button>-->
        <el-button type="primary" @click="exportExl">导出EXCEL</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list" border style="width: 100%">
          <MyColumn type="index" label="编号" fixed="left"/>
          <MyColumn prop="nickname" label="昵称"/>
          <MyColumn prop="name" label="姓名"/>
          <MyColumn prop="idCard" label="身份证"/>
          <MyColumn prop="sex" :formatter="sex2Filter" label="性别"/>
          <MyColumn prop="marriage" :formatter="marriage2Filter" label="婚姻"/>
          <MyColumn prop="birthday" :formatter="date2Filter" label="生日" width="120"/>
          <MyColumn prop="phone" label="电话"/>
          <MyColumn prop="address" label="邮寄地址" width="120"/>
          <MyColumn prop="depName" label="所属单位" width="120"/>
          <MyColumn prop="position" label="岗位名称" width="120"/>
          <MyColumn prop="score" label="报名时间" width="120"/>
          <MyColumn prop="audit" label="用户类型" :formatter="userFilter" width="120"/>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getEnter"/>
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
  export default {
    components: {
      MySelect, MySelectInput, MyPagination, MyColumn, MyTable
    },
    methods: {
      ...mapActions(['getEnter', 'changeSelect', 'clear', 'go', 'exportEntry']),
      ...filter,
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getEnter();
      },
      exportExl(){
        const newTab = window.open('about:blank');
        this.exportEntry().then((url) => newTab.location.href = url)
      }
    },
    computed: {...mapGetters(['list'])},
    created () {
      this.getEnter();
    },
    destroyed () {
      this.clear();
    }
  }
</script>

