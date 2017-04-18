<style lang="less">

</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>活动签到列表</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="是否签到" field="status" :options="{0:'未签到',1:'已签到'}" :change="change"/>
        <MySelectInput title="搜索条件" :options="{'name':'姓名','idCard':'身份证号','depName':'所属单位','nickname':'昵称'}" def-key="name" :change="change"/>
        <!--<el-button type="primary" @click="" icon="plus">群发站内信</el-button>-->
        <el-button style="float: right" type="primary" @click="exportExl">导出EXCEL</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" label="编号" fixed="left"/>
          <MyColumn prop="nickname" label="昵称"/>
          <MyColumn prop="name" label="姓名"/>
          <MyColumn prop="idCard" label="身份证"/>
          <MyColumn prop="sex" :formatter="sex2Filter" label="性别"/>
          <MyColumn prop="marriage" :formatter="marriage2Filter" label="婚姻"/>
          <MyColumn prop="birthday" :formatter="date2Filter" label="生日" width="120"/>
          <MyColumn prop="phone" label="电话"/>
          <MyColumn prop="depName" label="所属公司" width="120"/>
          <MyColumn prop="audit" label="用户类型" :formatter="userFilter" width="130"/>
          <MyColumn prop="status" label="是否已签到" :formatter="signFilter" width="120"/>
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
      ...mapActions(['getEnter', 'changeSelect', 'go', 'clear']),
      ...filter,
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getEnter();
      },
      exportExl(){
        if (this.list.length <= 0) {
          return this.$alert('没有数据！', '提示', {type: 'warning'})
        }
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

