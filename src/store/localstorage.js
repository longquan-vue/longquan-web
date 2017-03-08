import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

export const REMEMBER_PASSWORD_KEY = 'REMEMBER_PASSWORD_KEY'
export const ACCOUNT_PASSWORD_KEY = 'ACCOUNT_PASSWORD_KEY'
export const SHOW_VALIDATE_CODE_KEY = 'SHOW_VALIDATE_CODE_KEY'
export const ACCESS_TOKEN_KEY = '_ACCESS_TOKEN_KEY'

export const localStorage = {
  [REMEMBER_PASSWORD_KEY]: {
    type: Boolean,
  },
  [ACCOUNT_PASSWORD_KEY]: {
    type: Object,
  },
  [SHOW_VALIDATE_CODE_KEY]: {
    type: Boolean,
  },
  [ACCESS_TOKEN_KEY]: {
    type: String
  },
}
