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
      method: Function
    },
    computed: {...mapGetters(['page','query'])},
    methods: {
      ...mapActions(['changePage','toUrl']),
      handleSizeChange(pageSize){
        this.changePage({pageSize});
        this.toUrl({query:{...this.query,pageSize}});
        this.method && this.method();
      },
      handleCurrentChange(page){
        this.changePage({page});
        this.toUrl({query:{...this.query,page}});
        this.method && this.method();
      }
    },
    created(){
      const {page = 1,pageSize} = this.query;
      this.changePage({page:page * 1,pageSize:(pageSize || this.page.pageSize) * 1});
      this.method && this.method();
    }
  }
</script>
