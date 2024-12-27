import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; 
import rootReducer from "./rootReducer";

//whileList에 있는 key값을 sessionStorage로 사용함.
const persistConfig = {
    key:'root',
    storage:storageSession,
    whilelist:['box']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer:persistedReducer
})

export default store;