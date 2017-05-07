<style lang="less">
   .newTips{
       li{ height: 60px;line-height: 60px;border-bottom: 1px solid #E7E7E7;font-size: 16px;;
            a{ display: block;height: 100%;position: relative;cursor: pointer;
                span{ display: block;padding-right: 120px;color: #333;margin-left: 20px;}
                &:before{  content: '';  width: 0;  height: 0;  position: absolute;  left: 0;  top: 24px;
                    border-top: 5px solid transparent;
                    border-left: 5px solid #999999;
                    border-bottom: 5px solid transparent;
                }
                i{ color: #818181;position: absolute;right: 0;top: 0}
                &:hover *{ color: #BC0000}
            }
       }
   }
</style>
<template>
    <ul class="newTips">
        <li v-for="(item,index) in newsList" :key="index"><router-link :to="'/view/wzzy/messageDetail/'+item.id"><span>{{item.title}}</span> <i>{{date3Filter(item.created)}}</i></router-link></li>
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
