<style lang="less">
    @import "../../../../static/normal.less";
    @import "./recruitManageForm.less";
</style>
<template>
    <div class="centerCruitForm" style="padding-top:50px;">
        <div class="centerMessHead" style="background-color:#FFB033;">
            <div flex>
                <div box="1" flex items="center" style="padding-left:10px;">
                    <a href="javascript:history.go(-1);"> <img class="return" src="../../../../static/wx/return.png"> </a>
                </div>
                <div box="4" flex items="center" justify="center">
                    <h2>意向报名表单</h2>
                </div>
                <div box="1" flex items="center">
                    <a class="a">全部导出</a>
                </div>
            </div>
        </div>

        <div class="excelForm">
            <div class="excelFormHead" flex justify="between">
                <span>招聘车间电焊工</span>
                <span>共128名</span>
            </div>

            <scroller lock-y scrollbar-x ref="scroller">
                <div class="box1">
                    <el-table :data="tableData" border>
                        <el-table-column prop="name" label="姓名"></el-table-column>
                        <el-table-column prop="age" label="年龄"></el-table-column>
                        <el-table-column prop="sex" label="性别"></el-table-column>
                        <el-table-column prop="merrige" label="婚姻"></el-table-column>
                        <el-table-column prop="phohe" label="联系电话"></el-table-column>
                        <el-table-column prop="address" width="180" label="籍贯"></el-table-column>
                        <el-table-column prop="job" label="有无工作经验"></el-table-column>
                    </el-table>
                </div>
            </scroller>

        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import { Scroller } from 'vux'
    export default{
        data(){
            return{
                tableData: [{
                    name: '王小虎',
                    age: 23,
                    sex:'男',
                    merrige:'已婚',
                    phohe:18683370859,
                    address: '上海市普陀区金沙江路 1518 弄',
                    job:'有'
                }, {
                    name: '王小虎',
                    age: 23,
                    sex:'男',
                    merrige:'已婚',
                    phohe:18683370859,
                    address: '上海市普陀区金沙江路 1518 弄',
                    job:'有'
                },{
                    name: '王小虎',
                    age: 23,
                    sex:'男',
                    merrige:'已婚',
                    phohe:18683370859,
                    address: '上海市普陀区金沙江路 1518 弄',
                    job:'有'
                },{
                    name: '王小虎',
                    age: 23,
                    sex:'男',
                    merrige:'已婚',
                    phohe:18683370859,
                    address: '上海市普陀区金沙江路 1518 弄',
                    job:'有'
                },]
            }
        },
        components:{
            appHead , Scroller
        },
        computed: {...mapGetters(['list'])},
        methods:{
            ...mapActions(['getRecruitSigin','clear','getMine','changePage']),
            ...filter,
        },
        async created () {
            await this.getRecruitSigin();
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
        },
        destroyed(){
            this.clear()
        }
    }
</script>
