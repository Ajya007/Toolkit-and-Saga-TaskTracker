import {takeLatest} from "redux-saga/effects"
import { handleGetUser } from "./handler/user"
import { handlePostMethod } from "./handler/postMethod"
import { handleDeleteMethod } from "./handler/deleteMethod"
import { handlePatchMethod } from "./handler/patchMethod"
import {getUser,postMethod,deleteMethod,patchMethod} from  "../ducks/userSlice"


export function* watcherSaga(){
    yield takeLatest(getUser.type,handleGetUser)
    yield takeLatest(postMethod.type,handlePostMethod)
    yield takeLatest(deleteMethod.type,handleDeleteMethod)
    yield takeLatest(patchMethod.type,handlePatchMethod)
}