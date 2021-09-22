import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:undefined
    },
    reducers:{
        getUser() {},
        setUser(state,action) {
            const userData=action.payload;


            return {...state,user:userData}
        },
        postMethod(tasks) {},
        deleteMethod(id) {},
        patchMethod(payload) {}

    }
})

export const {getUser,setUser,postMethod,deleteMethod,patchMethod} = userSlice.actions;

export default userSlice.reducer;