import logger from './logger'

// 开发环境中间件
const dev = [
  logger
]

// 生产环境中间件
const prod = []

// 开发环境和生产环境也需要的中间件
const common = []

export default process.env.NODE_ENV !== 'production' ? [...common, ...prod, ...dev] : [...common, ...prod]

