import Component from 'vue-class-component'
import { prop } from 'vue-property-decorator'

import LoadingSpinner from '../spinner/LoadingSpinner'

import './style.less'

@Component
export default class Page {
  @prop({
    type: Boolean,
    default: false,
  })
  loading

  render(h) {
    return (
      <div class="my-page">
        {this.loading ? (
          <div class="my-page-loading">
            <LoadingSpinner loading />
          </div>
        ) : this.$slots.default}
      </div>
    )
  }
}
