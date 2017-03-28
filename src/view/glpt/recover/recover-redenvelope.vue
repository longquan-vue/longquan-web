<template>
  <div class="recover-health">
      <div class="tableList mgb20">
        <el-table :data="tableData" border style="width: 100%">
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
          act_name:'井甜净水机红包',
          wishing:'井甜净水祝您健康！',
          command:'井甜净水机',
          all:2000,
          total_num:1000,
          depatrment:'龙泉驿总工会',
          starttime:'2017-03-03 00:00',
          endtime:'2017-03-18 00:00'
        }, {
          act_name:'井甜净水机红包',
          wishing:'井甜净水祝您健康！',
          command:'井甜净水机',
          all:2000,
          total_num:1000,
          depatrment:'龙泉驿总工会',
          starttime:'2017-03-03 00:00',
          endtime:'2017-03-18 00:00'
        },{
          act_name:'井甜净水机红包',
          wishing:'井甜净水祝您健康！',
          command:'井甜净水机',
          all:2000,
          total_num:1000,
          depatrment:'龙泉驿总工会',
          starttime:'2017-03-03 00:00',
          endtime:'2017-03-18 00:00'
        },{
          act_name:'井甜净水机红包',
          wishing:'井甜净水祝您健康！',
          command:'井甜净水机',
          all:2000,
          total_num:1000,
          depatrment:'龙泉驿总工会',
          starttime:'2017-03-03 00:00',
          endtime:'2017-03-18 00:00'
        },{
          act_name:'井甜净水机红包',
          wishing:'井甜净水祝您健康！',
          command:'井甜净水机',
          all:2000,
          total_num:1000,
          depatrment:'龙泉驿总工会',
          starttime:'2017-03-03 00:00',
          endtime:'2017-03-18 00:00'
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

