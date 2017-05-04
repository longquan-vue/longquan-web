<style lang="less">
    .the-place{ line-height: 40px;border-bottom: 1px solid #E7E7E7;height: 25px;margin-bottom: 13px;}
    .wzzy-sub-title{ height: 50px;line-height: 50px;font-size: 16px;
        border-bottom: 1px solid #E7E7E7;margin-bottom: 20px;;
        a{ border-bottom: 2px solid #BC0000;color: #333;display: inline-block;height: 50px;}
        i{ color: #BC0000;margin-right: 5px;}
    }
    .wzzy-sub-content{
        padding-bottom: 40px;
        .illustration{ margin:0 auto 20px 0;max-width: 100%;display: block;}
        .wzzy-sub-content-mess{ line-height: 25px;color: #666;font-size: 14px;}
    }

</style>
<template>
    <div class="laborUnionIntro">
        <img class="illustration" src="../../../../static/wx/img/1.jpg">
        <div class="wzzy-sub-content-mess">
            这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些
            都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些
            都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些
            都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些
            都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些
            都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些
            都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些
            都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些
            都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊这些
            都是后台上传的啊啊啊啊啊啊啊这些都是后台上传的啊啊啊啊啊啊啊
        </div>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import tip from '../components/tips.vue'
    import someIcon from '../components/someIcon.vue'
    import lastDynamic from '../components/lastDynamic.vue'

    export default{
        data(){
            return{

            }
        },
        components:{
            tip,someIcon,lastDynamic
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
