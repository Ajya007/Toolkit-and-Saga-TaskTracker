import {call} from 'redux-saga/effects'
import { requestPatchMethod } from '../request/PatchMethod';
import { requestSingleUser } from '../request/Single';
import { handleGetUser } from './user';

export function* handlePatchMethod(action){
    try{
               const res= yield call(requestSingleUser,action.payload);
               const {data} = res
             const newEl=data.filter(el => el._id===action.payload)
                const updated={reminder:!newEl[0].reminder}
               const newAr=[action.payload,updated]
                yield call(requestPatchMethod,newAr);
                yield call(handleGetUser);
                
    
              
            


        
    }catch(error){
        console.log(error)

    }
}