<style lang="less" scoped>
  .bold {
    font-weight: bold;
  }

  ul {
    padding-left: 2em;
    line-height: 1.5em;
    list-style: none;
  }

  li {
    list-style: none;
  }

  input[type=checkbox],
  input[type=radio] {
    -webkit-appearance: none;
    appearance: none;
    width: 13px;
    height: 13px;
    margin: 0;
    cursor: pointer;
    /*vertical-align: bottom;*/
    background: #fff;
    border: 1px solid #B9BBBE;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
  }

  input[type=checkbox]:active,
  input[type=radio]:active {
    border-color: #c6c6c6;
    background: #ebebeb;
  }

  input[type=checkbox]:hover {
    border-color: #c6c6c6;
    -webkit-box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
  }

  input[type=checkbox]:checked,
  input[type=radio]:checked {
    background: #00b3ee;
  }

  /*input[type=checkbox]:checked::after {*/
  /*background: red;*/
  /*display: block;*/
  /*position: absolute;*/
  /*top: -5px;*/
  /*right: 0px;*/
  /*left: -5px*/
  /*}*/

  /*input[type=checkbox]:focus {*/
  /*outline: none;*/
  /*border-color:#4d90fe;*/
  /*}*/
</style>

<template>

  <li>
    <div :class="{bold: isFolder}" @click="toggle">
      <!--<span v-if="isFolder">[{{open ? '-' : '+'}}]</span>-->
      <input type="checkbox" v-model="isChecked">
      {{model[name]}}
    </div>
    <span>
    <ul v-show="open" v-if="isFolder">
      <select-tree :value-list.sync="_valueList" class="item" v-for="model in model[children]" :model="model" :id="id"
                   :name="name">
      </select-tree>
    </ul>
    </span>
  </li>
</template>

<script type="text/babel">
  export default {
    name: 'select-tree',
    props: {
      model: Object,
      valueList: {
        twoWay: true,
        Type: Array,
        default: () => ([])
      },
      name: {
        Type: String,
        default: 'name'
      },
      id: {
        Type: String,
        default: 'id'
      },
      children: {
        Type: String,
        default: 'children',
      },
      expand: {
        type: Boolean,
        default: false,
      }
    },
    data () {
      return {
        open: false,
      }
    },
    computed: {
      value () {
        return this.model[this.id]
      },
      isFolder () {
        return this.model.children && this.model.children.length
      },
      isChecked: {
        get () {
          if (this.isFolder) {
            if (this.childrenChecked(this.model[this.children])) {
              return true
            }
            return false
          }
          return this.valueList.some(v => v === this.value)
        },
        set (value) {
          if (this.isFolder) {
            this.selectAll(value)
          } else {
            this.selectValue(this.value, value)
          }
        }
      },
      _valueList: {
        get () {
          return this.valueList
        },
        set (v) {
          this.valueList = v
        }
      }
    },
    watch: {
      valueList (valueList = []) {
        if ((this.model[this.children] || []).some(child => valueList.some(v => v === child[this.id]))) {
          this.open = true
        } else {
          this.open = false
        }
      }
    },
    methods: {
      toggle () {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      childrenChecked (list) {
        return (list || []).some(child => {
          if (child[this.children]) {
            return this.childrenChecked(child[this.children])
          } else if (this.valueList.some(v => v === child[this.id])) {
            return true
          }
          return false
        })
      },
      selectValue (id, checked) {
        if (checked) {
          if (this.valueList.indexOf(id) === -1) {
//            this.valueList.push(id)
            this.valueList = [...this.valueList, id]
          }
        } else {
//          this.valueList.$remove(id)
          this.valueList = this.valueList.filter((v) => v !== id)
        }
      },
      selectAll (value) {
        this.childrenAll(this.model[this.children], value)
      },
      childrenAll (children, value) {
        children.forEach(child => {
          this.selectValue(child[this.id], value)
          if (child[this.children]) {
            this.childrenAll(child[this.children], value)
          }
        })
      },
    },
    mounted () {
    }
  }
</script>

