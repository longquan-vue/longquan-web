export default {
  name: 'my-icon',
  functional: true,
  render: function (h, context) {
    return (
      <i {...{
        ...context.data,
        props: context.props,
        class: {
          ...context.props,
          [`el-icon-${context.props.type}`]: true
        }
      }}>
        {context.children}
      </i>
    )
  },
  props: {
    type: String, // Icon类型
  },
}
