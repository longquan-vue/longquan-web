<style lang="less">
   .table-mess{
       h2{ margin: 20px 0;font-size: 22px;color: #333333;}
   }
</style>
<template>
    <div class="wzzyLaborUnion" style="padding-top:20px;">
        <div class="pagewrap">
            <div class="wzzy-content">
                <el-row :gutter="30">
                    <el-col :span="17">
                        <div class="grid-left">
                            <div class="the-place">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>机构介绍</el-breadcrumb-item>
                                    <el-breadcrumb-item>组织机构</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>组织机构</a></div>
                            <div class="wzzy-sub-content">
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
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="grid-right grid-right-sub">
                            <tip></tip>
                            <someIcon></someIcon>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'
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
            tip,someIcon,lastDynamic
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
