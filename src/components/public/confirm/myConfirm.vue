<style lang="less">

</style>
<template>
    <div v-transfer-dom>
        <confirm v-model="show" :title="title" @on-confirm="onConfirm">
            <p style="text-align:center;">{{content}}</p>
        </confirm>
    </div>
</template>
<script type="es6">
    import {Confirm, TransferDomDirective as TransferDom} from 'vux'
    export default{
        name: 'myConfirm',
        data(){
            return {
                show: false,
            }
        },
        props: {
            title: String,
            content: String,
            isShow: Boolean,
        },
        directives: {
            TransferDom
        },
        components: {
            Confirm
        },
        watch: {
            isShow(val) {
                this.show = val;//新增isShow的watch，监听变更并同步到show上
            },
            show(val){
                this.$emit("on-result-change", val);//③组件内对show变更后向外部发送事件通知
            }
        },
        methods: {
            onConfirm(){
                this.show = false;
            }
        }
    }

</script>
