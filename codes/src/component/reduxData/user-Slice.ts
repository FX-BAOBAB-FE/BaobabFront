import { createSlice } from "@reduxjs/toolkit";
import {UserType } from "../Types/UserInfo";

const userInit:UserType= {
    email:'',
    password:'',
    nickName:'',
    name:'',
    carrierType:'',
    phoneNumber:'',
    genderType:'MALE',
    isForeigner:true,
    birth:'',
    address:'',
    detailAddress:'',
    basicAddress:false,
    post:'',
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
