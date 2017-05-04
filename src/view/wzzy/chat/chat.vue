<style lang="less">

</style>
<template>
    <div class="wzzyLaborUnion page6" style="padding-top:20px;">
        <div class="the-place">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '1' }">互动交流</el-breadcrumb-item>
                <el-breadcrumb-item>{{pathName}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="wzzy-sub-title"><a><i class="iconfont icon-xinwendongtai"></i>{{pathName}}</a></div>
        <div class="wzzy-sub-content">
            <transition-group name="move" mode="out-in">
                <chatPoll v-if="active==1" :key="active"/>
                <chatQuestion v-if="active==2" :key="active"/>
                <chatEcho v-if="active==3" :key="active"/>
                <chatWx v-if="active==6" :key="active"/>
            </transition-group>
        </div>
    </div>
</template>

<script type="es6">
    import chatEcho from './echo.vue'
    import chatPoll from './poll.vue'
    import chatQuestion from './question.vue'
    import chatWx from './weixin.vue'
    export default{
        components:{
            chatEcho,chatPoll,chatQuestion,chatWx
        },
        computed: {
            active(){
                console.log(this.$route.path.replace('/view/wzzy/chat/',''));
                return this.$route.path.replace('/view/wzzy/chat/','');
            },
            pathName(){
                let path = '';
                switch (this.active){
                    case '1':
                        path='投票选举';
                        break;
                    case '2':
                        path='问卷调查';
                        break;
                    case '3':
                        path='回音壁';
                        break;
                    case '6':
                        path='微信公众号';
                        break;
                }
                return path;
            }
        },
    }
</script>
