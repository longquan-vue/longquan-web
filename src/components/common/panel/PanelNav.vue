<style lang="less" scoped>
  .glyphicon {
    margin: 0 5px;
  }
</style>

<template>
  <div>
    <template v-for="(index,nav) in navs">
      <span v-if="index !== 0" class="glyphicon glyphicon-chevron-right"></span><span>{{nav}}</span>
    </template>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'PanelNav',
    props: {
      navs: {
        type: Array
      },
    }
  }
</script>

