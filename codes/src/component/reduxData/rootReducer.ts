import { combineReducers } from "@reduxjs/toolkit"
import { boxRedux } from "./box-Slice"
import { userRedux } from "./user-Slice"

const rootReducer = combineReducers({
    box:boxRedux,
    user:userRedux,
})

export default rootReducer