<style lang="less">
  @import 'recover.less';
</style>
<template>
  <div class="activity">
    <div class="title"><span>回收站</span></div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="招聘信息管理" name="first">
        <div class="tableList mgb20">
          <el-table :data="recruitmentData" border style="width: 100%">
            <el-table-column type="index" label="编号"></el-table-column>
            <el-table-column prop="job" label="招聘职位"></el-table-column>
            <el-table-column prop="useAddress" label="用人单位"></el-table-column>
            <el-table-column prop="companyAddress" label="公司地址"></el-table-column>
            <el-table-column prop="personNum" label="招聘人数"></el-table-column>
            <el-table-column prop="money" label="薪资待遇"></el-table-column>
            <el-table-column prop="connectPerson" label="联系人"></el-table-column>
            <el-table-column prop="phone" label="联系电话"></el-table-column>
            <el-table-column prop="require" label="招聘要求"></el-table-column>
            <el-table-column prop="welfare" label="福利待遇"></el-table-column>
            <el-table-column prop="depatrment" label="发布机关"></el-table-column>
            <el-table-column prop="date" label="发布时间"></el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button type="text"
                           size="small"
                           @click="">清空记录
                </el-button>
                <el-button
                  size="small"
                  type="text"
                  @click="">恢复
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="活动管理" name="second">
        <div class="tableList mgb20">
          <el-table :data="activityData" border style="width: 100%">
            <el-table-column type="index" label="编号"></el-table-column>
            <el-table-column prop="name" label="活动名称"></el-table-column>
            <el-table-column prop="date" label="活动时间"></el-table-column>
            <el-table-column prop="address" label="活动地点"></el-table-column>
            <el-table-column prop="num" label="报名人数"></el-table-column>
            <el-table-column prop="checkedNum" label="审核通过人数"></el-table-column>
            <el-table-column prop="depatrment" label="发布机关/部门"></el-table-column>
            <el-table-column prop="depatrmentPerson" label="发布者"></el-table-column>
            <el-table-column prop="publishDate" label="发布时间"></el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button type="text"
                           size="small"
                           @click="">清空记录
                </el-button>
                <el-button
                  size="small"
                  type="text"
                  @click="">恢复
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="健身中心管理" name="third">
        <el-table :data="healthData" border style="width: 100%">
          <el-table-column type="index" label="编号"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="depatrmentPerson" label="发布者"></el-table-column>
          <el-table-column prop="publishDate" label="发布时间"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button type="text"
                         size="small"
                         @click="">清空记录
              </el-button>
              <el-button
                size="small"
                type="text"
                @click="">恢复
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="红包福利" name="fourth">
        <el-table :data="redenvelopeData" border style="width: 100%">
          <el-table-column type="index" label="编号"></el-table-column>
          <el-table-column prop="act_name" label="标题"></el-table-column>
          <el-table-column prop="wishing" label="祝福语"></el-table-column>
          <el-table-column prop="command" label="口令"></el-table-column>
          <el-table-column prop="all" label="总金额"></el-table-column>
          <el-table-column prop="total_num" label="红包个数"></el-table-column>
          <el-table-column prop="depatrment" label="发布机关"></el-table-column>
          <el-table-column prop="starttime" label="开始时间"></el-table-column>
          <el-table-column prop="endtime" label="结束时间"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button type="text"
                         size="small"
                         @click="">清空记录
              </el-button>
              <el-button
                size="small"
                type="text"
                @click="">恢复
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="es6">
  export default {
    name: 'recruitment',
    data() {
      return {
        activeName: 'first',//控制当前显示哪个选项卡
        recruitmentData: [{
          job: '前端工程师',
          useAddress: '成都爱创业科技有限公司',
          companyAddress: '菁蓉国际广场',
          personNum: '2',
          money: '8000',
          connectPerson: '钟成',
          phone: '18683370859',
          require: '工作认真，有上进行。',
          welfare: '五险一金，双休，年假，餐补',
          depatrment: '这是发布机关',
          date: '2016-05-03'
        }, {
          job: '前端工程师',
          useAddress: '成都爱创业科技有限公司',
          companyAddress: '菁蓉国际广场',
          personNum: '2',
          money: '8000',
          connectPerson: '钟成',
          phone: '18683370859',
          require: '工作认真，有上进行。',
          welfare: '五险一金，双休，年假，餐补',
          depatrment: '这是发布机关',
          date: '2016-05-03'
        }, {
          job: '前端工程师',
          useAddress: '成都爱创业科技有限公司',
          companyAddress: '菁蓉国际广场',
          personNum: '2',
          money: '8000',
          connectPerson: '钟成',
          phone: '18683370859',
          require: '工作认真，有上进行。',
          welfare: '五险一金，双休，年假，餐补',
          depatrment: '这是发布机关',
          date: '2016-05-03'
        }, {
          job: '前端工程师',
          useAddress: '成都爱创业科技有限公司',
          companyAddress: '菁蓉国际广场',
          personNum: '2',
          money: '8000',
          connectPerson: '钟成',
          phone: '18683370859',
          require: '工作认真，有上进行。',
          welfare: '五险一金，双休，年假，餐补',
          depatrment: '这是发布机关',
          date: '2016-05-03'
        }],
        activityData: [{
          name: '大学生联谊活动',
          date: '2017-03-25',
          address: '电子科技大学成都学院',
          num: '2',
          checkedNum: '8000',
          depatrment: '活动部',
          depatrmentPerson: '邹可涛',
          publishDate: '2017-03-05',
        }, {
          name: '大学生联谊活动',
          date: '2017-03-25',
          address: '电子科技大学成都学院',
          num: '2',
          checkedNum: '8000',
          depatrment: '活动部',
          depatrmentPerson: '邹可涛',
          publishDate: '2017-03-05',
        }, {
          name: '大学生联谊活动',
          date: '2017-03-25',
          address: '电子科技大学成都学院',
          num: '2',
          checkedNum: '8000',
          depatrment: '活动部',
          depatrmentPerson: '邹可涛',
          publishDate: '2017-03-05',
        }, {
          name: '大学生联谊活动',
          date: '2017-03-25',
          address: '电子科技大学成都学院',
          num: '2',
          checkedNum: '8000',
          depatrment: '活动部',
          depatrmentPerson: '邹可涛',
          publishDate: '2017-03-05',
        }],
        healthData: [{
          name: '单车',
          type: '单人',
          depatrmentPerson: '邹可涛',
          publishDate: '2017-03-05',
        }, {
          name: '乒乓球',
          type: '单人',
          depatrmentPerson: '邹可涛',
          publishDate: '2017-03-05',
        }, {
          name: '羽毛球',
          type: '单人',
          depatrmentPerson: '邹可涛',
          publishDate: '2017-03-05',
        }, {
          name: '综合训练',
          type: '单人',
          depatrmentPerson: '邹可涛',
          publishDate: '2017-03-05',
        }, {
          name: '哑铃',
          type: '单人',
          depatrmentPerson: '邹可涛',
          publishDate: '2017-03-05',
        }, {
          name: '保龄球',
          type: '单人',
          depatrmentPerson: '邹可涛',
          publishDate: '2017-03-05',
        }],
        redenvelopeData: [{
          act_name: '井甜净水机红包',
          wishing: '井甜净水祝您健康！',
          command: '井甜净水机',
          all: 2000,
          total_num: 1000,
          depatrment: '龙泉驿总工会',
          starttime: '2017-03-03 00:00',
          endtime: '2017-03-18 00:00'
        }, {
          act_name: '井甜净水机红包',
          wishing: '井甜净水祝您健康！',
          command: '井甜净水机',
          all: 2000,
          total_num: 1000,
          depatrment: '龙泉驿总工会',
          starttime: '2017-03-03 00:00',
          endtime: '2017-03-18 00:00'
        }, {
          act_name: '井甜净水机红包',
          wishing: '井甜净水祝您健康！',
          command: '井甜净水机',
          all: 2000,
          total_num: 1000,
          depatrment: '龙泉驿总工会',
          starttime: '2017-03-03 00:00',
          endtime: '2017-03-18 00:00'
        }, {
          act_name: '井甜净水机红包',
          wishing: '井甜净水祝您健康！',
          command: '井甜净水机',
          all: 2000,
          total_num: 1000,
          depatrment: '龙泉驿总工会',
          starttime: '2017-03-03 00:00',
          endtime: '2017-03-18 00:00'
        }, {
          act_name: '井甜净水机红包',
          wishing: '井甜净水祝您健康！',
          command: '井甜净水机',
          all: 2000,
          total_num: 1000,
          depatrment: '龙泉驿总工会',
          starttime: '2017-03-03 00:00',
          endtime: '2017-03-18 00:00'
        }],
      }
    },
    components: {},
    computed: {},
    methods: {
      handleClick(tab, event) {
      }
    },
    created () {

    },
    destroyed () {

    }
  }
</script>

