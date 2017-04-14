<style lang="less">
    .mytextarea{ background-color: #ffffff; padding: 0.3rem;
        .mytextareaT{ color: #666;}
        .weui-cells{ margin-top: 0 !important;}
        .weui-cells:before,.weui-cells:after{ border: none !important;}
        .weui-cell{ padding: 0;}
    }
</style>
<template>
  <div flex class="mytextarea">
      <div class="mytextareaT">答：</div>
      <div box="1">
          <group>
              <x-textarea :max="max" :placeholder="placeholder" @on-change="(v)=>changed(v)"></x-textarea>
          </group>
      </div>
  </div>
</template>
<script type="es6">
    import { XTextarea ,Group} from 'vux'
    export default{
        name: 'myTextarea',
        data(){
            return {

            }
        },
        components:{
            XTextarea , Group
        },
        props: {
            value:String,
            max:Number,
            placeholder: {
                type: String,
                default: '请输入问题答案'
            },
            change: Function
        },
        methods: {
            changed(v){
                this.change(v)
            }
        }
    }
</script>
