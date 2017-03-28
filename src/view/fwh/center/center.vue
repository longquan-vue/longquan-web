<style lang="less">
    @import "../../../static/normal";
    @import "./center";
</style>
<template>
    <div class="personCenter">
        <div class="centerHead">
            <a class="javascript:;">编辑</a>
            <div class="circle">
                <img src="../../../static/wx/aw.jpg">
            </div>
            <p>恶龙の咆哮 <img src="../../../static/wx/renzheng.png"></p>
            <div class="mess">
                <div flex>
                    <a box="1">年龄：28</a>
                    <a box="1">性别：男</a>
                    <a box="1">未婚</a>
                </div>
            </div>
        </div>
        <div class="centerList">
            <mt-cell title="我的积分" to="//github.com" is-link>
                <span class="circle">1234</span>
                <img slot="icon" src="../../../static/wx/center/jifen.png" >
            </mt-cell>
            <mt-cell title="我的消息" to="//github.com" is-link>
                <span class="circle">20</span>
                <img slot="icon" src="../../../static/wx/center/xiaoxi.png" >
            </mt-cell>
            <mt-cell title="我的福利" to="//github.com" is-link>
                <span class="circle">14</span>
                <img slot="icon" src="../../../static/wx/center/fuli.png" >
            </mt-cell>
            <mt-cell title="我的活动" to="//github.com" is-link>
                <span class="circle">5</span>
                <img slot="icon" src="../../../static/wx/center/huodong.png" >
            </mt-cell>
        </div>
        <div class="centerList">
            <mt-cell title="职工认证" to="//github.com" is-link>
                <span style="color:#ffb033;">去认证</span>
                <img slot="icon" src="../../../static/wx/center/renz.png" >
            </mt-cell>
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    export default{
        data(){
            return{

            }
        },
        components:{

        },
        computed: {

        },
        methods:{

        },
        created () {

        }
    }
</script>
