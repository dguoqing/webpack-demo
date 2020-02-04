/**
 * @author guoqing.dong
 * @description create store
 * 
 */

 import { createStore,applyMiddleware } from 'redux'
 import { composeWithDevTools } from 'redux-devtools-extension'
 import thunk from 'redux-thunk'
 import logger from 'redux-logger'
 import rootReducer from './module'
 
 let  middle:Array<any> = [thunk];
 console.log(process.env.NODE_ENV)
 if(process.env.NODE_ENV === 'development'){
     middle.push(logger)
 }
 export default (initState?:any) => {
    return createStore(rootReducer,initState,composeWithDevTools(applyMiddleware(...middle)))
 }