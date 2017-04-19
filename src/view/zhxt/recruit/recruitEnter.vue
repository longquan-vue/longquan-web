<style lang="less">

</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>{{query.name}}---意向报名名单管理</span>
      <a @click="go()" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
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
        <MyTable :data="list" border style="width: 100%">
          <MyColumn type="index" label="编号" fixed="left"/>
          <MyColumn prop="name" label="姓名"/>
          <MyColumn prop="name" label="年龄"/>
          <MyColumn prop="sex" :formatter="sex2Filter" label="性别"/>
          <MyColumn prop="marriage" :formatter="marriage2Filter" label="婚姻"/>
          <MyColumn prop="phone" label="联系电话"/>
          <MyColumn prop="province" :formatter="({province,city})=>province+'·'+city" label="籍贯"/>
          <MyColumn prop="exp" label="有无相关工作经验" :formatter="signFilter" width="160"/>
          <!--<MyColumn label="操作" fixed="right" width="300px">-->
          <!--<template scope="scope">-->
          <!--<el-button type="text" size="small" @click="go(['activityEdit',scope.row.id])">编辑</el-button>-->
          <!--<el-button size="small" type="text" @click="go(['activityEnter',scope.row.id])">查看报名表单</el-button>-->
          <!--<el-button size="small" type="text" @click="showCode(scope.row.ticket)">二维码</el-button>-->
          <!--<el-button size="small" type="text" @click="go(['activitySign',scope.row.id])">签到管理</el-button>-->
          <!--<el-button size="small" type="text" @click="del(scope.$index, scope.row)">删除</el-button>-->
          <!--</template>-->
          <!--</MyColumn>-->
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
  export default {
    components: {
      MySelect, MySelectInput, MyPagination, MyColumn, MyTable
    },
    methods: {
      ...mapActions(['getRecruitSigin', 'changeSelect', 'clear', 'go', 'exportRecruitEntry']),
      ...filter,
      change(key, value){   //这是每个 change
        if (key == 'province') {
          this.changeSelect({key: 'city', value});
        }
        this.changeSelect({key, value});
        this.getRecruitSigin();
      },
      exportExl(){
        if (this.list.length <= 0) {
          return this.$alert('没有数据！', '提示', {type: 'warning'})
        }
        const newTab = window.open('about:blank');
        this.exportRecruitEntry().then((url) => newTab.location.href = url)
      }
    },
    computed: {...mapGetters(['list', 'query'])},
    created () {
      this.getRecruitSigin();
    },
    destroyed () {
      this.clear();
    }
  }
</script>

