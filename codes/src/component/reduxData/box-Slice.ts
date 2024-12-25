import { createSlice } from "@reduxjs/toolkit";
import BoxDataObj from '../Types/BoxDataObj'

const boxInitial:BoxDataObj[] = [];

const boxSlice = createSlice({
    name:'box',
    initialState:boxInitial,
    reducers:{
        setBoxData: (state,action) =>{
            state.push(action.payload);
        },
    }

})

export const boxAction = boxSlice.actions;

export const boxRedux = boxSlice.reducer;