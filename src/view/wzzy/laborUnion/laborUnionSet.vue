<style lang="less">
  .table-mess h2 {
    margin: 20px 0;
    font-size: 22px;
    color: #333333;
  }
</style>
<template>
  <div class="laborUnionSet">
    <div class="table-mess" v-for="(val,key) in list" :key="key">
      <h2 v-if="key != 'undefined'">{{key}}</h2>
      <el-table :data="val" border style="width: 100%">
        <el-table-column prop="name" label="部门名称"/>
        <el-table-column prop="adminName" label="负责人"/>
        <el-table-column prop="position" label="职位"/>
        <el-table-column prop="mobile" label="联系方式"/>
      </el-table>
    </div>
  </div>
</template>

<script type="es6">
  import {group} from '../../../filters'
  import {findDepListApi} from '../../../api/departmentApi'
  export default{
    data(){
      return {
        list: {}
      }
    },
    created () {
      findDepListApi({page: 1},0).then((data) => this.list = group(data.list, 'parent', (v) => v, (it) => it))
    },
    destroyed(){

    }
  }
</script>
