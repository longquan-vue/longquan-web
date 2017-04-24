<style lang="less" scoped>
    .nothing{ position: relative;top: 40%;text-align: center;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        img{ width: 3rem}
        h2{ color: #666;font-size: 0.45rem;margin: 0.3rem 0 0.1rem 0}
        p{ color: #999;font-size: 0.35rem}
    }
</style>
<template>
    <div class="nothing">
        <img src="../../../../static/wx/default.png">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
    </div>
</template>
<script type="es6">
    export default{
        name: 'nothing',
        data(){
            return {

            }
        },
        props: {
            title: String,
            content:String
        },
        methods: {

        }
    }
</script>