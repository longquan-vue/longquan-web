<style lang="less">
    @import './user.less';
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

                <mySelect title="职工认证" field="audit" :options="{0:'全部',1:'未认证',2:'认证中',3:'已认证',4:'认证失败'}" value="0" :change="change"></mySelect>
                <mySelect title="是否冻结" field="marriage" :options="{0:'全部',1:'是',2:'否'}" value="0" :change="change"></mySelect>

                <span>
                    积分：<el-input v-model="score" placeholder="" style="width:100px;"  @blur="inputSearch('score',score)"></el-input> <em>以上</em>
                </span>

                <mySelectInput title="搜索条件" :options="{'name':'姓名','idCard':'身份证号','depName':'所属单位','phone':'电话号码','nickname':'昵称'}"
                               valueLabel="name" :change="change" :searchVal="searchVal" :handleIconClick="handleIconClicked"></mySelectInput>
            </div>
            <div class="btn mgb20">
                <el-button type="primary" @click="dialogFormVisible = true" icon="plus">群发站内信</el-button>
            </div>
            <div class="tableList mgb20">
                <el-table :data="list" border style="width: 100%">
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
                                       @click="go(['useredit',scope.row.id])">编辑</el-button>
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
            <div class="pageSlide"><myPage :method="findUserList"/></div>
        </div>

        <myDialog title="提示" :uid="uid" :delNum="1" content="您确定要删除此条信息吗" :result="result" @on-result-change="onResultChange" :method="delUser"></myDialog>

    </div>
</template>
<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import mySelect from '../../../components/public/select/mySelect.vue'
    import mySelectInput from '../../../components/public/selectInput/mySelectInput.vue'
    import myPage from '../../../components/public/page/page.vue'
    import myDialog from '../../../components/public/dialog/dialog.vue'
    import {date2Filter,sex2Filter,date3Filter,marriage2Filter,auditFilter} from '../../../filters'
    export default {
        data() {
            return {
                tbindex:-1,
                formLabelWidth: '80px',
                ageValue:'',
                score:'',
                searchVal:'',
                uid:'',
                result:false  //删除弹框控制
            }
        },
        components: {
            mySelect,mySelectInput,myPage,myDialog
        },
        methods: {
            handleEdit(index, row) {
                this.$router.push('useredit');
            },
            handleDelete(index, row) {
                console.log(index, row);
                this.uid=row.id;
                this.tbindex=index;
                this.result=true;
            },
            onResultChange(val){
                this.result=val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
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
            ...mapActions(['findUserList','changePage','clearPage','changeSelect','delUser','go']),
            date2Filter,sex2Filter,date3Filter,marriage2Filter,auditFilter,
            change(key,value){   //这是每个 change
                this.changeSelect({key,value});
                this.findUserList();
            },
            inputSearch(key,value){
                // console.log(this.score);
                this.changeSelect({key,value});
                this.findUserList();
            },
            handleIconClicked(data){  //搜索的函数
                console.log(data);
                // let {key,value}=data;
                // console.log({key,value});
                this.changeSelect(data);
                this.findUserList();
            }
        },
        computed: {...mapGetters(['list','page'])},
        created () {
            this.findUserList();
        },
        destroyed () {
        }
    }
</script>

