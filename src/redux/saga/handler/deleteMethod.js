import {call} from 'redux-saga/effects'
import { requestDeleteMethod } from '../request/DeleteMethod';
import { handleGetUser } from './user';

export function* handleDeleteMethod(action){
   
    try{
                yield call(requestDeleteMethod,action.payload);
                yield call(handleGetUser);

    }catch(error){
        console.log(error)

    }
}