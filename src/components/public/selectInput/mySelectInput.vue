<template>
    <span>
        {{title}}：
        <el-select v-model="key" :placeholder="placeholder" style="width:120px;" @change="changed">
            <el-option v-for="(val, index) in options" :key="index" :label="val" :value="index"></el-option>
        </el-select>
         <el-input style="width:150px;" placeholder="请输入搜索内容" icon="search" v-model="value" @click="handleIconClicked({key,value})">
        </el-input>
    </span>
</template>
<script type="es6">
    export default{
        name: 'mySelectInput',
        data(){
            return {
                key: this.valueLabel,
                value:this.searchVal
            }
        },
        props: {
            title: String,
            valueLabel: String,
            searchVal:String,
            field: String,
            options: {
                type: Object,
                required: true
            },
            placeholder: {
                type: String,
                default: '请选择...'
            },
            change: Function,
            handleIconClick:Function
        },
        methods: {
            changed(v){
                this.key=v;
            },
            handleIconClicked(data){
                this.handleIconClick(data);
                // console.log(this.val+'~~~'+this.sVal)
            }
        }
    }

</script>
