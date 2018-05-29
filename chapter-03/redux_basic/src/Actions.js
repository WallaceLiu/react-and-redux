import * as ActionTypes from './ActionTypes.js';

// 通常action对象的定义，习惯上，action类型和action构造函数分成两个文件定义
export const increment = (counterCaption) => {
    return {
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    };
};

export const decrement = (counterCaption) => {
    return {
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    };
};