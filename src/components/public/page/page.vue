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
        computed: {...mapGetters(['page'])},
        methods: {
            ...mapActions(['changePage', 'clearPage']),
            handleSizeChange(pageSize){
                this.changePage({pageSize});
                this.method();
            },
            handleCurrentChange(page){
                this.changePage({page});
                this.method();
            }
        },
        destroyed(){
            this.clearPage()
        }
    }

</script>
