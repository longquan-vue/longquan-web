<style lang="less" scoped>
  @import "user.less";
</style>
<template>
  <div class="usercount">
    <div class="contentBox">
      <div class="contentBoxtitle">
        <span>用户统计报表</span>
        <a @click="go()" style="float:right;">
          <el-button type="primary" icon="arrow-left"/>
        </a>
      </div>
      <div class="contentBoxCont">
        <ul flex>
          <li box="1">
            <h3>{{count.all}}</h3>
            <p>平台用户总数(人)</p>
          </li>
          <li box="1">
            <h3>{{count.addAll}}</h3>
            <p>今日新增用户数(人)</p>
          </li>
          <li box="1">
            <h3>{{count.addUser}}</h3>
            <p>今日新增普通用户(人)</p>
          </li>
          <li box="1">
            <h3>{{count.addAudit}}</h3>
            <p>今日新增认证用户(人)</p>
          </li>
          <li box="1">
            <h3>{{count.addMonth}}</h3>
            <p>本月新增用户(人)</p>
          </li>
          <li box="1">
            <h3>{{count.monthUser}}</h3>
            <p>本月新增普通用户(人)</p>
          </li>
          <li box="1">
            <h3>{{count.monthAudit}}</h3>
            <p>本月新增认证用户(人)</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  import {userCountApi} from '../../../api/userApi'
  import {mapActions} from 'vuex'
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
      userCountApi().then((data) => this.count = data)
    },
  }
</script>
