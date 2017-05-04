<template>
    <div class="activityShow">
        <el-row :gutter="10">
            <el-col :span="12" class="activityShowLeft">
                <div class="link-div">
                    <router-link :to="'/view/wzzy/messageDetail/'+(newsList[0] && newsList[0].id)" class="block-link">
                        <img :src="newsList[0] && newsList[0].picUrl">
                        <div class="link-div-mess">
                            <h2>{{newsList[0] && newsList[0].title}}</h2>
                            <p v-html="limitFilter(strFilter(decode(newsList[0] && newsList[0].content)),45)"></p>
                        </div>
                    </router-link>
                </div>
            </el-col>
            <el-col :span="12" class="activityShowRight">
                <el-row :gutter="10">
                    <el-col :span="12" v-for="(item,index) in newsList" :key="index" v-if="index > 0">
                        <div class="little-link">
                            <div class="link-div">
                                <router-link :to="'/view/wzzy/messageDetail/'+item.id" class="block-link">
                                    <img :src="item.picUrl">
                                    <div class="link-div-mess">
                                        <h2>{{item.title}}</h2>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="less">

</style>
<script type="es6">
    import filters from '../../../filters'
    export default{
        name: 'activityComponents',
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

