import './MySteps.less'
export default {
  functional: true,
  render (h, context) {
    return (
      <el-steps
        {...{
          ...context.data,
          props: context.props,
          class: 'my-steps'
        }
        }>
        {context.children}
      </el-steps>
    )
  },
  props: {
    space: Number, // 	每个 step 的间距，不填写将自适应间距
    direction: String, // 显示方向 vertical/horizontal
    active: Number, // 	设置当前激活步骤
    processStatus: String, // 	设置当前步骤的状态 wait/process/finish/error/success
    finishStatus: String, // 	设置结束步骤的状态 wait/process/finish/error/success
    alignCenter: {  // 标题描述居中对齐
      type: Boolean,
      default: true
    },
  }
}
