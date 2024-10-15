import { configureStore } from "@reduxjs/toolkit";
import boxSlice from "./box-Slice";


const store = configureStore({
    reducer:{box:boxSlice.reducer,}
})

export default store;