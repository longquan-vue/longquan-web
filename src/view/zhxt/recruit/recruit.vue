<style lang="less">
  @import 'recruit.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>招聘信息列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="招聘状态" field="status" :options="{1:'报名中',2:'已结束'}" :change="change"/>
        <MySelectInput :options="{'job':'招聘职位','company':'用人单位','address':'公司地址'}" def-key="job" :change="change"/>
        <el-button style="float:right;" type="primary" @click="go(['recruitEdit','create'])" icon="plus">添加招聘信息</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" label="编号"/>
          <MyColumn prop="name" label="标题" min-width="120"/>
          <MyColumn prop="job" label="招聘职位" min-width="120"/>
          <MyColumn prop="company" label="用人单位" min-width="120"/>
          <MyColumn prop="address" label="公司地址" min-width="120"/>
          <MyColumn prop="num" label="招聘人数" min-width="120"/>
          <MyColumn prop="pay" label="薪资待遇" min-width="120"/>
          <MyColumn prop="linkmans" label="联系人" :formatter="({linkmans})=>linkmans.join('，')" min-width="120"/>
          <MyColumn prop="phones" label="联系电话" :formatter="({phones})=>phones.join('，')" min-width="120"/>
          <MyColumn prop="claim" label="招聘要求" min-width="120"/>
          <MyColumn prop="treatment" label="福利待遇" min-width="120"/>
          <MyColumn prop="depatrment" label="发布机关" min-width="120"/>
          <MyColumn prop="created" label="发布时间" :formatter="({created})=>date3Filter(created)" min-width="160"/>
          <MyColumn label="操作" width="160">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['recruitEdit', scope.row.id])">编辑</el-button>
              <el-button type="text" size="small" @click="go(['recruitEnter', scope.row.id,{name:scope.row.name}])">报名意向</el-button>
              <el-button size="small" type="text" @click="del(scope.$index, scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getRecruit"/>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import MySelect from '../../../components/public/select/MySelect.vue'
  import MySelectInput from '../../../components/public/selectInput/MySelectInput.vue'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import filter from '../../../filters'
  import {confirm} from '../../../actions'
  export default {
    components: {MySelect, MySelectInput, MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['getRecruit', 'clear', 'delRecruit', 'changeSelect', 'go']),
      ...filter,
      change(key, value){
        this.changeSelect({key, value});
        this.getRecruit();
      },
      del(idx, {id, name}){
        confirm(`确定删除招聘信息[${name}]吗?`, 'warning').then(() => this.delRecruit([id, idx]))
      }
    },
    created () {
      this.getRecruit();
    },
    destroyed () {
      this.clear('recruit')
    }
  }
</script>

