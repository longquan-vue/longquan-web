<style lang="less">
   .table-mess{
       h2{ margin: 20px 0;font-size: 22px;color: #333333;}
   }
</style>
<template>
    <div class="laborUnionSet">
        <div class="table-mess" v-for="i in 3" :key="i">
            <h2>{{i}} 、 区职工俱乐部（直属单位）</h2>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="dept" label="部门名称">
                </el-table-column>
                <el-table-column prop="leader" label="负责人">
                </el-table-column>
                <el-table-column prop="job" label="职位">
                </el-table-column>
                <el-table-column prop="phone" label="联系方式">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    export default{
        data(){
            return{
                tableData: [{
                    leader: '王小虎',
                    dept: '产品研发部',
                    job: '上海市普陀区金沙江路 1518 弄',
                    phone:18683370859
                }, {
                    leader: '王小虎',
                    dept: '产品研发部',
                    job: '上海市普陀区金沙江路 1518 弄',
                    phone:18683370859
                }, {
                    leader: '王小虎',
                    dept: '产品研发部',
                    job: '上海市普陀区金沙江路 1518 弄',
                    phone:18683370859
                }, {
                    leader: '王小虎',
                    dept: '产品研发部',
                    job: '上海市普陀区金沙江路 1518 弄',
                    phone:18683370859
                }]
            }
        },
        components:{
        },
        computed: {
            ...mapGetters([ 'page','list']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
        },
        created () {

        },
        destroyed(){

        }
    }
</script>
