import {call} from 'redux-saga/effects'
import { requestPostMethod } from '../request/PostMethod';
import { handleGetUser } from './user';

export function* handlePostMethod(action){
   
    try{
                yield call(requestPostMethod,action.payload);
                yield call(handleGetUser);
               
        
    }catch(error){
        console.log(error)

    }
}