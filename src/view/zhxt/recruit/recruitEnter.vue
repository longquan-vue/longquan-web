<style lang="less" scoped>
  @import "recruit.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>{{query.name}}---意向报名名单管理</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"/>
      </a>
    </div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="性别" field="sex" :options="{1:'男',2:'女'}" :change="change"/>
        <MySelect title="婚姻" field="marriage" :options="{1:'已婚',2:'未婚'}" :change="change"/>
        <MySelectInput title="搜索条件" :options="{'name':'姓名','phone':'联系电话','province':'籍贯'}" def-key="name" :change="change"/>
        <!--<el-button type="primary" @click="" icon="plus">群发站内信</el-button>-->
        <el-button style="float: right" type="primary" @click="exportExl">导出EXCEL</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="name" label="姓名" min-width="80"/>
          <MyColumn prop="name" label="年龄" min-width="80"/>
          <MyColumn prop="sex" :formatter="sex2Filter" label="性别" min-width="80"/>
          <MyColumn prop="marriage" :formatter="marriage2Filter" label="婚姻" min-width="80"/>
          <MyColumn prop="phone" label="联系电话" min-width="80"/>
          <MyColumn prop="province" :formatter="({province,city})=>province+'·'+city" label="籍贯" min-width="80"/>
          <MyColumn prop="exp" label="有无相关工作经验" :formatter="signFilter" min-width="160"/>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getRecruitSigin"/>
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
    methods: {
      ...mapActions(['getRecruitSigin', 'changeSelect', 'clear', 'go', 'exportRecruitEntry']),
      ...filter,
      change(key, value){
        if (key == 'province') {
          this.changeSelect({key: 'city', value});
        }
        this.changeSelect({key, value});
        this.getRecruitSigin();
      },
      exportExl(){
        if (this.list.length <= 0) {
          return alert('没有数据！', 'warning')
        }
        const newTab = window.open('about:blank');
        this.exportRecruitEntry().then((url) => newTab.location.href = url)
      }
    },
    computed: {...mapGetters(['list', 'query'])},
    created () {
      // this.getRecruitSigin();
    },
    destroyed () {
      this.clear('recruit');
    }
  }
</script>

