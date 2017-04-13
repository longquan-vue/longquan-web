<template>
  <span>
     {{title}}：
     <el-input :placeholder="placeholder" style="width:100px;" @blur="changed"></el-input> <em>{{end}}</em>
  </span>
</template>
<script type="es6">
  export default{
    name: 'myInput',
    data(){
      return {
        val: null
      }
    },
    props: {
      title: String,
      end: String,
      field: String,
      placeholder: {
        type: String,
        default: '请输入...'
      },
      format: Function,
      change: Function
    },
    methods: {
      changed(v){
        const val = v.target.value;
        if ((!this.val && !val) || this.val == val) {
          return
        }
        this.change && this.change(this.field, this.format ? this.format(v.target.value) : v.target.value);
        this.val = v.target.value;
      }
    }
  }

</script>
