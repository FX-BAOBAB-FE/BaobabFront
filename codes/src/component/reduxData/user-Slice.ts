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

const initialState:UserTypeMessage= {
    idM:'',
    passwordM:'',
    emailM:'',
    nameM:'',
    birthM:'',
    wireM:'',
    sexM:'',
    foreignerM:'',
    phoneM:'',
}
const userCheckSlice = createSlice({
    name:'check',
    initialState:initialState,
    reducers:{
        setIdM(state,action){
            const {name,value} = action.payload;
            if(value == ""){
                (state as any)[name] = "필수 정보입니다"
            }else{

            }
        }
    }
})
export const userAction = userSlice.actions
export const userRedux = userSlice.reducer

export const userCheckAction = userSlice.actions
export const userCheckRedux = userSlice.reducer