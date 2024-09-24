import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import BoxData from "../UsedGoods/BoxData";
import BoxDataObj from "../Types/BoxDataObj";

const initialState:BoxDataObj[] = [];

const actionBox = createSlice(
    {
        name:'box',
        initialState,
        reducers:{
            setBoxData: (state, action: PayloadAction<BoxDataObj[]>) => {
                return action.payload;
              },
        }
    }
)

export const {setBoxData} = actionBox.actions

const store = configureStore({
    reducer:actionBox.reducer
})

export default store;
