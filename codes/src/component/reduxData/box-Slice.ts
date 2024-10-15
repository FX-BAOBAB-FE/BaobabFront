import { createSlice } from "@reduxjs/toolkit";

const boxInitial:Object[] = [];

const boxSlice = createSlice({
    name:'box',
    initialState:boxInitial,
    reducers:{
        setBoxData: (state,action) =>{
            const data = action.payload;
            state.push(data);
        }
    }

})

export const boxAction = boxSlice.actions;

export default boxSlice;