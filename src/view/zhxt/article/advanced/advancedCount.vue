<style lang="less">
  @import "advanced.less";
</style>
<template>
  <div class="usercount">
    <div class="contentBox">
      <div class="contentBoxtitle">
        <span>红包福利发放统计报表</span>
        <a @click="go()" style="float:right;">
          <el-button type="primary" icon="arrow-left"/>
        </a>
      </div>
      <div class="contentBoxCont">
        <ul flex>
          <li box="1">
            <h3>34</h3>
            <p>红包福利发放次数(次)</p>
          </li>
          <li box="1">
            <h3>25654</h3>
            <p>红包福利发放总金额(元)</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {}
    },
    computed: {},
    methods: {
      ...mapActions(['go']),
    }
  }
</script>
