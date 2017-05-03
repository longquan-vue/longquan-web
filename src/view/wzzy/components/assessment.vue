<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>办事指南</span>
            </div>
        </div>
        <div class="fastEnter">
            <el-row :gutter="10">
                <el-col :span="6" v-for="type in articleType.guide">
                    <a><img :src="type.url"></a>
                </el-col>
                <el-col :span="6">
                    <a><img src="../../../../static/wzzy/ghzj.png"></a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style lang="less">
    .wzzy-tab{
        .fastEnter{
            margin: 20px 0 40px 0;
            a{
                height: 100px;display: block;cursor: pointer;
                img{ width: 100%;height: 100%;}
            }
        }
    }
</style>

<script type="es6">
    import { mapGetters } from 'vuex'
    export default{
        computed: {...mapGetters([ 'articleType']),
        },
    }
</script>

