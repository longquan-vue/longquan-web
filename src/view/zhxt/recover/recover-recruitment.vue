<template>
    <div class="recover-recruitment">
        <div class="tableList mgb20">
            <el-table :data="tableData" border style="width: 100%">
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
                             @click="">清空记录</el-button>
                  <el-button
                    size="small"
                    type="text"
                    @click="">恢复</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
        <div class="pageSlide">
            <el-pagination
              :current-page="currentPage"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script type="es6">
  export default {
    data() {
      return {
        tableData: [{
          job:'前端工程师',
          useAddress:'成都爱创业科技有限公司',
          companyAddress:'菁蓉国际广场',
          personNum:'2',
          money:'8000',
          connectPerson:'钟成',
          phone:'18683370859',
          require:'工作认真，有上进行。',
          welfare:'五险一金，双休，年假，餐补',
          depatrment:'这是发布机关',
          date: '2016-05-03'
        }, {
          job:'前端工程师',
          useAddress:'成都爱创业科技有限公司',
          companyAddress:'菁蓉国际广场',
          personNum:'2',
          money:'8000',
          connectPerson:'钟成',
          phone:'18683370859',
          require:'工作认真，有上进行。',
          welfare:'五险一金，双休，年假，餐补',
          depatrment:'这是发布机关',
          date: '2016-05-03'
        }, {
          job:'前端工程师',
          useAddress:'成都爱创业科技有限公司',
          companyAddress:'菁蓉国际广场',
          personNum:'2',
          money:'8000',
          connectPerson:'钟成',
          phone:'18683370859',
          require:'工作认真，有上进行。',
          welfare:'五险一金，双休，年假，餐补',
          depatrment:'这是发布机关',
          date: '2016-05-03'
        }, {
          job:'前端工程师',
          useAddress:'成都爱创业科技有限公司',
          companyAddress:'菁蓉国际广场',
          personNum:'2',
          money:'8000',
          connectPerson:'钟成',
          phone:'18683370859',
          require:'工作认真，有上进行。',
          welfare:'五险一金，双休，年假，餐补',
          depatrment:'这是发布机关',
          date: '2016-05-03'
        }],
        currentPage: 1
      }
    },
    components: {

    },
    computed: {

    },
    methods: {

    },
    created () {

    },
    destroyed () {

    }
  }
</script>
