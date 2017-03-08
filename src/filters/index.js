import moment from 'moment'
// 性别过滤器
export const sexFilter = ({sex}) => ['未知', '男', '女'][sex] || '未知'
// 日期格式化过滤器
export const dateFilter = (date, pattern = 'YYYY-MM-DD') => moment(date).format(pattern)
