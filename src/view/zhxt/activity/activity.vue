<style lang="less">
  @import './activity.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>活动列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="活动状态" field="status" :options="{1:'报名中',2:'已结束'}" :change="change"/>
        <MySelect title="报名权限" field="entry" :options="{1:'全部用户可报名',2:'认证用户可报名'}" :change="change"/>
        <MySelectInput title="搜索条件" :options="{'name':'活动名称','sponsor':'主办单位','coSponsor':'协办单位','organizer':'承办单位'}" def-key="name" :change="change"/>
        <el-button type="primary" @click="go(['activityEdit','create'])" icon="plus">添加工会活动</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" label="编号" fixed="left"/>
          <MyColumn prop="name" label="活动名称" width="120"/>
          <MyColumn prop="sponsor" label="主办方"/>
          <MyColumn prop="coSponsor" label="协办方"/>
          <MyColumn prop="organizer" label="承办方"/>
          <MyColumn prop="start" label="报名时间" :formatter="date5Filter" width="170"/>
          <MyColumn prop="entryStart" label="活动时间" :formatter="date4Filter" width="170"/>
          <MyColumn prop="place" label="活动地点" width="120"/>
          <MyColumn prop="entry" label="报名权限" :formatter="entryType" width="160"/>
          <MyColumn prop="current" label="报名人数" width="120"/>
          <MyColumn prop="score" label="报名所需积分" width="160"/>
          <MyColumn prop="status" label="活动状态" :formatter="stateType" width="120"/>
          <MyColumn label="操作" fixed="right" width="300px">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['activityEdit',scope.row.id])">编辑
              </el-button>
              <el-button size="small" type="text" @click="go(['activityEnter',scope.row.id])">查看报名表单
              </el-button>
              <el-button size="small" type="text" @click="showCode(scope.row.ticket)">二维码</el-button>
              <el-button size="small" type="text" @click="go(['activitySigned',scope.row.id])">签到管理</el-button>
              <el-button size="small" type="text" @click="del(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getActivity"/>
      </div>
      <el-dialog v-model="show" size="tiny">
        <h1 style="text-align: center;font-weight: bold">活动二维码</h1>
        <img width="100%" :src="code" alt="活动二维码">
      </el-dialog>
    </div>
  </div>
</template>
<script type="es6">
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import {mapGetters, mapActions} from 'vuex'
  import MySelect from '../../../components/public/select/MySelect.vue'
  import MySelectInput from '../../../components/public/selectInput/MySelectInput.vue'
  import filter from '../../../filters'
  export default {
    data() {
      return {
        show: false,
        code: ''
      }
    },
    components: {
      MySelect, MySelectInput, MyPagination, MyColumn, MyTable
    },
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['clear', 'getActivity', 'changeSelect', 'deleteActivity', 'go']),
      ...filter,
      del(idx, {id, name}) {
        this.$confirm(`确定删除活动[${name}]吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => this.deleteActivity([id, idx]))
      },
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getActivity()
      },
      showCode(ticket){
        this.code = `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${ticket}`
        this.show = true;
      }
    },
    created () {
      this.getActivity()
    },
    destroyed () {
      this.clear('activity')
    }
  }
</script>

