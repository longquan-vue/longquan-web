export default {
  name: 'my-select',
  functional: true,
  render: function (h, context) {
    return (
      <el-select {...{...context.data, props: context.props}}>
        {context.children}
      </el-select>
    )
  },
  props: {
    name: String, // select input 的 name 属性
    disabled: Boolean, // 是否禁用
    clearable: Boolean, // 单选时是否可以清空选项
    filterable: Boolean, // 是否可搜索
    loading: Boolean, // 是否正在从远程获取数据
    remote: Boolean, // 是否为远程搜索
    remoteMethod: Function, // 远程搜索方法
    filterMethod: Function, // 自定义过滤方法
    multiple: Boolean, // 是否多选
    placeholder: { // 占位符
      type: String,
      default: '请选择'
    }
  }
}
