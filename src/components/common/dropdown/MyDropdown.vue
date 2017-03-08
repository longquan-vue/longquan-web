<style lang="less" scoped>
  @import "MyDropdown.less";
</style>

<template>
  <MyDropdown class="my_dropdown" trigger="click">
    <span class="el-dropdown-link">
      {{menu[value]}}<i class="el-icon-caret-bottom el-icon--right"></i>
    </span>
    <MyDropdownMenu>
      <MyDropdownItem v-for="(item, index) in menu" @click.native="check(index)">{{item}}</MyDropdownItem>
    </MyDropdownMenu>
  </MyDropdown>
</template>

<script type="text/babel">
  import MyButton from '../button/MyButton'
  import MyDropdown from '../dropdown/MyDropdown'
  import MyDropdownItem from '../dropdown/MyDropdownItem'
  import MyDropdownMenu from '../dropdown/MyDropdownMenu'
  import {mapGetters} from '../../../utils/vuex'
  import router from '../../../router'
  // getters
  import {queryGetter} from '../../../store/getters/route'
  export default {
    name: 'my-dropdown',
    props: {
      value: {
        type: [Number, String],
        default: 0
      },
      menu: {
        type: Array,
        default: []
      },
      async: String
    },
    components: {
      MyButton,
      MyDropdown,
      MyDropdownItem,
      MyDropdownMenu
    },
    computed: {
      ...mapGetters({
        query: queryGetter
      }),
    },
    methods: {
      async check (index) {
        if (this.async) {
          await router.replace({
            query: {
              ...this.query,
              [this.async]: index,
              page: 1
            }
          })
        }
        this.$emit('check', index)
      },
    },
  }
</script>
