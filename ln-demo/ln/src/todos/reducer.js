import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]

            // 扩展运算符，简化数组操作
            // 把对象添加到数组中
            // return Object.assign({}, state, {
            //     todos: [
            //         ...state,
            //         {
            //             id: action.id,
            //             text: action.text,
            //             completed: false
            //         }
            //     ]
            // })
        }
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if (todoItem.id === action.id) {
                    return {...todoItem, completed: !todoItem.completed};
                } else {
                    return todoItem;
                }
            })
        }
        case REMOVE_TODO: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id;
            })
        }
        default: {
            return state;
        }
    }
}
