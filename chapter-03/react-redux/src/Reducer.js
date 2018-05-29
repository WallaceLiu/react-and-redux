import * as ActionTypes from './ActionTypes.js';

// 规约
// 某个action会导致state的变化
export default (state, action) => {
    const {counterCaption} = action;

    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {...state, [counterCaption]: state[counterCaption] + 1};
        case ActionTypes.DECREMENT:
            return {...state, [counterCaption]: state[counterCaption] - 1};
        default:
            return state
    }
}
