<template>
  <div>
    <el-alert v-for="(alert,index) in alerts"
      :title="alert.title"
      :type="alert.type"
      :description="alert.description"
      :show-icon="alert.icon"
      :closable="alert.closable"
      :close-text="alert.closeText"
      @close="close(index)"
      :key="alert.id"
    >
    </el-alert>
  </div>
</template>

<script>
  import actions from "./action"
  import getters from "./getter"
  export default{
    name: 'alert',
    components: {},
    computed: {...getters},
    methods: {...actions},
  }
</script>
