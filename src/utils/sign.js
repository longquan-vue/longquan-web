import jsSHA from 'jssha/src/sha1'

// 生成随机数字符串
export const createNonceStr = () => {
  return Math.random().toString(36).substr(2, 15)
}

// 生成时间戳字符串
export const createTimestamp = () => {
  return parseInt(new Date().getTime() / 1000) + ''
}

// 进行字典排序
export const raw = function (args) {
  const values = Object.keys(args).map((key) => args[key])
  values.sort()

  return values.join('')
}

/**
 * @synopsis 签名算法
 *
 * @param accessToken  用于签名的 accessToken
 *
 * @returns
 */
const sign = (accessToken) => {
  const ret = {
    accessToken,
    nonce: createNonceStr(),
    timestamp: createTimestamp(),
  }
  const string = raw(ret)
  /* eslint-disable */
  const shaObj = new jsSHA('SHA-1', 'TEXT')
  shaObj.update(string)
  /* eslint-enable */
  ret.signature = shaObj.getHash('HEX')

  return ret
}

export default sign
