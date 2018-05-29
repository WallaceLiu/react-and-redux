import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
};

// createStore
const store = createStore(reducer, initValues);

export default store;
