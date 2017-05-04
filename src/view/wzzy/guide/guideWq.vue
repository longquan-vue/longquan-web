<style lang="less">

</style>
<template>
    <ul class="newTips">
        <li v-for="(item,index) in newsList" :key="index">
            <router-link :to="'/view/wzzy/messageDetail/'+item.id"><span>{{item.title}}</span> <i>{{date3Filter(item.created)}}</i></router-link>
        </li>
    </ul>
</template>

<script type="es6">
    import {mapGetters, mapActions} from 'vuex'
    import filters from '../../../filters'
    export default{
        props:{
            newsList:Array,
        },
        methods: {
            ...mapActions(['clear']),
            ...filters,
        },
        destroyed(){
            this.clear()
        }
    }
</script>

