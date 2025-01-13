import { createSlice } from "@reduxjs/toolkit";
import {UserType, UserTypeMessage } from "../Types/UserInfo";

const userInit:UserType= {
    id:'',
    password:'',
    email:'',
    name:'',
    birth:'',
    wire:'',
    sex:'',
    foreigner:'',
    phone:'',
}
const userSlice= createSlice({
    name:'user',
    initialState:userInit,
    reducers:{
        setInputs(state,action){
            const {name,value} = action.payload;
            (state as any)[name] = value
        },
        allRemove(state){
            return {...userInit}
        },
    }
})

export const userAction = userSlice.actions
export const userRedux = userSlice.reducer
