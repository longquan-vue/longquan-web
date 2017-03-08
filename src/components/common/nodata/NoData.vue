<style lang="less" scoped>
  .no-data {
    height: 300px;
    width: 100%;
    position: relative;

  span {
    font-size: 20px;
    position: absolute;
    top: 30%;
    left: 50%;
    margin-left: -36px;
  }

  }
</style>

<template>
  <div class="no-data" v-show="isShow">
    <span>
      暂无数据
    </span>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'NoData',
    props: {
      isShow: {
        type: Boolean,
        default: true
      }
    },
  }
</script>
