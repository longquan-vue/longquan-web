export default {
  name: 'my-switch',
  functional: true,
  render: function (h, context) {
    return (
      <el-switch {...{
        ...context.data,
        props: context.props,
      }}>
        {context.children}
      </el-switch>
    )
  },
  props: {
    disabled: Boolean, // 是否禁用
    width: Number, // switch 的宽度（像素）
    onIconClass: String, // switch 打开时所显示图标的类名，设置此项会忽略 on-text
    offIconClass: String, // switch 关闭时所显示图标的类名，设置此项会忽略 off-text
    onText: { // switch 打开时的文字
      type: String,
      default: '启用'
    },
    offText: { // switch 关闭时的文字
      type: String,
      default: '禁用'
    },
    onColor: String, // switch 打开时的背景色
    offColor: String, // switch 关闭时的背景色
    name: String // switch 对应的 name 属性
  },
}
