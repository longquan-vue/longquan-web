<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "healthPerson.less";
</style>
<template>
    <div class="healthDetail" style="background-color: #ffffff;height: 100%;overflow: scroll;padding-top:1.6533333rem;">
        <appHead title="多人报名人员表"></appHead>
        <div class="healthCont">
            <p>报名详情(多人项目),可以14人同时报名</p>
            <ul>
                <li>
                    <div class="timeLine">
                        <span>10:31-10:50</span>
                    </div>
                    <div class="siginList">
                        <grid :rows="7">
                            <grid-item v-for="i in 9" :key="i">
                                <span class="grid-center"><a><img src="/static/wx/img/1.jpg"></a></span>
                            </grid-item>
                        </grid>
                    </div>
                </li>

                <li>
                    <div class="timeLine">
                        <span>10:31-10:50</span>
                    </div>
                    <div class="siginList" flex items="center" >
                        <grid :rows="7">
                            <grid-item v-for="i in 20" :key="i">
                                <span class="grid-center"><a><img src="/static/wx/img/1.jpg"></a></span>
                            </grid-item>
                        </grid>
                    </div>
                </li>
            </ul>
        </div>


    </div>
</template>

<script type="es6">
    import { Grid, GridItem } from 'vux'
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import {date3Filter} from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    export default{
        data(){
            return{
            }
        },
        components:{
            appHead,GridItem,Grid
        },
        computed: {...mapGetters([ 'page','list']),
        },
        methods:{
            ...mapActions(['goto','getActivity','clear']),
            date3Filter,
            isEnd(endTime){
                return new Date().getTime()>endTime
            },
        },
        created () {

        },
        destroyed(){
            this.clear()
        }
    }
</script>
