<style lang="less">
    .dialog-demo2{
        .weui-dialog{ border-radius: 10px;background: none;}
        .dialog-cont{
            position: relative;
            >img{ position: relative;top: 0.2rem}
            >img.def{ width: 3rem; top: 0.6rem;z-index: 2}
            .dialog-cont-box{ background-color: #ffffff;position: relative;
                border-radius: 10px;overflow: hidden;}
        }
        .dialog-title{ height: 1.6rem;line-height: 1.6rem;
            position: relative;background: url('/static/wx/pophead.png') no-repeat center;
            background-size: cover;font-size: 0.48rem;color: #ffffff;
            span{ position: absolute;right: 10px;}
        }
        .dialog-box{ padding: 0.8rem 0.4rem;color: #666666;font-size: 0.4rem;}
        .dialog-btn{
            padding-bottom: 0.8rem;
            a{ background-color: #FDB915;font-size: 0.48rem;width: 4.9333333rem;
                height: 1.2rem;line-height: 1.2rem;color: #ffffff;margin: auto;
                display: block;border-radius: 1.2rem}
        }
        .dialog-btn2{
            padding-bottom: 1.2rem;font-size: 0;;
            a{ background-color: #FDB915;font-size: 0.48rem;width: 2.5rem;
                height: 1rem;line-height: 1rem;color: #ffffff;margin: 0 0.5px;
                display: inline-block;}
            a:nth-child(1){ border-top-left-radius: 0.5rem;border-bottom-left-radius: 0.5rem}
            a:nth-child(2){ border-top-right-radius: 0.5rem;border-bottom-right-radius: 0.5rem}
        }
    }
</style>
<template>
    <div v-transfer-dom>
        <x-dialog v-model="show" class="dialog-demo2" :scroll="false" :hideOnBlur="true">
            <div class="dialog-cont">
                <div class="dialog-cont-box">
                    <p class="dialog-title">{{title}} </p>
                    <div class="dialog-box">
                        {{content}}
                    </div>
                    <div class="dialog-btn" v-if="btns.btn">
                        <a @click="close(btns.action)" >{{btns.btn}}</a>
                    </div>
                    <div class="dialog-btn2" v-if="!btns.btn">
                        <a @click="cancle(btns.action)">{{btns.btn1}}</a>
                        <a @click="show=false">{{btns.btn2}}</a>
                    </div>
                </div>
            </div>
        </x-dialog>
    </div>
</template>
<script type="es6">
    import {XDialog, TransferDomDirective as TransferDom} from 'vux'
    export default{
        name: 'myConfirmDialog',
        data(){
            return {
                show: false,
            }
        },
        props: {
            title: String,
            content: String,
            btns: {
                type: Object,
                default: () => {btn: '确定'}
            },
            isShow: Boolean,
        },
        directives: {
            TransferDom
        },
        components: {
            XDialog
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
            close(act){
                act && act();
                this.show = false;
            },
            cancle(act){
                act && act();
                this.show = false;
            }
        }
    }

</script>
