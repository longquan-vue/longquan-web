<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centerhealth.less";
</style>
<template>
    <div class="centerMess">
        <appHead title="我报名的健身项目"></appHead>
        <ul class="centerMessList">
            <li v-for="(item,index) in list" flex @click="go(['centeractivitydetail',item.id])">
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
    import filters from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            appHead
        },
        computed: {...mapGetters(['login', 'list']),
        },
        methods:{
            ...mapActions(['getMineHealth','clear', 'delMethod', 'changePage','go']),
            ...filters,
            openCode(){

            },
            del(){

            }
        },
        created () {
            this.getMineHealth();   //
        },
        destroyed(){
            this.clear()
        }
    }
</script>
