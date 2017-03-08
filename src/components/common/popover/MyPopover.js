export default {
  functional: true,
  render (h, context) {
    // context.props.trigger = 'hover' // 修改props的值
    return (
      <el-popover
        {...{
          ...context.data,
          props: context.props,
        }
        }>
        {context.children}
      </el-popover>
    )
    // return createElement(
    //   'el-popover',
    //   {
    //     ...context.data,
    //     props: context.props,
    //   },
    //   context.children
    // )
  },
}
