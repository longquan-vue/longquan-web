<style lang="less" scoped>
  label {
    font-weight: 400;
  }

  .context {
    height: 300px;
    width: 100%;
  }

  .left {
    width: 50%;
    height: 100%;
    float: left;
    background: #FFFFFF;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid #e5e5e5;

  .left-context {
    width: 300px;
    padding: 12px 24px;

  &
  .sels {
    padding: 0 24px;
    min-height: 220px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .search {
    text-align: center;
    position: relative;

  .search-icon {
    position: absolute;
    top: 8px;
    right: 10px;
    cursor: pointer;
  }

  }
  .data-list {

  label {
    width: 100%;
    cursor: pointer;
    padding: 12px 10px;
    margin: 0;

  &
  :hover {
    background: #f2f2f2;
  }

  span {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid #6f6f6f;
    border-radius: 50%;
    float: right;
    margin-top: 1px;
  }

  span.std {
    border: none;
    background: url("../../../../static/image/std.jpg") no-repeat 0 0;
  }

  }
  }
  }
  }

  .right {
    width: 50%;
    height: 100%;
    float: right;

  .span-title {
    font-size: 12px;
    line-height: 34px;
    padding: 6px 15px;
  }

  .selsRi {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 266px;
  }

  }

  .right .data-list label {
    width: 100%;
    margin: 10px 0;
    padding: 0 20px;
    line-height: 24px;
  }

  .remove-icon {
    float: right;
    cursor: pointer;
    position: relative;
    top: 3px;
  }

  .left-child {
    padding-left: 25px !important;
  }

  .clear {
    clear: both;
  }

  .clear::after {
    clear: both;
    content: "";
    display: block;
    height: 0;
    visibility: hidden;
  }

</style>

<template>
  <div class="context clear">
    <div class="left">
      <div class="left-context" v-if="_opts.query">
        <div class="search">
          <input class="form-control" v-model="searchQuery" @keyup="search"/>
          <img class="search-icon" src="../../../../static/image/icon_search.jpg"/>
        </div>
      </div>
      <div class="left-context sels">
        <div class="data-list left-data" v-for="data in dataList">
          <label @click="changeChecked(data)">{{_opts.format(data)}}<span v-show="!data[_opts.children]"
                                                                          :class="{ 'std' : isCheck(data) }"></span></label>
          <template v-if="data[_opts.children]">
            <div class="data-list left-data" v-show="show[data.id]" v-for="child in data[_opts.children]">
              <label class="left-child" @click="changeChecked(child)">{{_opts.format(child)}}<span
                :class="{ 'std' : isCheck(child) }"></span></label>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="right">
      <div><span class="span-title">{{_opts.content}}</span></div>
      <div class="selsRi">
        <div class="data-list" v-for="data in selectedList">
          <label>
            {{_opts.format(data)}}
            <img class="remove-icon" src="../../../../static/image/icon_close.jpg" @click="remove(data)"/>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  const defaultOptions = {
    id: 'id',
    format: (item) => {
      return item.name
    },
    children: 'children',
    content: '请勾选需要添加的选项',
    query: true
  }
  export default {
    name: 'SelectPanel',
    props: {
      opts: {
        type: Object,
        required: false,
      },
      searchQuery: {
        Type: String,
        default: ''
      },
      selectedList: {
        Type: Array,
        default: () => ([])
      },
      dataList: {
        Type: Array,
        default: () => ([])
      }
    },
//    watch: {
//      searchQuery () {
//        this.$emit('searchQuery', this.searchQuery)
//      }
//    },
    data () {
      return {
        show: {}
      }
    },
    methods: {
      _opts () {
        return {
          ...defaultOptions,
          ...this.opts,
        }
      },
      isCheck (data) {
        return this.selectedList.some(v => v.id === data.id)
      },
      changeChecked (data) {
        if (data[this._opts.children]) {
          this.show = {...this.show, [data.id]: !this.show[data.id]}
          return
        }
        if (this.isCheck(data)) {
          this.remove(data)
        } else {
          // data添加到
//          this.selectedList.push(data)
          this.selectedList = [...this.selectedList, data]
        }
      },
      search () {
        this.$emit('searchQuery', this.searchQuery)
      },
      remove (data) {
        this.selectedList = this.selectedList.filter(v => v.id !== data.id)
      }
    }
  }
</script>

