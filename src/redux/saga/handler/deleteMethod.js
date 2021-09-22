import {call} from 'redux-saga/effects'
import { requestDeleteMethod } from '../request/DeleteMethod';

export function* handleDeleteMethod(action){
   
    try{
                yield call(requestDeleteMethod,action.payload);
    }catch(error){
        console.log(error)

    }
}