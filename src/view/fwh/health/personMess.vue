<style lang="less">
    @import "./personMess.less";
</style>
<template>
    <div class="personMess">
        <appHead title="基本资料"></appHead>
        <div class="headImg">
            <img :src="data.headimgurl">
        </div>
        <p class="headTitle">基本资料</p>
        <ul>
            <li flex>
                <div>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</div>
                <div box="1">{{data.nickname}}</div>
            </li>
            <li flex>
                <div>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</div>
                <div box="1">{{sexFilter(data.sex)}}</div>
            </li>
            <li flex>
                <div>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日:</div>
                <div box="1">{{data.birthday?diffFilter(data.birthday,'years'):'暂无'}}</div>
            </li>
            <li flex>
                <div>婚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姻:</div>
                <div box="1">{{marriageFilter(data.marriage)}}</div>
            </li>
            <li flex>
                <div>联系电话:</div>
                <div box="1">{{data.phone?data.phone:'暂无'}}</div>
            </li>
            <li flex>
                <div>邮寄地址:</div>
                <div box="1">{{data.address?data.address:'暂无'}}</div>
            </li>
            <li flex>
                <div>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱:</div>
                <div box="1">{{data.email?data.email:'暂无'}}</div>
            </li>
        </ul>
        <p class="headTitle" v-if="data.audit==2">职工认证</p>
        <ul v-if="data.audit==2">
            <li flex>
                <div>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</div>
                <div box="1">{{data.name}}</div>
            </li>
            <li flex>
                <div>身份证号:</div>
                <div box="1">{{data.idCard?data.idCard:'暂无'}}</div>
            </li>
            <li flex>
                <div>所属单位:</div>
                <div box="1">{{data.depName?data.depName:'暂无'}}</div>
            </li>
            <li flex>
                <div>岗位名称:</div>
                <div box="1">{{data.position?data.position:'暂无'}}</div>
            </li>
        </ul>
    </div>
</template>

<script type="es6">
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import filters from '../../../filters'
    import {Datetime, Group, XButton} from 'vux'
    import appHead from '../../../components/public/apphead/Apphead.vue'
    export default{
        data(){
            return {

            }
        },
        components: {
            appHead
        },
        computed: {...mapGetters(['data'])},
        methods: {
            ...mapActions(['clear', 'getUser']),
            ...filters,
        },
        created () {
            this.getUser();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
