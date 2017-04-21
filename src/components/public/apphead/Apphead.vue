<style lang="less" scoped>
    @import "../../../../static/normal.less";
    .centerMessHead{ height: 50px;background-color: #FC5757;color: #ffffff;z-index: 20;
        position: fixed;left: 0;top: 0;text-align: center;width: 100%;line-height: 50px;;
        img{ width: 11px;}
        .a{ border: 1px solid #ffffff;border-radius: 15px;height: 0.6rem;width: 1.46666666rem;
            line-height: 0.6rem;
        }
    }
</style>
<template>
    <div class="centerMessHead">
        <div flex>
            <div box="1" flex items="center" style="padding-left:10px;">
                <a href="javascript:history.go(-1);"> <img class="return" src="../../../../static/wx/return.png"> </a>
            </div>
            <div box="4" flex items="center" justify="center">
                <h2>{{title}}</h2>
            </div>
            <div box="1" flex items="center">

            </div>
        </div>
    </div>
</template>

<script type="es6">
    export default{
        name: 'appHead',
        data(){
            return {

            }
        },
        props: {
            title: String,
        },
        methods: {

        }
    }
</script>
