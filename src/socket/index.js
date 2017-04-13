import {debug} from '../constant'
let socket, opts, timer;
const commands = [];

const VueSocket = {
  open: (sessionId) => {
    debug('连接websocket...', sessionId)
    if (socket && sessionId) {
      socket.close();
    }
    if (sessionId) {
      opts.sessionId = sessionId;
      socket = new WebSocket(`ws://java.ichuangye.cn/websocket/${sessionId}`);
      socket.onopen = (msg) => {
        opts.open && opts.open(msg);
        VueSocket.loop()
      }
      socket.onclose = (msg) => {
        opts.close && opts.close(msg);
        if (opts.reconnect && socket) {
          socket = new WebSocket(msg.target.url);
        }
      }
      socket.onerror = (msg) => {
        opts.error && opts.error(msg);
        if (opts.reconnect && socket) {
          socket = new WebSocket(msg.target.url);
        }
      }
      socket.onmessage = (event) => {
        const {command, data} = JSON.parse(event.data)
        debug('收到消息:', command, data)
        if (command == 'loop') {
          VueSocket.loop()
          return;
        }
        commands.forEach(({c, fn}) => {
          if (command == c) {
            fn && fn(data)
          }
        })
      }
    }
    return VueSocket;
  },
  close: () => {
    if (socket) {
      debug('关闭连接!');
      socket.close();
      socket = null;
      timer && clearTimeout(timer);
    }
  },
  on: (c, fn) => {
    commands.push({c, fn})
    return VueSocket;
  },
  loop: () => timer = setTimeout(() => {
    debug('loop...')
    VueSocket.send('loop')
  }, opts.loop),
  send: (command, data) => {
    socket && socket.send(JSON.stringify({command, data}))
    return VueSocket;
  },
};

export default {
  install(Vue, o = {
    open: (msg) => debug('WebSocket连接成功：' + msg.target.url),
    close: (msg) => debug('WebSocket连接关闭！'),
    error: (msg) => debug('WebSocket连接异常！'),
    reconnect: true,
    loop: 10000
  })
  {
    opts = o;
    Vue.mixin({
      created: function () {
        this.$socket = VueSocket;
      }
    });
    Vue.prototype.socket = VueSocket;
  }
}
;
