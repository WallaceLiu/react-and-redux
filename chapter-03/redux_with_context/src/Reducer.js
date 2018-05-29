import * as ActionTypes from './ActionTypes.js';

// reduce必须是无副作用的纯函数
// 操作state
export default (state, action) => {
    const {counterCaption} = action;

    switch (action.type) {
        case ActionTypes.INCREMENT:
            // state展开，state[counterCaption] 重新赋值
            return {...state, [counterCaption]: state[counterCaption] + 1};
        case ActionTypes.DECREMENT:
            return {...state, [counterCaption]: state[counterCaption] - 1};
        default:
            return state
    }
}
