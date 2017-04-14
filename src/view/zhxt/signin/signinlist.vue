<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>签到列表</span>
    </div>
    <div class="contentBoxCont">
      <div class="filterBox mgb20">
        <MySelectInput title="搜索条件" :options="{'name':'姓名','depName':'所属单位','nickname':'昵称'}" def-key="name" :change="change"/>
        <el-date-picker v-model="dateValue" type="daterange" placeholder="选择日期范围"/>
        <el-button type="primary" icon="search" @click="search">搜索</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" label="编号" fixed="left"/>
          <MyColumn prop="nickname" label="昵称"/>
          <MyColumn prop="name" label="姓名"/>
          <MyColumn prop="depName" label="所属单位"/>
          <MyColumn prop="certification" label="职工认证"/>
          <MyColumn prop="point" label="签到获得积分"/>
          <MyColumn prop="time" label="签到时间"/>
          <MyColumn label="操作" fixed="right">
            <template scope="scope">
              <el-button type="text" size="small" @click="del(scope.$index, scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="findUserList"/>
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
  import MyInput from '../../../components/public/select/MyInput.vue'
  import filter from '../../../filters'
  export default {
    components: {
      MySelect, MySelectInput, MyPagination, MyInput, MyColumn, MyTable
    },
    data() {
      return {
        dateValue: [],//时间筛选默认值
      }
    },
    methods: {
      ...mapActions(['findUserList', 'clear', 'changeSelect', 'delUser', 'go']),
      ...filter,
      search(){
        if (this.dateValue.length > 0) {
          this.changePage({start: this.dateValue[0].getTime(), end: this.dateValue[1].getTime()})
        } else {
          this.changePage({start: null, end: null})
        }
        this.getMineScore();
      },
      reset(){
        this.dateValue = [];
        this.search();
      },
      del(){

      }
    },
    computed: {...mapGetters(['list'])},
    created () {
      this.findUserList();
    },
    destroyed () {
      this.clear()
    }
  }
</script>
