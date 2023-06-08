import {createSlice} from "@reduxjs/toolkit";

const authoritySlice = createSlice({
    name: "userAuthority",
    initialState:{
        mode: 0
    },
    reducers:{
        handleMode(state, action){
            state.mode = action.payload.mode
        }
    }
})

export const authorityActions = authoritySlice.actions
export default authoritySlice
