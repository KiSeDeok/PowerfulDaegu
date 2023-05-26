import {createSlice} from "@reduxjs/toolkit";

const mapStoreSlice = createSlice({
    name: "map",
    initialState:{
        search:{
            value:"",
            region:[],
            type:[]
        }
    },
    reducers:{
        handleSearch(state, action){
            state.search = {value:action.payload.value, region:action.payload.region, type:action.payload.type}
        }
    }
})

export const mapStoreActions = mapStoreSlice.actions
export default mapStoreSlice
