import { combineReducers } from "@reduxjs/toolkit"
import { userRedux } from "./user-Slice"

const rootReducer = combineReducers({
    user:userRedux,
})

export default rootReducer