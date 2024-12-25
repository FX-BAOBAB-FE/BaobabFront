import { configureStore } from "@reduxjs/toolkit";
import { boxRedux } from "./box-Slice";


const store = configureStore({
    reducer:{box:boxRedux,}
})

export default store;