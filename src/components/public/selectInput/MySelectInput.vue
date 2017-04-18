<template>
    <span>
        {{title}}{{title?'：':''}}
        <el-select v-model="key" style="width:120px;" @change="changeKey">
            <el-option v-for="(val, idx) in options" :key="idx" :label="val" :value="idx"></el-option>
        </el-select>
         <el-input style="width:150px;" :placeholder="placeholder" icon="search" @click="changed" @blur="changed">
        </el-input>
    </span>
</template>
<script type="es6">
  export default{
    name: 'mySelectInput',
    data(){
      return {
        key: this.defKey,
        val: this.defVal
      }
    },
    props: {
      title: String,
      defKey: String,
      defVal: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        required: true
      },
      placeholder: {
        type: String,
        default: '请输入...'
      },
      change: Function
    },
    methods: {
      changeKey(){
        if (this.val) {
          this.change && this.change(this.key, this.val);
        }
      },
      changed(v){
        const val = v.target ? v.target.value : v
        if (!this.key || (!this.val && !val) || (!!v.target && this.val == val)) {
          return;
        }
        this.change && this.change(this.key, val);
        this.val = val;
      }
    }
  }
</script>
