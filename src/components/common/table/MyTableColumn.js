// import Vue from 'vue'

export default {
  functional: true,
  render(h, context) {
    const data = {
      ...context.data,
      props: {
        ...context.props
      }
    }
    if (context.data.inlineTemplate) {
      console.error('MyTableColumn: 之前的 inline-template 修改为通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据。')
    }
    if (data.props.tree) {
      if (!context.data.scopedSlots || !context.data.scopedSlots.default) {
        throw new Error('tree 等于 true时，现在只能使用 Scoped slot')
      }
      data.props.align = 'left'
      data.scopedSlots = {
        default(scope) {
          console.log('scope', scope)
          const toggleExpand = () => {
            // 找到MyTreeTable
            const treeTableVueComponent = scope.store.table.$parent
            treeTableVueComponent.$emit('expand', scope.row)
          }
          return (
            <span style={{ paddingLeft: (scope.row._level * 15) + 'px' }}>
              <span
                onClick={toggleExpand}
                class={['el-tree-node__expand-icon', { expanded: scope.row._expand }]}
                style={[
                  {
                    marginRight: '10px',
                  },
                  (!scope.row._children || !scope.row._children.length) && {
                    visibility: 'hidden'
                  }
                ]}
                />
              {context.data.scopedSlots.default(scope)}
            </span>
          )
        },
      }
      return (
        <el-table-column {...data} >
        </el-table-column>
      )
    }
    return (
      <el-table-column {...data}>
        {context.children}
      </el-table-column>
    )
  },
  props: {
    label: String, // 显示的标题
    prop: String, // 对应列内容的字段名，也可以使用 property 属性
    property: String,
    width: String, // 对应列的宽度
    minWidth: { // 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列
      type: String,
      default: '80'
    },
    fixed: { // 列是否固定在左侧或者右侧，true 表示固定在左侧 true, left, right
      type: [Boolean, String],
      default: false
    },
    sortable: { // 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件
      type: [Boolean, String],
      default: false
    },
    sortMethod: Function, // 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效
    resizable: { // 对应列是否可以通过拖动改变宽度（如果需要在 el-table 上设置 border 属性为真）
      type: Boolean,
      default: false
    },
    type: { // 对应列的类型。如果设置了 selection 则显示多选框，如果设置了 index 则显示该行的索引（从 1 开始计算）
      type: String,
      default: 'default'
    },
    formatter: Function, // 用来格式化内容
    showTooltipWhenOverflow: { // 当过长被隐藏时显示 tooltip
      type: Boolean,
      default: false
    },
    align: { // 对齐方式 left, center, right
      type: String,
      default: 'center'
    },
    selectable: Function, // 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
    reserveSelection: Boolean, // 仅对 type=selection 的列有效，类型为 Boolean，为 true 则代表会保留之前数据的选项，需要配合 Table 的 clearSelection 方法使用。
    filters: Array, // 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。
    filterMultiple: Boolean, // 数据过滤的选项是否多选
    filterMethod: Function, // 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。
    filteredValue: Array, // 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。
    tree: { // 是否采用树结构
      type: Boolean,
      default: false,
    },
    // tableEl: {},
  },
}
