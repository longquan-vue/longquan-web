<template>
    <div class="contentBox">
        <div class="contentBoxtitle">
            <span>积分记录</span>
            <a @click="goBack" style="float:right;"><el-button type="primary" icon="arrow-left"></el-button></a>
        </div>
        <div class="contentBoxCont">
            <div class="filterBox mgb20">
                <el-date-picker v-model="dateValue" type="daterange" placeholder="选择日期范围">
                </el-date-picker>
                <el-button type="primary" icon="search">搜索</el-button>
                <el-button type="primary" >重置</el-button>
            </div>
            <div class="tableList mgb20">
                <el-table :data="tableData" border style="width: 100%">
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
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    export default {
        data() {
            return {
                dateValue:'',//时间筛选默认值
                tableData:[
                    {
                        nickname:'矢泽妮可',
                        name:'妮可妮可妮',
                        department:'lovelive团队',
                        desc:'兑换了万达电影票',
                        time:'2017-03-15 10:30',
                        point:'-500',
                        pointLast:50000,
                    },
                    {
                        nickname:'矢泽妮可',
                        name:'妮可妮可妮',
                        department:'lovelive团队',
                        desc:'获得一元红包',
                        time:'2017-03-15 10:30',
                        point:'-500',
                        pointLast:50000,
                    },
                    {
                        nickname:'矢泽妮可',
                        name:'妮可妮可妮',
                        department:'lovelive团队',
                        desc:'兑换了万达电影票',
                        time:'2017-03-15 10:30',
                        point:'+100',
                        pointLast:50000,
                    },
                    {
                        nickname:'矢泽妮可',
                        name:'妮可妮可妮',
                        department:'lovelive团队',
                        desc:'兑换了万达电影票',
                        time:'2017-03-15 10:30',
                        point:'-500',
                        pointLast:50000,
                    },
                    {
                        nickname:'矢泽妮可',
                        name:'妮可妮可妮',
                        department:'lovelive团队',
                        desc:'获得5元红包',
                        time:'2017-03-15 10:30',
                        point:'-500',
                        pointLast:50000,
                    },
                ],
                currentPage: 1,
            }
        },
        computed:{
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);

            },
            handleEdit(){
                this.$router.push('usermanage');
            }
        }
    }
</script>
