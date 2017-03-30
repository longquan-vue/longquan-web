<style lang="less">
    @import 'user';
</style>
<template>
    <div class="contentBox">
        <!--<transition name="move" mode="out-in"><router-view></router-view></transition>-->
        <div class="contentBoxtitle"><span>用户列表</span></div>
        <div class="contentBoxCont">
            <div class="btnGroup mgb20">

                <mySelect title="性别" field="sex" :options="{0:'全部',1:'男',2:'女'}" value="0" :change="change"></mySelect>
                <span>
                        年龄：<el-input v-model="ageValue" placeholder="" style="width:100px;"></el-input> <em>岁以上</em>
                </span>
                <mySelect title="婚姻" field="marriage" :options="{0:'全部',1:'已婚',2:'未婚'}" value="0" :change="change"></mySelect>

                <span>
                        职工认证：<el-select v-model="certificationSelect.value" placeholder="请选择" style="width:100px;">
                                <el-option v-for="item in certificationSelect.options" :key="item.label" :label="item.label" :value="item.value">
                                </el-option>
                              </el-select>
                    </span>
                <span>
                        是否冻结：<el-select v-model="freezeSelect.value" placeholder="请选择" style="width:100px;">
                                <el-option v-for="item in freezeSelect.options" :key="item.label" :label="item.label" :value="item.value">
                                </el-option>
                              </el-select>
                    </span>
                <span>
                        积分：<el-input v-model="pointValue" placeholder="" style="width:100px;"></el-input> <em>以上</em>
                    </span>

                <span>
                        搜索条件：<el-select v-model="typeSelect.value" placeholder="请选择" style="width:120px;">
                                <el-option v-for="item in typeSelect.options"  :key="item.label" :label="item.label" :value="item.value">
                                </el-option>
                              </el-select>
                                <el-input style="width:150px;"
                                          placeholder="请输入搜索内容"
                                          icon="search"
                                          v-model="searchVal"
                                          :on-icon-click="handleIconClick">
                                </el-input>
                    </span>
            </div>
            <div class="btn mgb20">
                <el-button type="primary" @click="dialogFormVisible = true" icon="plus">群发站内信</el-button>
            </div>
            <div class="tableList mgb20">
                <el-table :data="userList" border style="width: 100%">
                    <el-table-column type="index" label="编号" fixed="left"></el-table-column>
                    <el-table-column prop="nickname" label="昵称" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="idCard" label="身份证" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="sex" :formatter="sex2Filter" label="性别"></el-table-column>
                    <el-table-column prop="marriage" :formatter="marriage2Filter"  label="婚姻"></el-table-column>
                    <el-table-column prop="birthday" :formatter="date2Filter" label="生日" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="phone" label="电话" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="mail" label="邮箱" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="address" label="邮寄地址" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="depName" label="所属单位" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="position" label="岗位名称" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="audit" :formatter="auditFilter" label="职工认证"></el-table-column>
                    <el-table-column prop="score" label="剩余积分"></el-table-column>
                    <el-table-column prop="created" label="注册日期" :formatter="date3Filter" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="freeze" label="是否冻结用户">

                    </el-table-column>
                    <el-table-column label="操作" fixed="right" width="150px">
                        <template scope="scope">
                            <el-button type="text"
                                       size="small"
                                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                                    size="small"
                                    type="text"
                                    @click="handlePoint">积分</el-button>
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
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import mySelect from '../../../components/public/select/mySelect.vue'
    import {date2Filter,sex2Filter,date3Filter,marriage2Filter,auditFilter} from '../../../filters'
    export default {
        data() {
            return {
                currentPage: 1,
                tbindex:-1,
                formLabelWidth: '80px',
                sexSelect:{
                    options: [{
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项2',
                        label: '男'
                    }, {
                        value: '选项3',
                        label: '女'
                    }],
                    value: ''
                },
                merrySelect:{
                    options: [{
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项2',
                        label: '已婚'
                    }, {
                        value: '选项3',
                        label: '未婚'
                    }],
                    value: ''
                },
                ageValue:'',
                certificationSelect:{
                    options: [{
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项2',
                        label: '已认证'
                    }, {
                        value: '选项3',
                        label: '未认证'
                    }, {
                        value: '选项3',
                        label: '审核中'
                    }],
                    value: ''
                },
                freezeSelect:{
                    options: [{
                        value: '选项1',
                        label: '全部'
                    }, {
                        value: '选项2',
                        label: '是'
                    }, {
                        value: '选项3',
                        label: '否'
                    }],
                    value: ''
                },
                pointValue:'',
                typeSelect:{
                    options: [{
                        value: '选项1',
                        label: '姓名'
                    }, {
                        value: '选项2',
                        label: '身份照号'
                    }, {
                        value: '选项3',
                        label: '所属单位'
                    }, {
                        value: '选项4',
                        label: '电话号码'
                    }, {
                        value: '选项5',
                        label: '昵称'
                    }],
                    value: ''
                },
                searchVal:''
            }
        },
        components: {
            mySelect
        },
        methods: {
            handleEdit(index, row) {
                this.$router.push('useredit');
            },
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
            ...mapActions(['findUserList']),
            date2Filter,sex2Filter,date3Filter,marriage2Filter,auditFilter,
            change(...v){
                console.log(v)
            }
        },
        computed: {...mapGetters(['userList'])},
        created () {
            this.findUserList();
        },
        destroyed () {

        }
    }
</script>

