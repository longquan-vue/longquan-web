<style lang="less">
    @import "../../../static/normal";
    @import "./centermess";
</style>
<template>
    <div class="centerMess">
        <div class="centerMessHead">
            <div flex>
                <div box="1" flex items="center" justify="center">
                    <img class="return" src="../../../static/wx/return.png">
                </div>
                <div box="6" flex items="center" justify="center">
                    <h2>系统消息</h2>
                </div>
                <div box="1" flex items="center" justify="center">
                    <a>清空</a>
                </div>
            </div>
        </div>
        <ul class="centerMessList">
            <li></li>
        </ul>
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
