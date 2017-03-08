export default {
  name: 'my-progress',
  functional: true,
  render: function (h, context) {
    return (
      <el-progress {...{...context.data, props: context.props}}>
        {context.children}
      </el-progress>
    )
  },
  props: {
    percentage: Number, // 百分比（必填） 0-100
    type: { // 进度条类型 line/circle
      type: String,
      default: 'line'
    },
    strokeWidth: Number, // 进度条的宽度，单位 px
    textInside: Boolean, // 进度条显示文字内置在进度条内（只在 type=line 时可用）
    status: String, // 进度条当前状态 success/exception
    width: Number, // 环形进度条画布宽度（只在 type=circle 时可用）
    showText: { // 是否显示进度条文字内容
      type: Boolean,
      default: true
    }
  },
}
