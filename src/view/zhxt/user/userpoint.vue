<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>积分记录</span>
      <a @click="go(['userList'])" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div class="filterBox mgb20">
        <el-date-picker v-model="dateValue" type="daterange" placeholder="选择日期范围"/>
        <el-button type="primary" icon="search">搜索</el-button>
        <el-button type="primary">重置</el-button>
      </div>
      <div class="tableList mgb20">
        <el-table :data="list" border style="width: 100%">
          <MyColumn type="index" label="编号" fixed="left"/>
          <MyColumn prop="nickname" label="昵称"/>
          <MyColumn prop="name" label="姓名" align="center"/>
          <MyColumn prop="department" label="所属单位"/>
          <MyColumn prop="desc" label="描述"/>
          <MyColumn prop="recording" :formatter="date8Filter" width="160" label="时间"/>
          <MyColumn prop="point" label="获得积分" width="100" MyColum/>
          <MyColumn prop="pointLast" label="剩余积分" width="100" MyColum/>
          <MyColumn label="操作" fixed="right" width="120">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['usermanage'])">积分管理</el-button>
            </template>
          </MyColumn>
        </el-table>
      </div>
      <div class="pageSlide">
        <myPage :method="getMineScore"/>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import myPage from '../../../components/public/page/page.vue'
  import MyColumn from '../../../components/common/table/MyTableColumn'
  import filter from '../../../filters'
  export default {
    data() {
      return {
        dateValue: ''//时间筛选默认值
      }
    },
    components: {
      myPage, MyColumn
    },
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['getMineScore', 'clear', 'changeSelect', 'go']),
      ...filter,
      change(key, value){   //这是每个 change
        console.log(this)
        this.changeSelect({key, value});
        this.getMineScore();
      },
    },
    created () {
      this.getMineScore();
    },
    destroyed () {
      this.clear()
    }
  }
</script>
