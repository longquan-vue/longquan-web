<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./centermess.less";
</style>
<template>
    <div class="centerMess">
        <div class="centerMessHead">
            <div flex>
                <div box="1" flex items="center" style="padding-left:10px;">
                    <a href="javascript:history.go(-1);"> <img class="return" src="../../../../static/wx/return.png"> </a>
                </div>
                <div box="4" flex items="center" justify="center">
                    <h2>系统消息</h2>
                </div>
                <div box="1" flex items="center">
                    <a class="a">清空</a>
                </div>
            </div>
        </div>
        <ul class="centerMessList">
            <li v-for="(item,index) in list">
                <p>{{item.title}}</p>
                <div class="mess">
                    <div>{{item.content}}</div>
                    <p>{{date3Filter(item.recording)}}</p>
                </div>
            </li>
        </ul>
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
        computed: {...mapGetters(['login','list'])},
        methods:{
            ...mapActions(['getMineMsg','clear']),
            ...filter
        },
        created () {
            this.getMineMsg();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
