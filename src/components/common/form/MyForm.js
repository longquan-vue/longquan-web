export default {
  name: 'my-form',
  functional: true,
  render: function (h, context) {
    return (
      <el-form {...{...context.data, props: context.props}}>
        {context.children}
      </el-form>
    )
  },
  props: {
    model: Object, // 表单数据对象
    rules: Object, // 表单验证规则
    labelPosition: { // 表单域标签的位置
      type: String,
      default: 'right'
    },
    labelWidth: { // 表单域标签的宽度，所有的 form-item 都会继承 form 组件的 labelWidth 的值
      type: String,
      default: '140px'
    },
    labelSuffix: { // 表单域标签的后缀
      type: String,
      default: ''
    },
    inline: Boolean, // 行内表单模式
  },
}
