<template>
    <div class="wzzy-tab">
        <div class="border-content">
            <el-row :gutter="10">
                <el-col :span="12">
                    <router-link to="chat/6" class="someIcon">微信公众号</router-link>
                </el-col>
                <el-col :span="12">
                    <a href="http://weibo.com/u/2178811917?refer_flag=1001030101_&is_all=1&sudaref=localhost&retcode=6102" class="someIcon">政务微博</a>
                </el-col>
                <el-col :span="12">
                    <router-link to="" class="someIcon">在线咨询</router-link>
                </el-col>
                <el-col :span="12">
                    <router-link to="files" class="someIcon">资料下载</router-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style lang="less">
    .someIcon{ display: block;width: 100%;height: 80px;border-radius: 4px;background-color: #FFE8D2;
        color: #ff7e00;font-size: 14px;;line-height: 80px;text-align: center;margin-bottom: 10px;;
    }
</style>

