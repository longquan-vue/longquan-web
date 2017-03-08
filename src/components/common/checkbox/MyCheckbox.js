import './style.less'
export default {
  name: 'my-checkbox',
  functional: true,
  render: function (h, context) {
    return (
      <el-checkbox {...{
        ...context.data,
        props: context.props,
        class: {
          ...context.data.class,
          'my-checkbox': true
        }
      }}>
        {context.children}
      </el-checkbox>
    )
  },
  props: {
    label: String, // 选中状态的值（只有在checkbox-group下有意义）
    trueLabel: [String, Number], // 选中时的值
    falseLabel: [String, Number], // 没有选中时的值
    disabled: Boolean, // 按钮禁用
    checked: Boolean, // 当前是否勾选
    indeterminate: Boolean, // 设置 indeterminate 状态，只负责样式控制
  },
}
