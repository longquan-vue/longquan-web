import './style.less'
import props from './props'
export default {
  name: 'my-table',
  functional: true,
  render: function (h, context) {
    return (
      <el-table {...{
        ...context.data,
        props: {
          ...context.props,
        },
        class: [
          'my_table',
          context.data.class
        ]
      }}>
        {context.children}
      </el-table>
    )
  },
  props: {
    ...props,
  }
  // events: {
  //   select (selection, row) { // 当用户手动勾选数据行的 Checkbox 时触发的事件
  //     console.log('select\n', selection, row)
  //   },
  //   'select-all' (selection) { // 当用户手动勾选全选 Checkbox 时触发的事件
  //     console.log('select-all\n', selection)
  //   },
  //   'selection-change' (selection) { // 当选择项发生变化时会触发该事件
  //     console.log('selection-change\n', selection)
  //   },
  //   'cell-mouse-enter' (row, column, cell, event) { // 当单元格 hover 进入时会触发该事件
  //     console.log('cell-mouse-enter\n', row, column, cell, event)
  //   },
  //   'cell-mouse-leave' (row, column, cell, event) { // 当单元格 hover 退出时会触发该事件
  //     console.log('cell-mouse-leave\n', row, column, cell, event)
  //   },
  //   'cell-click' (row, column, cell, event) { // 当某个单元格被点击时会触发该事件
  //     console.log('cell-click\n', row, column, cell, event)
  //   },
  //   'row-click' (row, event) { // 当某一行被点击时会触发该事件
  //     console.log('row-click\n', row, event)
  //   },
  //   'sort-change' ({column, prop, order}) { // 当表格的排序条件发生变化的时候会触发该事件
  //     console.log('sort-change\n', column, prop, order)
  //   }
  // }
}
