<style lang="less">
  @import './health.css';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>健身项目列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelect title="项目类型" field="type" :options="{1:'单人项目',2:'双人项目',3:'多人项目'}" :change="change"/>
        <MySelectInput title="搜索条件" :options="{'name':'项目名称'}" def-key="name" :change="change"/>
        <el-button type="primary" @click="go(['healthEdit','create'])" icon="plus">添加健身项目</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" label="编号"/>
          <MyColumn prop="name" label="名称"/>
          <MyColumn prop="type" label="类型" :formatter="spotType"/>
          <MyColumn prop="score" label="报名所需积分"/>
          <MyColumn label="操作">
            <template scope="scope">
              <el-button type="text" size="small" @click="go(['healthEdit',scope.row.id])">编辑</el-button>
              <el-button size="small" type="text" @click="go(['healthEdit',scope.row.id])">预约管理</el-button>
              <el-button size="small" type="text" @click="">暂停</el-button>
              <el-button size="small" type="text" @click="">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="getHealth"/>
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
    name: 'recruitment',
    data() {
      return {
        tbindex: -1,
        searchVal: '',
      }
    },
    components: {
      MySelect, MySelectInput, MyPagination, MyColumn, MyTable
    },
    computed: {...mapGetters(['list'])},
    methods: {
      ...mapActions(['getHealth', 'clear', 'changeSelect', 'go']),
      ...filter,
      change(key, value){   //这是每个 change
        this.changeSelect({key, value});
        this.getHealth();
      },
      inputSearch(key, value){
        // console.log(this.score);
        this.changeSelect({key, value});
        this.getHealth();
      },
      handleIconClicked(data){  //搜索的函数
        console.log(data);
        // let {key,value}=data;
        // console.log({key,value});
        this.changeSelect(data);
        this.getHealth();
      }
    },
    created () {
      this.getHealth();
    },
    destroyed () {
      this.clear()
    }
  }
</script>

