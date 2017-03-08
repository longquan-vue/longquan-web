import './MyCard.less'

export default {
  name: 'my-card',
  functional: true, // 函数组件
  render(h, context) {
    const slots = context.slots() // 所有slot
    return (
      <el-card {...{ ...context.data, class: ['my-card', context.data.class], props: context.props }}>
        {Object.keys(slots).map(name => (
          name === 'default' ? slots[name] : (<template slot={name}>{slots[name]}</template>)
        ))}
      </el-card>
    )
  },
  props: {
    header: String, // 设置 header，也可以通过 slot#header 传入 DOM
    bodyStyle: Object, // 设置 body 的样式,  默认值:{ padding: '20px' }
  },
}
