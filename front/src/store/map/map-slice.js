import {createSlice} from "@reduxjs/toolkit";

const mapSlice = createSlice({
    name: "map",
    initialState:{
        index:0
    },
    reducers:{
        handleIndex(state, action){
            state.index = action.payload.index
        }
    }
})

export const mapActions = mapSlice.actions
export default mapSlice
