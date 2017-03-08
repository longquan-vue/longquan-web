<style lang="less">
  @import "./MyTreeSelect.less";
</style>

<script>
  import MySelect from './MySelect'
  import MyOption from './MyOption'
  // utils
  import {copyFieldsValue} from '../../../utils/lang'
  import {treeToArray} from '../../../utils/tree'
  import assertType from '../../../utils/assertType'

  export default {
    name: 'my-tree-select',
    components: {},
    props: {
      name: String,
      value: {},
      size: String,
      disabled: Boolean,
      clearable: Boolean,
      loading: Boolean,
      multiple: Boolean,
      placeholder: String,
      // tree
      props: {
        type: Object,
        default: () => ({
          children: 'children',
          label: 'label',
          value: 'value',
        })
      },
      data: {
        type: Array,
        default: () => ([])
      },
    },
    data () {
      return {
        expandedRowIdMap: {},
      }
    },
    computed: {
      // selectValue () {
        // if (this.value === undefined) {
        //   return ''
        // }

        // if (!this.optionList.length) {
        //   return ''
        // }
        // return this.value
      // },
      getChildren() {
        const childrenProp = this.props.children
        if (assertType(childrenProp, String)) {
          return (data) => data[childrenProp]
        } else if (assertType(childrenProp, Function)) {
          return (data) => childrenProp(data)
        } else {
          throw new Error('props.children 无效', childrenProp)
        }
      },
      optionList () {
        const valueProp = this.props.value
        const labelProp = this.props.label
        const list = treeToArray(
          this.data,
          (data) => {
            return this.getChildren(data)
          },
          (data, parent) => {
            return {
              ...data,
              children: this.getChildren(data),
              label: data[labelProp],
              value: data[valueProp],
              _row: data,
              _level: parent ? parent._level + 1 : 0,
              _expand: this.expandedRowIdMap[data[valueProp]],
              _show: !parent || (parent._show && parent._expand)
            }
          })

        return list
      }
    },
    watch: {
      value (value) {
        this.change(value, true)
      },
    },
    methods: {
      change (value, watch) {
        if (!watch && this.value !== value) {
          this.$emit('input', value)
          this.$emit('change', value)
        }
      },
      selectChange (value) {
        this.change(value)
      },
      toggleExpand (option, event) {
        const value = option[this.props.value]
        this.expandedRowIdMap = {
          ...this.expandedRowIdMap,
          [value]: !this.expandedRowIdMap[value]
        }
        event.stopPropagation()
      }
    },
    mounted () {
    },
    render (h) {
      const selectProps = copyFieldsValue(this, [
        'name',
        'size',
        'disabled',
        'clearable',
        'loading',
        'multiple',
        'placeholder',
        'value',
      ])

      return (
        <MySelect
          ref="select" class="my-tree-select" value={selectProps.value} {...{props: selectProps}}
          onInput={this.selectChange}
        >
          {this.optionList.map(option => (
            <MyOption v-show={option._show} label={option.label} value={option.value}>
              <span style={{'padding-left': option._level * 17 + 'px'}}>
                <span
                  onClick={(event) => {
                    this.toggleExpand(option, event)
                  }}
                  class={['el-tree-node__expand-icon', {expanded: option._expand}]}
                  style={[
                    {
                      marginRight: '10px',
                    },
                    (!option.children || !option.children.length) && {
                      visibility: 'hidden'
                    }
                  ]}
                />
                {option.label}
              </span>
            </MyOption>
          ))}
        </MySelect>
      )
    }
  }
</script>
