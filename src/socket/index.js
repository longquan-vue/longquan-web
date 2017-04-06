import VueWebsocket from "vue-websocket";
import Vue from 'vue'

export const connect = (sessionId) =>Vue.use(VueWebsocket, `ws://java.ichuangye.cn/websocekt/${sessionId}`);