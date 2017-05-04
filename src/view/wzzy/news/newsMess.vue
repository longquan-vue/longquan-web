<style lang="less">
    .newsMess{
        li{ overflow: hidden;padding: 20px 0;border-bottom: 1px solid #E7E7E7;}
    }
    .newsMessImg{ width: 240px;height: 136px;position: relative;float: left;margin-right: 20px;}
    .newsMessCont{
        h2{ font-size: 18px;color: #333333;margin-bottom: 10px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
            a{ color: #333;}
            a:hover{ color: #BC0000;}
        }
        p{ color: #999;margin-bottom: 15px;font-size: 14px;}
        div{ color: #999;font-size: 14px;line-height: 25px;text-align: justify}
    }
</style>
<template>
    <ul class="newsMess">
        <li v-for="(item,index) in newsList" :key="index">
            <div class="newsMessImg">
                <router-link :to="'/view/wzzy/messageDetail/'+item.id" class="block-link" >
                    <img :src="item.picUrl">
                </router-link>
            </div>
            <div class="newsMessCont">
                <h2><router-link :to="'/view/wzzy/messageDetail/'+item.id">{{item.title}}</router-link></h2>
                <p>{{date3Filter(item.created)}}</p>
                <div v-html="limitFilter(strFilter(decode(item.content)),100)"></div>
            </div>
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
