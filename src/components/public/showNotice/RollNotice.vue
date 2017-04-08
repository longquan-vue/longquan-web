<template>
  <div class="show-notice">
    <div class="notice-list" :style="{transform: 'translateY(-'+noticePosition+'px) translateZ(0px)'}" ref=roll>
      <p v-for="(notice,index) in coerce" :key="index">{{notice}}</p>
    </div>
  </div>
</template>

<script type="es6">
import rAF from './rAF.js'
export default {
  name: 'RollNotice',
  props: {
    notices: {
      type: Array,
      required: true,
      // coerce (data) {
      //   data.push(data[0]);
      //   return data
      // }
    }
  },
  computed:{
      coerce(){
          this.notices.push(this.notices[0]);
          return this.notices
      }
  },
  data () {
    return {
      noticePosition: 0 // 列表位置
    }
  },
  mounted () {
    let destination = 30;
    console.log(this.notices.length);
    setInterval(() => {
      if (destination / 30 < this.notices.length) {
        this.move(destination, 500);
        destination += 30
      } else { // 列表到底
        this.noticePosition = 0; // 设置列表为开始位置
        destination = 30;
        this.move(destination, 500);
        destination += 30
      }
    }, 2500)
  },
  methods: {
    move (destination, duration) { // 实现滚动动画
      let speed = ((destination - this.noticePosition) * 1000) / (duration * 60);
      let count = 0;
      let step = () => {
        this.noticePosition += speed;
        count++;
        console.log(this.noticePosition);
        rAF(() => {
          if (this.noticePosition < destination) {
            step()
          } else {
            this.noticePosition = destination
          }
        })
      };
      step()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @notice-height: 30px;
  .show-notice{
    height: @notice-height;
    overflow: hidden;
    vertical-align: middle;
    .notice-list p{
      margin: 0;
      height: @notice-height;
      line-height: @notice-height;
    }
  }
</style>
