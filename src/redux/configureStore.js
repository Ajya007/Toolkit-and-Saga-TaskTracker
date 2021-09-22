import { combineReducers,configureStore} from "@reduxjs/toolkit"
import userReducer from "./ducks/userSlice"
import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./saga/rootSaga.js"


const reducer = combineReducers({
    user:userReducer
})
const sagaMiddleware=createSagaMiddleware()
const middleware=[sagaMiddleware];



const store=configureStore({
reducer,
middleware})

sagaMiddleware.run(watcherSaga)

export default store;


