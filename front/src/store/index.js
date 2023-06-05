import {configureStore} from "@reduxjs/toolkit";
import mapSlice from "./map/map-slice";
import saveLocationSlice from "./map/saveLoaction-slice";
import mapModalSlice from "./map/modal-slice";
import mapStoreSlice from "./map/mapStore-slice";
import userSlice from "./map/user-slice";

const store = configureStore({
    reducer:{
        map: mapSlice.reducer,
        mapModal: mapModalSlice.reducer,
        saveLocation: saveLocationSlice.reducer,
        mapStore: mapStoreSlice.reducer,
        user: userSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export default store
