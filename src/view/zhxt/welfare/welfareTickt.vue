<style lang="less">

</style>
<template>
    <div class="contentBox">
        <!--<transition name="move" mode="out-in"><router-view></router-view></transition>-->
        <div class="contentBoxtitle"><span>券类福利列表</span></div>
        <div class="contentBoxCont">
            <div class="mgb20">
                <span>
                    <el-date-picker v-model="dateValue" type="daterange" placeholder="选择日期范围">
                     </el-date-picker>
                </span>

                <span>
                    福利状态：<el-select v-model="welfareSelect.value" placeholder="请选择" style="width:100px;">
                            <el-option v-for="item in welfareSelect.options" :key="item.label" :label="item.label" :value="item.value">
                            </el-option>
                          </el-select>
                </span>
                <span>
                     <el-select v-model="typeSelect.value" placeholder="请选择" style="width:120px;">
                    <el-option v-for="item in typeSelect.options" :key="item.label" :label="item.label" :value="item.value">
                    </el-option>
                    </el-select>
                    <el-input style="width:150px;"
                              placeholder="请输入搜索内容"
                              icon="search"
                              v-model="searchVal"
                              :on-icon-click="handleIconClick">
                    </el-input>
                </span>
                <el-button type="primary" @click="add(2)" icon="plus" style="float:right;">添加券类福利</el-button>
            </div>
            <div class="tableList mgb20">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column type="index" label="编号" fixed="left"></el-table-column>
                    <el-table-column prop="name" label="福利名称"></el-table-column>
                    <el-table-column prop="support" label="福利提供方" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="starttime" label="福利开始时间"></el-table-column>
                    <el-table-column prop="endtime" label="福利结束时间"></el-table-column>
                    <el-table-column prop="publishtime" label="福利发布时间" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="needpoint" label="兑换所需积分" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="all" label="福利总量" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="times" label="人均兑换次数" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="status" label="福利状态" show-overflow-tooltip></el-table-column>
                    <el-table-column label="是否暂停" width="150px">
                        <template scope="scope">
                            <el-button type="primary"
                                       size="small"
                                       @click="handleEdit(scope.$index, scope.row)">暂停</el-button>
                            <!--<el-button-->
                                    <!--size="small"-->
                                    <!--type="primary"-->
                                    <!--@click="handlePoint">取消暂停</el-button>-->
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" fixed="right" width="150px">
                        <template scope="scope">
                            <el-button type="text"
                                       size="small"
                                       @click="add(1)">编辑</el-button>
                            <!--<el-button-->
                                    <!--size="small"-->
                                    <!--type="text"-->
                                    <!--@click="handlePoint">兑换</el-button>-->
                            <el-button
                                    size="small"
                                    type="text"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
                tableData: [{
                    name:'万达电影票兑换券',
                    support:'成都爱创业科技有限公司',
                    starttime:'2017-03-25 10:30',
                    endtime:'2017-03-28 18:30',
                    publishtime:'2017-03-24 10:30',
                    needpoint:520,
                    all:'1000',
                    times:1,
                    status:'已结束'
                }, {
                    name:'万达电影票兑换券',
                    support:'成都爱创业科技有限公司',
                    starttime:'2017-03-25 10:30',
                    endtime:'2017-03-28 18:30',
                    publishtime:'2017-03-24 10:30',
                    needpoint:520,
                    all:'1000',
                    times:1,
                    status:'已结束'
                },{
                    name:'万达电影票兑换券',
                    support:'成都爱创业科技有限公司',
                    starttime:'2017-03-25 10:30',
                    endtime:'2017-03-28 18:30',
                    publishtime:'2017-03-24 10:30',
                    needpoint:520,
                    all:'1000',
                    times:1,
                    status:'已结束'
                },{
                    name:'万达电影票兑换券',
                    support:'成都爱创业科技有限公司',
                    starttime:'2017-03-25 10:30',
                    endtime:'2017-03-28 18:30',
                    publishtime:'2017-03-24 10:30',
                    needpoint:520,
                    all:'1000',
                    times:1,
                    status:'已结束'
                },{
                    name:'万达电影票兑换券',
                    support:'成都爱创业科技有限公司',
                    starttime:'2017-03-25 10:30',
                    endtime:'2017-03-28 18:30',
                    publishtime:'2017-03-24 10:30',
                    needpoint:520,
                    all:'1000',
                    times:1,
                    status:'已结束'
                },],
                currentPage: 1,
                tbindex:-1,
                formLabelWidth: '80px',
                welfareSelect:{
                    options: [{
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项2',
                        label: '进行中'
                    }, {
                        value: '选项3',
                        label: '未开始'
                    }, {
                        value: '选项4',
                        label: '已结束'
                    }, {
                        value: '选项5',
                        label: '已暂停'
                    }],
                    value: '选项1'
                },
                typeSelect:{
                    options: [{
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项2',
                        label: '福利名称'
                    }, {
                        value: '选项3',
                        label: '提供方名称'
                    }],
                    value: '选项1'
                },
                searchVal:'',
                activeIndex2:'1',
                dateValue:''//筛选时间
            }
        },
        components: {
        },
        computed: {

        },
        methods: {
            handleDelete(index, row) {
                console.log(index, row);
                this.tbindex=index;
                this.dialogVisible=true;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);

            },
            deleteClick(index){
                this.tableData.splice(index,1);
                this.dialogVisible=false;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        this.dialogFormVisible=false;
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.dialogFormVisible=false;
                this.$refs[formName].resetFields();
            },
            handleError(){
                this.$notify.error({
                    title: '上传失败',
                    message: '图片上传接口上传失败，可更改为自己的服务器接口'
                });
            },
            handleIconClick(){  //搜索

            },
            handlePoint(){   //积分管理
                this.$router.push('userpoint');
            },
            handleSelect(){  //选择菜单列表

            },
            add(status){   //增加券类优惠
                this.$router.push({
                    path: "welfareTicktEdit",
                    query: {
                        id: status
                    }
                });
            }
        },
        created () {

        },
        destroyed () {

        }
    }
</script>

