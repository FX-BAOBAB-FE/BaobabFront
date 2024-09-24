import { createSlice } from "@reduxjs/toolkit";
import BoxDataObj from "../Types/BoxDataObj";

const initialState:BoxDataObj[] = [];

const boxSlice = createSlice({
    name:'box',
    initialState,
    reducers:{
        setBoxData: (state,action) =>{
            const data = action.payload;
            state.push(data);
        }
    }

})

export const boxAction = boxSlice.actions;

export default boxSlice;