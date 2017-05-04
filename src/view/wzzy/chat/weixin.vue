<style lang="less">
    #codeBox{
        text-align: center;padding: 100px 0;
        p{ color: #666666;font-size: 16px;}
        img{ }
    }
</style>
<template>
    <div class="codeBox" id="codeBox">
        <p>扫码关注微信公众号</p>
        <img src="../../../../static/wzzy/code.jpg">
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'
    import question from '../components/question.vue'
    export default{
        data(){
            return{
            }
        },
        components:{
            tip,someIcon,lastDynamic,question
        },
        computed: {
            ...mapGetters([ 'page','list']),
            active(){
                console.log(this.$route.path.replace('/view/wzzy/',''));
                return this.$route.path.replace('/view/wzzy/','');
            }
        },
        methods:{
            ...mapActions(['go','clear','getMine','changePage']),
            ...filters,
        },
        created () {

        },
        destroyed(){

        }
    }
</script>
