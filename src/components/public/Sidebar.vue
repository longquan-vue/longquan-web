<template>
  <div class="sidebar">
    <el-menu :default-active="active" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <SidebarItem :index="idx+''" :item="item" v-for="(item,idx) in menu" :key="idx"/>
    </el-menu>
  </div>
</template>
<script type="es6">
  import menu from '../../router/menu'
  import SidebarItem from './SidebarItem.vue'
  export default {
    components: {SidebarItem},
    computed: {
      active(){
        return this.$route.path;
      },
      menu(){
        return menu.zhxt
      }
    },
  }
</script>
<style lang="less" scoped>
  .sidebar {
    display: block;
    position: absolute;
    width: 220px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #2E363F;
  }

  .sidebar > ul {
    height: 100%;
    overflow-y: scroll;
  }
</style>
