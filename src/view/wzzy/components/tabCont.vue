<template>
    <div>
        <div class="wzzy-tab-cont-head">
            <a><img :src="newsList[0] && newsList[0].picUrl"></a>
            <div class="wzzy-tab-cont-head-mess">
                <h2><router-link :to="'messageDetail/'+(newsList[0] && newsList[0].id)">{{newsList[0] && newsList[0].title}}</router-link></h2>
                <p>{{date3Filter(newsList[0] && newsList[0].created)}}</p>
                <div v-html="limitFilter(strFilter(decode(newsList[0] && newsList[0].content)),100)"></div>
            </div>
        </div>
        <el-row :gutter="20" class="wzzy-tab-cont-list">
            <el-col :span="12" v-for="(item,index) in newsList" :key="index">
                <router-link :to="'messageDetail/'+item.id"><span>{{item.title}}</span> <i>{{dateFilter(item.created)}}</i></router-link>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="less">

</style>
<script type="es6">
    import filters from '../../../filters'
    export default{
        name: 'tabCont',
        data(){
            return {

            }
        },
        props: {
            newsList:Array
        },
        components: {

        },
        watch: {

        },
        methods: {
            ...filters,
        }
    }

</script>

