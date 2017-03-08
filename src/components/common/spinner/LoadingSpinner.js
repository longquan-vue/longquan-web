// vue-class
import Component from 'vue-class-component'
import { prop } from 'vue-property-decorator'
import Loading from 'vue-spinner/src/BounceLoader.vue'

@Component
export default class LoadingSpinner {

  @prop({
    type: Boolean,
    default: false,
  })

  loading
  @prop({
    type: String,
    default: '#304771'
  })
  color

  @prop({
    type: String,
    default: 'small'
  })
  size

  get spinnerSize() {
    const sizeMap = {
      large: '100px',
      small: '60px',
      mini: '30px'
    }
    if (sizeMap[this.size]) {
      return sizeMap[this.size]
    }
    return this.size
  }

  render(h) {
    return (
      <Loading
        loading={this.loading}
        color={this.color}
        size={this.spinnerSize}
        />
    )
  }
}
