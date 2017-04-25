<template>
  <div>
    <el-menu-item :index="item.path" v-if="!item.children">
      <i :class="'el-icon-'+item.icon"></i>{{item.title}}
    </el-menu-item>
    <el-submenu :index="index" v-if="item.children">
      <template slot="title"><i :class="'el-icon-'+(item.icon||'menu')"></i>{{item.title}}</template>
      <SidebarItem v-for="(i,idx) in item.children" :key="index+'-'+idx" :index="index+'-'+idx" :item="i"/>
    </el-submenu>
  </div>
</template>
<script type="es6">
  export default {
    name: 'SidebarItem',
    props: {
      index: String,
      item: Object
    },
  }
</script>
