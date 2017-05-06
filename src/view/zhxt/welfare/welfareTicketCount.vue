<style lang="less">
  @import "welfare.less";
</style>
<template>
  <div class="usercount">
    <div class="contentBox">
      <div class="contentBoxtitle">
        <span>券类福利发放统计报表</span>
        <a @click="go()" style="float:right;">
          <el-button type="primary" icon="arrow-left"/>
        </a>
      </div>
      <div class="contentBoxCont">
        <ul flex>
          <li box="1">
            <h3>{{count.zcs}}</h3>
            <p>兑换券福利发放次数(次)</p>
          </li>
          <li box="1">
            <h3>{{count.zzs}}</h3>
            <p>兑换券发放张数(张)</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {mapActions} from 'vuex'
  import {welfareCountApi} from '../../../api/welfareApi'
  export default {
    data() {
      return {
        count:{}
      }
    },
    computed: {},
    methods: {
      ...mapActions(['go']),
    },
    created () {
      welfareCountApi(3).then((data) => this.count = data)
    },
  }
</script>
