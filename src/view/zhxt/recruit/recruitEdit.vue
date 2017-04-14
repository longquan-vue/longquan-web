<style lang="less">
  @import 'recruit.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>招聘信息列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="招聘状态" field="status" :options="{1:'报名中',2:'已结束'}" :change="change"/>
        <MySelectInput :options="{'name':'活动名称','sponsor':'主办单位','coSponsor':'协办单位','organizer':'承办单位'}" def-key="name" :change="change"/>
        <el-button type="primary" @click="go(['activityEdit','create'])" icon="plus">添加招聘信息</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" label="编号"/>
          <MyColumn prop="job" label="招聘职位"/>
          <MyColumn prop="company" label="用人单位"/>
          <MyColumn prop="address" label="公司地址"/>
          <MyColumn prop="num" label="招聘人数"/>
          <MyColumn prop="pay" label="薪资待遇"/>
          <MyColumn prop="linkmans" label="联系人"/>
          <MyColumn prop="phones" label="联系电话"/>
          <MyColumn prop="claim" label="招聘要求"/>
          <MyColumn prop="treatment" label="福利待遇"/>
          <MyColumn prop="depatrment" label="发布机关"/>
          <MyColumn prop="created" label="发布时间"/>
          <MyColumn label="操作">
            <template scope="scope">
              <el-button type="text" size="small" @click="go('recruitEdit', scope.row.id)">编辑</el-button>
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
  export default {
    components: {
      MySelect, MySelectInput, MyPagination, MyColumn, MyTable
    },
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['getRecruit', 'clear', 'changeSelect', 'go']),
      ...filter,
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getHealth();
      },
      del(idx, {id, name}){
        this.$confirm(`确定删除招聘信息[${name}]吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => this.deleteActivity([id, idx]))
      }
    },
    created () {
      this.getRecruit();
    },
    destroyed () {
      this.clear()
    }
  }
</script>

