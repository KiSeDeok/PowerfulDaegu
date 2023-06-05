import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        favorite:[],
        path:[],
    },
    reducers:{
        handleFavorite(state, action){
            state.favorite = action.payload.favorite
        },
        handlePath(state, action){
            state.path = action.payload.path
        }
    }
})

export const userActions = userSlice.actions
export default userSlice
