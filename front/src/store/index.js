import {configureStore, combineReducers} from "@reduxjs/toolkit";
import mapSlice from "./map/map-slice";
import saveLocationSlice from "./map/saveLoaction-slice";
import mapModalSlice from "./map/modal-slice";
import mapStoreSlice from "./map/mapStore-slice";
import authoritySlice from "./user/authority-slice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authority"],
};

const reducers = combineReducers({
    map: mapSlice.reducer,
    mapModal: mapModalSlice.reducer,
    saveLocation: saveLocationSlice.reducer,
    mapStore: mapStoreSlice.reducer,

    authority : authoritySlice.reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
export default store
