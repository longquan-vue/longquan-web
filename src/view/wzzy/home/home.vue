<style lang="less" scoped>
    @import "./home.less";
</style>
<template>
    <div class="wzzyHome">
        <wzzyHeader></wzzyHeader>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filters from '../../../filters'
    import wzzyHeader from '../header/header.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            wzzyHeader
        },
        computed: {...mapGetters([ 'page','list']),
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
