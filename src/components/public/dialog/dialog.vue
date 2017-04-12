<template>
  <el-dialog :title="title" v-model="showV" size="tiny">
    <span>{{content}}</span>
    <span slot="footer" class="dialog-footer">
            <el-button @click="showV = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </span>
  </el-dialog>
</template>
<script type="es6">
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default{
    name: 'myDialog',
    data(){
      return {
        showV: false
      }
    },
    props: {
      method: Function,
      title: String,
      content: String,
      data: [Object, Array, Number, String, Boolean]
    },
    methods: {
      show(){
        this.showV = true
      },
      submit(){
        this.method && this.method(this.data);
        this.showV = false;
      }
    },
  }
</script>
