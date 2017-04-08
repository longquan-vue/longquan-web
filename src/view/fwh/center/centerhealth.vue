<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centerhealth.less";
</style>
<template>
    <div class="centerMess">
        <appHead title="我报名的健身项目"></appHead>
        <ul class="centerMessList">
            <li v-for="(item,index) in list" flex @click="goto(['centeractivitydetail'])">
                <div>
                    <img :src="item.picUrl">
                </div>
                <div box="4">
                    <div>
                        <h2>
                            {{item.title}}
                            <i v-if="isEnd(item.endTime)">已过期</i>
                            <!--<i>已签到</i>-->
                            <a @click="openCode()"><img src="../../../../static/wx/center/sao.png">扫码签到</a>
                        </h2>
                        <p>兑换时间 : {{date3Filter(item.recording)}}</p>
                    </div>
                </div>
                <div box="1">
                    <a @click="del()"><img src="../../../../static/wx/recover.png"></a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import {date3Filter} from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    import { Toast ,MessageBox } from 'mint-ui';
    export default{
        data(){
            return{

            }
        },
        components:{
            appHead
        },
        computed: {...mapGetters(['list', 'page']),
        },
        methods:{
            ...mapActions(['goto','clear','getMineWelfare']),
            date3Filter,
            isEnd(endTime){
                return new Date().getTime()>endTime
            },
            openCode(){
                Toast('调用微信接口 打开二维码扫描');
            },
            del(){
                MessageBox.confirm('确定要执行此操作吗').then(function () {
                    alert('点击了确定')
                }).catch(function () {
                    alert('点击了取消')
                });
            }
        },
        created () {
            this.getMineWelfare()
        },
        destroyed(){
            this.clear()
        }
    }
</script>
