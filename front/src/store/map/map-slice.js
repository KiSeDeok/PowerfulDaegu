import {createSlice} from "@reduxjs/toolkit";

const mapSlice = createSlice({
    name: "map",
    initialState:{
        index:0,
        searchData:[],
        destination:""
    },
    reducers:{
        handleIndex(state, action){
            state.index = action.payload.index
        },
        handleSearch(state, action){
            state.searchData = action.payload.data
        },
        handleDestination(state, action){
            state.destination = action.payload.data
        }
    }
})

export const mapActions = mapSlice.actions
export default mapSlice
