<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "healthManage.less";
</style>
<template>
    <div class="health" style="background-color: #F0F0F0;height: 100%;overflow: scroll">
        <div class="healthList">
            <ul>
                <li flex v-for="(item,index) in list">
                    <div flex items="center" @click="go(['healthManageDetail',item.id])"><img :src="item.picUrl"></div>
                    <div box="1">{{item.name}}</div>
                    <div class="">
                        <img src="/static/wx/reEdit.png" @click="go(['healthManageEdit',item.id])">
                        <img src="/static/wx/repause.png" @click="pause(index,item)" v-if="item.status==1">
                        <img src="/static/wx/restart.png" @click="pause(index,item)" v-if="item.status==2">
                        <img src="/static/wx/recover.png" @click="del(index,item)">
                    </div>
                </li>
                <li flex>
                    <div flex items="center">
                        <a @click="go(['healthManageEdit','create'])"><img src="/static/wx/add.png"></a>
                    </div>
                    <div box="1">添加健身项目</div>
                </li>
            </ul>
        </div>

        <myConfirmDialog @on-result-change="onResultChange"  :title="title" :content="content" :btns="btns" :isShow="isshow"></myConfirmDialog>

    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import myConfirmDialog from '../../../components/public/confirmDialog/confirmDialog.vue'
    export default{
        data(){
            return{
                isshow:false,//控制弹窗
                title:'提示',   //控制弹窗标题
                content:'兑换成功',  //控制弹窗内容
                btns: {},
            }
        },
        components:{
            myConfirmDialog
        },
        computed: {...mapGetters(['list']),
        },
        methods:{
            ...mapActions(['go','clear','getHealth','clearPage','setListKeyVal','pauseHealth','delHealth']),
            isShow(val,index,{id,status}){
                if (val==1){   //暂停
                    this.content=status==1?'是否确定暂停该项目':'是否确定开启该项目';
                    this.btns={btn1:'是',btn2:'否',action:()=>{
                        this.pauseHealth([id, `${index}.status`, status == 1 ? 2 : 1])
                    }};
                    this.isshow=true;
                }else {
                    // this.img = '/static/wx/succ.png';
                    this.content='是否确定删除该项目';
                    this.btns={btn1:'是',btn2:'否',action:()=>{
                        this.delHealth([id,index]);
                    }};
                    this.isshow=true;
                }
            },
            onResultChange(val){
                this.isshow=val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
            },
            pause(index,item){
                this.isShow(1,index,item);
            },
            del(index,item){
                this.isShow(2,index,item);
            }
        },
        created () {
            this.getHealth()
        },
        destroyed(){
            this.clear()
        }
    }
</script>
