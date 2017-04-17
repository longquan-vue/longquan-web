import {Message} from 'element-ui';
import {MessageBox} from 'element-ui';

import { AlertPlugin } from 'vux'
import Vue from 'vue'
Vue.use(AlertPlugin);


export const success = (message = '删除成功！', opts = {duration: 2000, showClose: true}) => new Promise((resolve) => resolve(Message.success({message, ...opts})))
export const warning = (message = '删除成功！', opts = {duration: 2000, showClose: true}) => new Promise((resolve) => resolve(Message.warning({message, ...opts})));
export const info = (message = '删除成功！', opts = {duration: 2000, showClose: true}) => new Promise((resolve) => resolve(Message.info({message, ...opts})));
export const error = (message = '删除成功！', opts = {duration: 2000, showClose: true}) => new Promise((resolve) => resolve(Message.error({message, ...opts})));

export const msg = (title = '提示', message = '', type = 'success', opts = {}) => MessageBox({title, message, type, ...opts});
export const alert = (title = '提示', message = '', type = 'success', opts = {}) => MessageBox.alert({title, message, type, ...opts});
export const confirm = (title = '提示', message = '', type = 'success', opts = {}) => MessageBox.confirm({title, message, type, ...opts});
export const prompt = (title = '提示', message = '', type = 'success', opts = {}) => MessageBox.prompt({title, message, type, ...opts});


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