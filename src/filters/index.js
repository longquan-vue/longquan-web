import moment from 'moment'
// 性别过滤器   0->未知,1->男,2->女
export const sexFilter = (sex) => ['未知', '男', '女'][sex] || '未知'
// 性别过滤器   0->未知,1->男,2->女
export const marriageFilter = (marriage) => ['未知', '已婚', '未婚'][marriage] || '未知'
// 日期格式化过滤器
export const dateFilter = (date, pattern = 'YYYY-MM-DD') => moment(date).format(pattern)
export const diffFilter = (date,type) => moment().diff(date,type)
//筛选过滤器
export const searchFilter=(value,data)=>{
    if(value.indexOf(data)>-1){
        return value
    }
};