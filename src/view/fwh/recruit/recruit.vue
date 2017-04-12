<style lang="less" scoped>
    @import "../../../../static/normal.less";
    @import "./recruit.less";
</style>
<template>
    <div class="centerCruit" style="background-color: #F0F0F0;height: 100%;overflow: scroll;">
        <ul class="centerCruitList">
            <li  @click="goto(['centerrecruitdetail',{id:item.id}])" v-for="(item,index) in list">
                <div class="listTitle" flex justify="between" items="center">
                    <span>{{item.name}}</span>
                    <a class="over" v-if="isEnd(item.end)">已结束</a>
                    <a class="ising" v-if="!isEnd(item.end)">进行中</a>
                </div>
                <div class="listCont" flex justify="between">
                    <span>招聘人数:{{item.num}}</span>
                    <span>{{item.pay}} 元/月</span>
                </div>
                <div class="listFoot">
                    招聘单位:{{item.company}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="es6">
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import filter from '../../../filters'
    import appHead from '../../../components/public/apphead/Apphead.vue'

    export default{
        data(){
            return{
                name: '',
            }
        },
        components:{
            appHead
        },
        computed: {...mapGetters(['list'])},
        methods:{
            ...mapActions(['getRecruit','clear','goto']),
            ...filter
        },
        created () {
            this.getRecruit();
        },
        destroyed(){
            this.clear()
        }
    }
</script>
