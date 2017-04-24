<style lang="less" scoped>
  @import "welfare.less";
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>福利预告列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
                <span>
                    发布时间:
                    <el-date-picker v-model="dateValue" type="daterange" placeholder="选择日期范围">
                     </el-date-picker>
                </span>
        <span>
                     <el-select v-model="typeSelect.value" placeholder="请选择" style="width:120px;">
                    <el-option v-for="item in typeSelect.options" :key="item.label" :label="item.label" :value="item.value">
                    </el-option>
                    </el-select>
                    <el-input style="width:150px;"
                              placeholder="请输入搜索内容"
                              icon="search"
                              v-model="searchVal"
                              :on-icon-click="handleIconClick">
                    </el-input>
                </span>
        <span style="float:right;">
                    <el-button type="primary" @click="add(2)" icon="plus">添加福利预告</el-button>
                </span>

      </div>
      <div class="tableList mgb20">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="编号" fixed="left"></el-table-column>
          <el-table-column prop="content" label="内容"></el-table-column>
          <el-table-column prop="pubperson" label="发布者"></el-table-column>
          <el-table-column prop="pubtime" label="发布时间"></el-table-column>
          <el-table-column label="是否显示" width="150px">
            <template scope="scope">
              <el-button type="primary"
                         size="small"
                         @click="handleEdit(scope.$index, scope.row)">显示
              </el-button>
              <!--<el-button-->
              <!--size="small"-->
              <!--type="primary"-->
              <!--@click="handlePoint">取消暂停</el-button>-->
            </template>
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="150px">
            <template scope="scope">
              <el-button type="text"
                         size="small"
                         @click="add(1)">编辑
              </el-button>
              <!--<el-button-->
              <!--size="small"-->
              <!--type="text"-->
              <!--@click="handlePoint">兑换</el-button>-->
              <el-button
                size="small"
                type="text"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pageSlide">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="es6">
  export default {
    data() {
      return {
        tableData: [{
          content: '近期将发布5000张“万达电影票兑换券”，请提前准本好积分',
          pubperson: '钟成',
          pubtime: '2017-03-26 10:30',
        }, {
          content: '近期将发布5000张“万达电影票兑换券”，请提前准本好积分',
          pubperson: '钟成',
          pubtime: '2017-03-26 10:30',
        }, {
          content: '近期将发布5000张“万达电影票兑换券”，请提前准本好积分',
          pubperson: '钟成',
          pubtime: '2017-03-26 10:30',
        }, {
          content: '近期将发布5000张“万达电影票兑换券”，请提前准本好积分',
          pubperson: '钟成',
          pubtime: '2017-03-26 10:30',
        }, {
          content: '近期将发布5000张“万达电影票兑换券”，请提前准本好积分',
          pubperson: '钟成',
          pubtime: '2017-03-26 10:30',
        }, {
          content: '近期将发布5000张“万达电影票兑换券”，请提前准本好积分',
          pubperson: '钟成',
          pubtime: '2017-03-26 10:30',
        }, {
          content: '近期将发布5000张“万达电影票兑换券”，请提前准本好积分',
          pubperson: '钟成',
          pubtime: '2017-03-26 10:30',
        }, {
          content: '近期将发布5000张“万达电影票兑换券”，请提前准本好积分',
          pubperson: '钟成',
          pubtime: '2017-03-26 10:30',
        }, {
          content: '近期将发布5000张“万达电影票兑换券”，请提前准本好积分',
          pubperson: '钟成',
          pubtime: '2017-03-26 10:30',
        },],
        currentPage: 1,
        tbindex: -1,
        formLabelWidth: '80px',
        typeSelect: {
          options: [{
            value: '选项1',
            label: '内容'
          }, {
            value: '选项2',
            label: '发布者'
          }],
          value: '选项1'
        },
        searchVal: '',
        activeIndex2: '1',
        dateValue: ''//筛选时间
      }
    },
    components: {},
    computed: {},
    methods: {
      handleDelete(index, row) {
        console.log(index, row);
        this.tbindex = index;
        this.dialogVisible = true;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);

      },
      deleteClick(index){
        this.tableData.splice(index, 1);
        this.dialogVisible = false;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.dialogFormVisible = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.dialogFormVisible = false;
        this.$refs[formName].resetFields();
      },
      handleError(){
        this.$notify.error({
          title: '上传失败',
          message: '图片上传接口上传失败，可更改为自己的服务器接口'
        });
      },
      handleIconClick(){  //搜索

      },
      handlePoint(){   //积分管理
        this.$router.push('userpoint');
      },
      handleSelect(){  //选择菜单列表

      },
      add(status){   //增加券类优惠
        this.$router.push({
          path: "welfarePrevEdit",
          query: {
            id: status
          }
        });
      }
    },
    created () {

    },
    destroyed () {

    }
  }
</script>

