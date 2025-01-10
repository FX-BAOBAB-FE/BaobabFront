import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import rootReducer from "./rootReducer";

// `whitelist`에 있는 키값만 sessionStorage에 저장
const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['box'] // "box" 상태만 저장
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;
