import {call} from 'redux-saga/effects'
import { requestPostMethod } from '../request/PostMethod';

export function* handlePostMethod(action){
   
    try{
                yield call(requestPostMethod,action.payload);
        
    }catch(error){
        console.log(error)

    }
}