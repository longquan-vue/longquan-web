<style lang="less">

</style>
<template>
    <div class="contentBox">
        <!--<transition name="move" mode="out-in"><router-view></router-view></transition>-->
        <div class="contentBoxtitle">
            <span>用户列表</span>
            <a @click="goBack" style="float:right;"><el-button type="primary" icon="arrow-left"></el-button></a>
        </div>
        <div class="contentBoxCont">
            <div class="btnGroup mgb20">

                <mySelect title="是否签到" field="sign" :options="{0:'全部',1:'未签到',2:'已签到'}" value="0" :change="change"></mySelect>

                <mySelectInput title="搜索条件" :options="{'name':'姓名','idCard':'身份证号','depName':'所属单位','phone':'电话号码','nickname':'昵称'}"
                               valueLabel="name" :change="change" :searchVal="searchVal" :handleIconClick="handleIconClicked"></mySelectInput>
            </div>
            <div class="btn mgb20">
                <el-button type="primary" @click="" icon="plus">群发站内信</el-button>
                <el-button type="primary" @click="">导出EXCEL</el-button>
            </div>
            <div class="tableList mgb20">
                <el-table :data="enterList" border style="width: 100%">
                    <el-table-column type="index" label="编号" fixed="left"></el-table-column>
                    <el-table-column prop="nickname" label="昵称" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="idCard" label="身份证" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="sex" :formatter="sex2Filter" label="性别"></el-table-column>
                    <el-table-column prop="marriage" :formatter="marriage2Filter"  label="婚姻"></el-table-column>
                    <el-table-column prop="birthday" :formatter="date2Filter" label="生日" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="phone" label="电话" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="depName" label="所属单位" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="created" label="用户类型" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="sign" label="是否已签到" show-overflow-tooltip></el-table-column>
                </el-table>
            </div>
            <div class="pageSlide"><myPage :method="getEnter"/></div>
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
            goBack(){
                this.$router.go(-1);
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
            handlePoint(){   //积分管理
                this.$router.push('userpoint');
            },
            ...mapActions(['getEnter','changePage','clearPage','changeSelect','delUser','go']),
            date2Filter,sex2Filter,date3Filter,marriage2Filter,auditFilter,
            change(key,value){   //这是每个 change
                this.changeSelect({key,value});
                this.getEnter();
            },
            inputSearch(key,value){
                // console.log(this.score);
                this.changeSelect({key,value});
                this.getEnter();
            },
            handleIconClicked(data){  //搜索的函数
                console.log(data);
                // let {key,value}=data;
                // console.log({key,value});
                this.changeSelect(data);
                this.getEnter();
            }
        },
        computed: {...mapGetters(['enterList','page'])},
        created () {
            this.getEnter();
        },
        destroyed () {
        }
    }
</script>

