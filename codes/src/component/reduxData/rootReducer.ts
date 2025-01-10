import { combineReducers } from "@reduxjs/toolkit"
import { boxRedux } from "./box-Slice"
import { userCheckRedux, userRedux } from "./user-Slice"

const rootReducer = combineReducers({
    box:boxRedux,
    user:userRedux,
    check:userCheckRedux,
})

export default rootReducer