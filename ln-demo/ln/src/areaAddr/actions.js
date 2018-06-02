import {
    AREA_COMM,
    AREA_DAWN,
    ADDRESS_1_COMM,
    ADDRESS_2_COMM,
    ADDRESS_3_COMM,
    ADDRESS_4_COMM,
    DISPATCH_COMM
} from './actionTypes.js';

let nextTodoId = 0;

// 定义action构造函数
export const getAreaComm = (erp, id) => ({
    type: AREA_COMM,
    erp: erp,
    id: id,
});

export const getAreaDawn = (erp, id) => ({
    type: AREA_DAWN,
    erp: erp,
    id: id,
});

export const getAddr1Comm = (erp, id) => ({
    type: ADDRESS_1_COMM,
    erp: erp,
    id: id,
});


export const getAddr2Comm = (erp, id) => ({
    type: ADDRESS_2_COMM,
    erp: erp,
    id: id,
});


export const getAddr3Comm = (erp, id) => ({
    type: ADDRESS_3_COMM,
    erp: erp,
    id: id,
});


export const getAddr4Comm = (erp, id) => ({
    type: ADDRESS_4_COMM,
    erp: erp,
    id: id,
});

export const getDispatchComm = (erp, id) => ({
    type: DISPATCH_COMM,
    erp: erp,
    id: id,
});