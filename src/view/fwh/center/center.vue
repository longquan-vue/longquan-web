<style lang="less" scoped>
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
            <p>{{login.nickname}} <img v-if="login.audit==2" src="../../../../static/wx/renzheng.png"></p>
            <div class="mess">
                <div flex>
                    <a box="1">年龄：{{diffFilter(login.birthday,'years')}}</a>
                    <a box="1">性别：{{sexFilter(login.sex)}}</a>
                    <a box="1">婚姻状态：{{marriageFilter(login.marriage)}}</a>
                </div>
            </div>
        </div>
        <div class="centerList">
            <mt-cell title="我的积分" to="/view/fwh/welfareDetail" is-link>
                <span class="circle">{{login.score}}</span>
                <img slot="icon" src="../../../../static/wx/center/jifen.png" >
            </mt-cell>
            <mt-cell title="我的消息" to="/view/fwh/centermess" is-link>
                <span class="circle">{{login.msgNum}}</span>
                <img slot="icon" src="../../../../static/wx/center/xiaoxi.png" >
            </mt-cell>
            <mt-cell title="我的福利" to="/view/fwh/centerwelfare" is-link>
                <span class="circle">{{login.welfNum}}</span>
                <img slot="icon" src="../../../../static/wx/center/fuli.png" >
            </mt-cell>
            <mt-cell title="我的活动" to="/view/fwh/centeractivity" is-link>
                <span class="circle">{{login.actNum}}</span>
                <img slot="icon" src="../../../../static/wx/center/huodong.png" >
            </mt-cell>
        </div>
        <div class="centerList">
            <mt-cell title="职工认证" to="//github.com" is-link>
                <span v-if="login.audit==2" style="color:#ffb033;">已认证</span>
                <span v-if="login.audit!=2" style="color:#ffb033;">去认证</span>
                <img slot="icon" src="../../../../static/wx/center/renz.png" >
            </mt-cell>
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    export default{
        data(){
            return{

            }
        },
        components:{

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
