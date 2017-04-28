<style lang="less" scoped>
  @import 'link.less';
</style>
<template>
  <div class="contentBox">
    <div class="contentBoxtitle"><span>友情链接列表</span></div>
    <div class="contentBoxCont">
      <div class="mgb20">
        <MySelectInput :options="{'name':'名称'}" def-key="name" :change="change"/>
        <el-button style="float: right" type="primary" @click="go(['linkEdit','create'])" icon="plus">添加友情链接</el-button>
      </div>
      <div class="tableList mgb20">
        <MyTable :data="list">
          <MyColumn type="index" fixed="left"/>
          <MyColumn prop="name" label="名称" min-width="120"/>
          <MyColumn prop="type" label="所属类型" :formatter="({type})=>typeFilter(articleType.link,type)" min-width="110"/>
          <MyColumn prop="url" label="URL" min-width="110"/>
          <MyColumn label="操作" width="120px">
            <template scope="scope">
              <el-button type="text" size="small" @click="edit(scope.row,scope.$index)"> 编辑</el-button>
              <el-button size="small" type="text" @click="del(scope.$index, scope.row)">删除</el-button>
            </template>
          </MyColumn>
        </MyTable>
      </div>
      <div class="pageSlide">
        <MyPagination :method="findLink"/>
      </div>
      <el-dialog :title="'编辑友情链接--'+dialog.data.name" v-model="dialog.show">
        <el-form :model="dialog.data" label-width="90px">
          <el-form-item label="名称">
            <el-input placeholder="请输入..."  v-model="dialog.data.name"/>
          </el-form-item>
          <el-form-item label="所属类型" :rules="[{required:true,message:'所属类型不能为空！'}]">
            <el-select v-model="dialog.data.type" placeholder="请选择类型...">
              <el-option v-for="(val,key) in articleType.link" :label="val" :key="key" :value="key"/>
            </el-select>
          </el-form-item>
          <el-form-item label="URL">
            <el-input placeholder="请输入..."  v-model="dialog.data.url"/>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog.show = false">取 消</el-button>
          <el-button type="primary" @click="update">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script type="es6">
  import {mapGetters, mapActions} from 'vuex'
  import MyColumn from '../../../../components/common/table/MyTableColumn'
  import MyTable from '../../../../components/common/table/MyTable'
  import MyPagination from '../../../../components/public/page/MyPagination.vue'
  import MySelectInput from '../../../../components/public/selectInput/MySelectInput.vue'
  import filter from '../../../../filters'
  import {confirm} from '../../../../actions'
  export default {
    data(){
      return {
        dialog: {show: false, data: {}}
      }
    },
    components: {MySelectInput, MyPagination, MyColumn, MyTable},
    computed: {...mapGetters(['list', 'articleType'])},
    methods: {
      ...mapActions(['clear', 'findLink', 'changeSelect', 'updateLink', 'changeList', 'delLink', 'go']),
      ...filter,
      del(idx, {id, name}) {
        confirm(`确定删除友情链接[${name}]吗?`, 'warning').then(() => this.delLink([id, idx]))
      },
      change(key, value){
        this.changeSelect({key, value});
        this.findLink()
      },
      edit(data, idx){
        this.dialog = {show: true, data: {...data}, idx}
      },
      update(){
        this.updateLink(this.dialog.data).then(() => {
          this.dialog.show = false;
          this.changeList([this.dialog.idx + '.name', this.dialog.data.name])
          this.changeList([this.dialog.idx + '.type', this.dialog.data.type])
          this.changeList([this.dialog.idx + '.url', this.dialog.data.url])
        })
      }
    },
    created () {
      this.findLink()
    },
    destroyed () {
      this.clear()
    }
  }
</script>

