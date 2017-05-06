<style lang="less" scoped>
  @import "welfare.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>券类福利列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="福利状态" field="status" :options="{0:'未开始',1:'进行中',2:'已暂停',3:'已结束'}" :change="change"/>
        <MySelectInput :options="{'name':'福利名称','provider':'提供方名称'}" def-key="name" :change="change"/>
        <el-date-picker v-model="dateValue" type="daterange" placeholder="选择日期范围"/>
        <el-button type="primary" icon="search" @click="search">搜索</el-button>
        <el-button style="float:right;" type="primary" @click="go(['welfareTicketEdit','create'])" icon="plus">添加券类福利</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="name" label="福利名称" min-width="120"/>
          <MyColumn prop="provider" label="福利提供方" min-width="120"/>
          <MyColumn prop="startTime" label="福利开始时间" :formatter="({startTime})=>date3Filter(startTime)" min-width="160"/>
          <MyColumn prop="endTime" label="福利结束时间" :formatter="({endTime})=>date3Filter(endTime)" min-width="160"/>
          <MyColumn prop="created" label="福利发布时间" :formatter="({created})=>date3Filter(created)" min-width="160"/>
          <MyColumn prop="score" label="兑换所需积分" min-width="140"/>
          <MyColumn prop="total" label="福利总量" min-width="120"/>
          <MyColumn prop="time" label="人均兑换次数" min-width="140"/>
          <MyColumn prop="status" :formatter="stateType" label="福利状态" min-width="120"/>
          <!--<MyColumn label="是否暂停" width="150px">-->
          <!--<template scope="scope">-->
          <!--<el-button type="primary" size="small" @click="pause(scope.$index,scope.row)">{{scope.row.status==1?'暂停':'开启'}}</el-button>-->
          <!--</template>-->
          <!--</MyColumn>-->
          <MyColumn label="操作" fixed="right" width="200">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['welfareTicketEdit',scope.row.id])">编辑</el-button>
              <el-button type="text" size="small" @click="go('welfareTicketEdit', scope.row.id)">二维码</el-button>
              <el-button type="text" size="small" @click="go('welfareTicketEdit', scope.row.id)">兑换</el-button>
              <el-button size="small" type="text" @click="del(scope.$index, scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getWelfare"/>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import MyTable from '../../../components/common/table/MyTable'
  import MyPagination from '../../../components/public/page/MyPagination.vue'
  import MySelect from '../../../components/public/select/MySelect.vue'
  import MySelectInput from '../../../components/public/selectInput/MySelectInput.vue'
  import filter from '../../../filters'
  import {confirm} from '../../../actions'
  export default {
    data() {
      return {
        dateValue: []
      }
    },
    components: {MySelect, MySelectInput, MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['clear', 'getWelfare', 'delWelfare', 'changePage', 'pauseWelfare', 'changeSelect', 'go']),
      ...filter,
      del(idx, {id, name}) {
        confirm(`确定删除券类福利[${name}]吗?`, 'warning').then(() => this.delWelfare([id, idx]))
      },
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getWelfare()
      },
      pause(idx, {id, status, name}){
        confirm(`确定${status == 1 ? '暂停' : '开启'}券类福利[${name}]吗?`, 'warning').then(() => this.pauseWelfare([id, `${idx}.status`, status == 1 ? 2 : 1]))
      },
      search(){
        if (this.dateValue.length > 0) {
          this.changePage({start: this.dateValue[0].getTime(), end: this.dateValue[1].getTime()})
        } else {
          this.changePage({start: null, end: null})
        }
        this.getWelfare();
      },
    },
    created () {
      this.changeSelect({key: 'type', value: 3})
      // this.getWelfare()
    },
    destroyed () {
      this.clear('welfare')
    }
  }
</script>

