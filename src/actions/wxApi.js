import {jssdkApi} from '../api/systemApi'
import md5 from 'md5'
import sha1 from 'sha1'
import Vue from 'vue'
//配置微信
export const settingWx = () => {
  jssdkApi().then(({appId, timestamp, ticket}) => {
    const nonceStr = md5(new Date().getTime());
    const signature = sha1(`jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${window.location.href}`);
    Vue.wechat.config({
      debug: true, //调试阶段建议开启
      appId,//APPID
      timestamp,//时间戳timestamp
      nonceStr,//随机数nonceStr
      signature,//签名signature
      jsApiList: [
        'scanQRCode',//二维码,
        'closeWindow',// 关闭窗口
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'onVoicePlayEnd',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'translateVoice',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
    });
    Vue.wechat.error(() => settingWx());
  });
};
export const scanQRCode = (success = (res) => console.log(res), fail = (res) => console.error(res)) => {
  Vue.wechat.scanQRCode({
    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
    scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
    success, fail
  });
};
