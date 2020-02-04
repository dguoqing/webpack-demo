/**
 * @author guoqing.dong
 * 
 * @description 用户测试
 */
import { Dispatch } from 'redux'
//增加state常亮
const INCREMENT = 'INCREMENT';
type INCREMENT_TYPE = typeof INCREMENT;

//减少state常量
const DECREMENT = 'DECRMENT';
type DECREMENT_TYPE = typeof DECREMENT;

//定义type接口类型
interface INCREMENT_Action {
    type: INCREMENT_TYPE,
    payload:number,
}
interface DECREMENT_Action {
    type: DECREMENT_TYPE,
    payload:number,
}

//定义ModifyAction类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = INCREMENT_Action | DECREMENT_Action;


//定义props
export interface Props {
    count: number;
    doIncrement: (data:number) => void;
    doDecrement: (data:number) => void;
}

//初始化state
export interface TestStateType {
    test:{
        count:number
    }
};
const initState = {
    count: 0
}


//创建action

//增加
export const increment = (payload:number): INCREMENT_Action => ({
    type: INCREMENT,
    payload,
})

//减少
export const decrement = (payload:number): DECREMENT_Action => ({
    type: DECREMENT,
    payload,
})

//do

export const doIncrement = (data:number): Function => {
    return (dispatch:any) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, 1000);
    }
}
export const doDecrement = (data:number): Function => (dispatch: Dispatch<ModifyAction>): void => {
    setTimeout(() => {
        dispatch(decrement(data))
    }, 1000);
}


//创建reducer
export default (state = initState, action: ModifyAction): object => {
    const { type,payload } = action;
    switch (type) {
        case INCREMENT:
            return Object.assign({}, state, { count: payload })
        case DECREMENT:
            return Object.assign({}, state, { count: payload })
        default:
            return state
    }
}



