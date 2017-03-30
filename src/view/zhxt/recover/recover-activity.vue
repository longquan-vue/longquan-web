<template>
  <div class="recover-health">
      <div class="tableList mgb20">
        <el-table :data="tableData" border style="width: 100%">
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
          name:'大学生联谊活动',
          date:'2017-03-25',
          address:'电子科技大学成都学院',
          num:'2',
          checkedNum:'8000',
          depatrment:'活动部',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        }, {
          name:'大学生联谊活动',
          date:'2017-03-25',
          address:'电子科技大学成都学院',
          num:'2',
          checkedNum:'8000',
          depatrment:'活动部',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        }, {
          name:'大学生联谊活动',
          date:'2017-03-25',
          address:'电子科技大学成都学院',
          num:'2',
          checkedNum:'8000',
          depatrment:'活动部',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        }, {
          name:'大学生联谊活动',
          date:'2017-03-25',
          address:'电子科技大学成都学院',
          num:'2',
          checkedNum:'8000',
          depatrment:'活动部',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        }],
        currentPage: 1,
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

