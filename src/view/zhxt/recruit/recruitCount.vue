<style lang="less" scoped>
  @import "recruit.less";
</style>
<template>
  <div class="usercount">
    <div class="contentBox">
      <div class="contentBoxtitle">
        <span>活动统计报表</span>
        <a @click="go()" style="float:right;">
          <el-button type="primary" icon="arrow-left"/>
        </a>
      </div>
      <div class="contentBoxCont">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="grid-content-box">
                <h2>35</h2>
                <p>举办活动总次数</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="grid-content-box">
                <h2>300</h2>
                <p>举办职工认证类型活动（次）</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="grid-content-box">
                <h2>35</h2>
                <p>举办非职工认证类型活动（次）</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="grid-content-box">
                <h2>35</h2>
                <p>活动报名总人次（人次）</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="grid-content-box">
                <h2>35</h2>
                <p>职工认证用户报名（人次）</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="grid-content-box">
                <h2>35</h2>
                <p>非职工认证用户报名（人次）</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="grid-content-box">
                <h2>35</h2>
                <p>活动签到总人次（人次）</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="grid-content-box">
                <h2>35</h2>
                <p>职工认证签到（人次）</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="grid-content-box">
                <h2>35</h2>
                <p>非职工认证用户签到（人次）</p>
              </div>
            </div>
          </el-col>
        </el-row>
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
