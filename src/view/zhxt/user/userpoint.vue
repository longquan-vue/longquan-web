<template>
  <div class="contentBox">
    <div class="contentBoxtitle">
      <span>积分记录</span>
      <a @click="goBack" style="float:right;">
        <el-button type="primary" icon="arrow-left"></el-button>
      </a>
    </div>
    <div class="contentBoxCont">
      <div class="filterBox mgb20">
        <el-date-picker v-model="dateValue" type="daterange" placeholder="选择日期范围">
        </el-date-picker>
        <el-button type="primary" icon="search">搜索</el-button>
        <el-button type="primary">重置</el-button>
      </div>
      <div class="tableList mgb20">
        <el-table :data="list" border style="width: 100%">
          <el-table-column type="index" label="编号" fixed="left"></el-table-column>
          <el-table-column prop="nickname" label="昵称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="department" label="所属单位" show-overflow-tooltip></el-table-column>
          <el-table-column prop="desc" label="描述"></el-table-column>
          <el-table-column prop="time" label="时间"></el-table-column>
          <el-table-column prop="point" label="获得积分" show-overflow-tooltip></el-table-column>
          <el-table-column prop="pointLast" label="剩余积分" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" fixed="right" width="150px">
            <template scope="scope">
              <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">积分管理</el-button>
            </template>
          </el-table-column>
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
  import filter from '../../../filters'
  export default {
    data() {
      return {
        dateValue: '',//时间筛选默认值
        currentPage: 1,
      }
    },
    components: {
      myPage
    },
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['getMineScore', 'clear', 'changeSelect', 'go']),
      ...filter,
      goBack(){
        this.$router.go(-1);
      },
      change(key, value){   //这是每个 change
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
