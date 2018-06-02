import {
    AREA_COMM,
    AREA_DAWN,
    ADDRESS_1_COMM,
    ADDRESS_2_COMM,
    ADDRESS_3_COMM,
    ADDRESS_4_COMM,
    DISPATCH_COMM
} from './actionTypes.js';

export default (state = [], action) => {
    switch (action.type) {
        case AREA_COMM: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }
        case AREA_DAWN: {
            return state.map((todoItem) => {
                if (todoItem.id === action.id) {
                    return {...todoItem, completed: !todoItem.completed};
                } else {
                    return todoItem;
                }
            })
        }
        case ADDRESS_1_COMM: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id;
            })
        }
        case ADDRESS_2_COMM: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id;
            })
        }
        case ADDRESS_3_COMM: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id;
            })
        }
        case ADDRESS_4_COMM: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id;
            })
        }
        case DISPATCH_COMM: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id;
            })
        }
        default: {
            return state;
        }
    }
}
