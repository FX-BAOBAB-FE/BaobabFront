import { configureStore } from "@reduxjs/toolkit";
import boxSlice, { boxAction } from "./box-Slice";


const store = configureStore({
    reducer:boxSlice.reducer
})

export default store;