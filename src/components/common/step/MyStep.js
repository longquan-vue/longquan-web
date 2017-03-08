import './MyStep.less'

export default {
  functional: true,
  render (h, context) {
    return (
      <el-step
        {...{
          ...context.data,
          props: {
            ...context.props,
          },
          class: {
            'my-step': true
          }
        }
        }>
        {context.children}
      </el-step>
    )
  },
}
