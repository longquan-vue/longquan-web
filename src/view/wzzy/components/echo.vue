<template>
    <div class="wzzy-tab">
        <div class="wzzy-tab-head">
            <div class="tab-head-title">
                <img class="tab-head-title-img" src="../../../../static/wzzy/wzzy-tab.png">
                <span>回音壁</span>
            </div>
            <a class="tab-head-more">更多 > </a>
        </div>

        <div class="border-content" style="border-top: none;">
            <ul class="echo-ul">
                <li v-for="i in 3">
                    <div class="echo-title">
                       {{i}} 问：你喜欢什么样的颜色呢？
                    </div>
                    <div class="echo-cont">
                        我大概什么颜色都喜欢哦，不过最喜欢的颜色当然是蓝色啦！
                    </div>
                </li>
            </ul>
            <a class="askQuestion">我要咨询</a>
        </div>

    </div>
</template>
<style lang="less">
    .echo-ul{
       li{
           padding-bottom: 15px; margin-bottom: 15px;border-bottom: 1px solid #E7E7E7;
           .echo-title{ font-size: 16px;color: #bc0000;margin-bottom: 10px;}
           .echo-cont{ font-size: 14px;color: #8a8a8a;;}
       }
    }
    .askQuestion{ display: block;height: 40px;line-height: 40px;text-align: center;border: 1px solid #bc0000;
        color: #bc0000;font-size: 16px;border-radius: 4px;;
    }
</style>

