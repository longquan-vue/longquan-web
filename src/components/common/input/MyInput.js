export default {
  name: 'my-input',
  functional: true,
  render: function (h, context) {
    return (
      <el-input {...{
        ...context.data,
        props: context.props
      }}>
        {context.children}
      </el-input>
    )
  },
  props: {
    type: String, // 类型 text/textarea
    value: [String, Number], // 绑定值
    maxlength: Number, // 最大输入长度
    minlength: Number, // 最小输入长度
    placeholder: String, // 输入框占位文本
    disabled: Boolean, // 禁用
    size: String, // 输入框尺寸，只在 type!="textarea" 时有效 large, small, mini
    icon: String, // 输入框尾部图标
    autosize: [Boolean, Object], // 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }
    rows: Number, // 输入框行数，只对 type="textarea" 有效
  },
}
