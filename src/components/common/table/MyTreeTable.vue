<style lang="less" scoped>
</style>
<script type="text/babel">
  // components
  import MyTable from './MyTable'
  import props from './props'
  // utils
  import assertType from '../../../utils/assertType'
  import {treeToArray} from '../../../utils/tree'

  //  const getRowIdentity = (row, rowKey) => {
  //    if (!row) throw new Error('row is required when get row identity');
  //    if (typeof rowKey === 'string') {
  //      return row[rowKey]
  //    } else if (typeof rowKey === 'function') {
  //      return rowKey.call(null, row)
  //    }
  //  }

  export default {
    name: 'my-tree-table',
//    components: {
//      ElForm: Form
//    },
    components: {
      MyTable
    },
    props: {
      ...props,
      rowKey: {
        type: String,
        default: 'id',
      },
      childrenField: {
        type: [String, Function],
        default: 'children',
      },
      expandedRowIds: {
        type: Array,
        default: () => ([])
      },
    },
    data () {
      return {
        expandedRowIdMap: {}
      }
    },
    computed: {
      getRowIdentity() {
        if (assertType(this.rowKey, String)) {
          return (data) => data[this.rowKey]
        } else if (assertType(this.rowKey, Function)) {
          return (data) => this.rowKey(data)
        } else {
          throw new Error('rowKey 无效', this.rowKey)
        }
      },
      getChildrens() {
        if (assertType(this.childrenField, String)) {
          return (data) => data[this.childrenField]
        } else if (assertType(this.childrenField, Function)) {
          return (data) => this.childrenField(data)
        } else {
          throw new Error('childrenField 无效', this.childrenField)
        }
      },
    },
    watch: {
      data (data) {
//        console.log(data)
        this.updateTableData()
      },
      expandedRowIdMap () {
        this.updateTableData()
      }
    },
    methods: {
      updateTableData () {
//        const t = new Date().getTime()
        this.tableData = treeToArray(
          this.data,
          (data) => {
            const key = this.getRowIdentity(data)
            if (this.expandedRowIdMap[key]) {
              return data._children
            }
          },
          (data, parent) => {
            return {
              ...data,
              _children: this.getChildrens(data),
              _row: data,
              _level: parent ? parent._level + 1 : 0,
              _expand: this.expandedRowIdMap[this.getRowIdentity(data)]
            }
          })
//        console.log('size: ' + data.length)
//        console.log('time: ' + (new Date().getTime() - t))
      }
    },
    created () {
      this.expandedRowIds.forEach(row => {
        this.expandedRowIdMap[this.getRowIdentity(row)] = true
      })
//      this.expandedRowIdMap = this.expandedRowIds

      this.$on('expand', (data) => {
//        console.log(this)
        const key = this.getRowIdentity(data)
        this.expandedRowIdMap = {
          ...this.expandedRowIdMap,
          [key]: !this.expandedRowIdMap[key]
        }
//        data._expand = !data._expand
//        this.expandedRowIdMap[key] = !this.expandedRowIdMap[key]
      })

      this.updateTableData()
    },
    render (h) {
      return (
        <my-table {...{
          props: {
            ...this,
            data: this.tableData
          },
          ref: 'myTable'
        }}>
          {this.$slots.default}
        </my-table>
      )
    }
  }
</script>


