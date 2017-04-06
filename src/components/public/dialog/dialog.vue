<template>
    <el-dialog :title="title" v-model="myResult" size="tiny">
        <span>{{content}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="myResult = false">取 消</el-button>
            <el-button type="primary" @click="del">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script type="es6">
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    export default{
        name: 'myDialog',
        data(){
          return {
              // dialogVisible:this.dialogVisible
              myResult:this.result
          }
        },
        props: {
            method: Function,
            title: String,
            content: String,
            result:Boolean,
            uid:String,
            delNum:Number
        },
        watch: {
            result(val) {
                this.myResult = val;//新增result的watch，监听变更并同步到myResult上
            },
            myResult(val){
                this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知
            }
        },
        computed: {...mapGetters(['page'])},
        methods: {
            ...mapActions(['changePage', 'clearPage']),
            del(){
                this.method([this.uid,this.delNum]);
            }
        },
        destroyed(){

        }
    }

</script>
