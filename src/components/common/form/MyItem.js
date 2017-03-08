import './style.less'
export default {
  name: 'my-form-item',
  functional: true,
  render: function (h, context) {
    return (
      <el-form-item {...{
        ...context.data,
        props: context.props,
        class: {
          ...context.data.class,
          'my_form_item': context.props.prop && !context.props.none
        }
      }}>
        {context.children}
      </el-form-item>
    )
  },
  props: {
    label: String, // 标签文本
    labelWidth: String, // 表单域标签的的宽度，例如 '50px'
    prop: String, // 表单域 model 字段
    required: Boolean, // 是否必填，如不设置，则会根据校验规则自动生成
    rules: [Object, Array],
    none: { // 不应用统一样式设置
      type: Boolean,
      default: false
    }
  },
}
