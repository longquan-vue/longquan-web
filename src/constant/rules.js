export const number = (message = '请填写...', opt = {}, rule = []) => ([{type: 'number', required: true, message, trigger: 'blur', min: 1, ...opt}, ...rule]);
export const required = (message = '请填写...', opt = {}, rule = []) => ([{required: true, message, trigger: 'blur', min: 1, ...opt}, ...rule]);
export const array = (message, opt = {}, rule = []) => ([{type: 'array', required: true, min: 1, message, ...opt}, ...rule]);
