<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="page.page"
    :page-sizes="[5, 10, 20, 30]"
    :page-size="page.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="page.total">
  </el-pagination>
</template>
<script type="es6">
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default{
    name: 'myPage',
    props: {
      method: Function,
      series: {
        type: Boolean,
        default: false
      }
    },
    computed: {...mapGetters(['page'])},
    methods: {
      ...mapActions(['changePage', 'clear']),
      handleSizeChange(pageSize){
        this.changePage({pageSize, series: this.series});
        this.method && this.method();
      },
      handleCurrentChange(page){
        this.changePage({page, series: this.series});
        this.method && this.method();
      }
    },
    destroyed(){
      this.clear()
    }
  }
</script>
