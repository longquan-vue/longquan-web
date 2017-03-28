<template>
    <div class="recover-health">
        <div class="tableList mgb20">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column type="index" label="编号"></el-table-column>
              <el-table-column prop="name" label="名称"></el-table-column>
              <el-table-column prop="type" label="类型"></el-table-column>
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
          name:'单车',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        }, {
          name:'乒乓球',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        }, {
          name:'羽毛球',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        },{
          name:'综合训练',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        },{
          name:'哑铃',
          type:'单人',
          depatrmentPerson:'邹可涛',
          publishDate:'2017-03-05',
        },{
          name:'保龄球',
          type:'单人',
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
