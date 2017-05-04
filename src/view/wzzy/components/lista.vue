<template>
    <router-link :to="'/view/wzzy/messageDetail/'+item.id" class="pub-list-a"><span>{{item.title}}</span> <i>{{dateFilter(item.created)}}</i></router-link>
</template>
<style lang="less">
    .pub-list-a{  position: relative;  display: block;  color: #333;  font-size: 14px;
        margin-bottom: 15px;  padding-right: 100px;  cursor: pointer;  overflow: hidden;
        text-overflow: ellipsis;  white-space: nowrap;
        &:before{  content: '';  width: 0;  height: 0;  position: absolute;
            left: 0;  top: 4px;
            border-top: 5px solid transparent;
            border-left: 5px solid #FF7E00;
            border-bottom: 5px solid transparent;
        }
        &:hover{ span{ color: #BC0000}}
        &:nth-last-child(1){ margin: 0;}
        i{ color: #8a8a8a;  position: absolute;  right: 0;  top: 2px;}
        span{ color: #333;  margin-left: 15px;}
    }
</style>
<script type="es6">
  import filters from '../../../filters'
    export default{
        props: {
            item: Object,
        },
        methods: {
            ...filters,
        }
    }

</script>
