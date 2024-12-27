import { combineReducers } from "@reduxjs/toolkit"
import { boxRedux } from "./box-Slice"

const rootReducer = combineReducers({
    box:boxRedux,
})

export default rootReducer