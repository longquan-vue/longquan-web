<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./center.less";
</style>
<template>
    <div class="personCenter">
        <div class="centerHead">
            <router-link to="centeredit">编辑</router-link>
            <div class="circle">
                <img :src="mine.headimgurl">
            </div>
            <p>{{mine.nickname}} <img v-if="mine.audit" src="../../../../static/wx/renzheng.png"></p>
            <div class="mess">
                <div flex>
                    <a box="1">年龄：{{diffFilter(mine.birthday,'years')}}</a>
                    <a box="1">性别：{{sexFilter(mine.sex)}}</a>
                    <a box="1">婚姻状态：{{marriageFilter(mine.marriage)}}</a>
                </div>
            </div>
        </div>
        <div class="centerList">
            <mt-cell title="我的积分" to="/view/fwh/welfareDetail" is-link>
                <span class="circle">{{mine.score}}</span>
                <img slot="icon" src="../../../../static/wx/center/jifen.png" >
            </mt-cell>
            <mt-cell title="我的消息" to="/view/fwh/centermess" is-link>
                <span class="circle">{{mine.msgNum}}</span>
                <img slot="icon" src="../../../../static/wx/center/xiaoxi.png" >
            </mt-cell>
            <mt-cell title="我的福利" to="" is-link>
                <span class="circle">{{mine.welfNum}}</span>
                <img slot="icon" src="../../../../static/wx/center/fuli.png" >
            </mt-cell>
            <mt-cell title="我的活动" to="" is-link>
                <span class="circle">{{mine.actNum}}</span>
                <img slot="icon" src="../../../../static/wx/center/huodong.png" >
            </mt-cell>
        </div>
        <div class="centerList">
            <mt-cell title="职工认证" to="//github.com" is-link>
                <span v-if="mine.audit" style="color:#ffb033;">已认证</span>
                <span v-if="!mine.audit" style="color:#ffb033;">去认证</span>
                <img slot="icon" src="../../../../static/wx/center/renz.png" >
            </mt-cell>
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import {diffFilter,sexFilter,marriageFilter} from '../../../filters'
    export default{
        data(){
            return{

            }
        },
        components:{

        },
        computed: {...mapGetters(['mine','welfare'])},
        methods:{
            ...mapActions(['getMine','getWelfare','clear']),
            diffFilter,sexFilter,marriageFilter
        },
        created () {
            this.getMine();
        }
    }
</script>
