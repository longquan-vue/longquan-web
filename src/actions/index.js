import {Message} from 'element-ui';
import {MessageBox} from 'element-ui';

import { AlertPlugin } from 'vux'
import Vue from 'vue'
Vue.use(AlertPlugin);


export const success = (message = '删除成功！', opts = {duration: 2000, showClose: true}) => new Promise((resolve) => resolve(Message.success({message, ...opts})))
export const warning = (message = '删除成功！', opts = {duration: 2000, showClose: true}) => new Promise((resolve) => resolve(Message.warning({message, ...opts})));
export const info = (message = '删除成功！', opts = {duration: 2000, showClose: true}) => new Promise((resolve) => resolve(Message.info({message, ...opts})));
export const error = (message = '删除成功！', opts = {duration: 2000, showClose: true}) => new Promise((resolve) => resolve(Message.error({message, ...opts})));

export const msg = (message = '', type = 'success', title = '提示', opts = {}) => MessageBox(message, title, {type, ...opts});
export const alert = (message = '', type = 'success', title = '提示', opts = {}) => MessageBox.alert(message, title, {type, ...opts});
export const confirm = (message = '', type = 'success', title = '提示', opts = {}) => MessageBox.confirm(message, title, {type, ...opts});
export const prompt = (message = '', type = 'success', title = '提示', opts = {}) => MessageBox.prompt(message, title, {type, ...opts});


//app
export const appAlert = (obj, content = '成功！')=>{
    // console.log(this);
    // console.log(obj);
    obj.$vux.alert.show({
        title: '提示',
        content: content,
        onShow () {
            console.log('Plugin: I\'m showing')
        },
        onHide () {
            console.log('Plugin: I\'m hiding')
        }
    })
};