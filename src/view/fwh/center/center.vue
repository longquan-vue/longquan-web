<style lang="less">
    @import "../../../../static/normal.less";
    @import "./center.less";
</style>
<template>
    <div class="personCenter">
        <div class="centerHead">
            <router-link to="centeredit">编辑</router-link>
            <div class="circle">
                <img :src="login.headimgurl">
            </div>
            <p>{{login.nickname}} <img v-if="login.audit==2" src="/static/wx/renzheng.png"></p>
            <div class="mess">
                <div flex>
                    <a box="1">年龄：{{diffFilter(login.birthday,'years')}}</a>
                    <a box="1">性别：{{sexFilter(login.sex)}}</a>
                    <a box="1">婚姻状态：{{marriageFilter(login.marriage)}}</a>
                </div>
            </div>
        </div>
        <div class="centerList">
            <cell title="我的积分" is-link link="/view/fwh/welfareDetail" :value="login.score">
                <img class="centerIcon" slot="icon"  style="display:block;margin-right:5px;" src="/static/wx/center/jifen.png">
            </cell>
            <cell title="我的消息" is-link link="/view/fwh/centermess" :value="login.msgNum">
                <img class="centerIcon" slot="icon" style="display:block;margin-right:5px;" src="/static/wx/center/xiaoxi.png">
            </cell>
            <cell title="我的福利" is-link link="/view/fwh/centerwelfare" :value="login.welfNum">
                <img class="centerIcon" slot="icon"  style="display:block;margin-right:5px;" src="/static/wx/center/fuli.png">
            </cell>
            <cell title="我参加的工会活动" is-link link="/view/fwh/centeractivity" :value="login.actNum">
                <img class="centerIcon" slot="icon" style="display:block;margin-right:5px;" src="/static/wx/center/huodong.png">
            </cell>
            <cell title="我报名的健身项目" is-link link="/view/fwh/centerhealth" :value="login.sportNum">
                <img class="centerIcon" slot="icon"  style="display:block;margin-right:5px;" src="/static/wx/center/health.png">
            </cell>
            <cell title="我收藏的招聘信息" is-link link="/view/fwh/centerrecruit" :value="login.actNum">
                <img class="centerIcon" slot="icon"  style="display:block;margin-right:5px;" src="/static/wx/center/collect.png">
            </cell>
        </div>
        <div class="centerList">
            <cell title="职工认证" value="已认证" v-if="login.audit==2">
                <img slot="icon" class="centerIcon"  style="display:block;margin-right:5px;" src="/static/wx/center/renz.png">
            </cell>
            <cell title="职工认证" is-link  value="去认证" v-if="login.audit!=2">
                <img slot="icon" class="centerIcon"  style="display:block;margin-right:5px;" src="/static/wx/center/renz.png">
            </cell>
        </div>

    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import { Cell, Group } from 'vux'
    export default{
        data(){
            return{

            }
        },
        components:{
            Cell,Group
        },
        computed: {...mapGetters(['login','data'])},
        methods:{
            ...mapActions(['getMine','goto','clear']),
            ...filter
        },
        created () {
            this.getMine();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
