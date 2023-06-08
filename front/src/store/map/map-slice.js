import {createSlice} from "@reduxjs/toolkit";

const mapSlice = createSlice({
    name: "map",
    initialState:{
        naverMap:"",
        index:{
            num:0,
            place:{
                start:{
                    name:"",
                    point:""
                },
                end:{
                    name:"",
                    point:""
                }
            }
        },
        searchData:{
            point:{
                start:"",
                end:""
            },
            data:[]
        },
        destination:"",
        polyline:"",
        sideFold:false,
        location:{
            latitude:"",
            longitude:""
        }
        // store
    },
    reducers:{
        handleNaverMap(state, action){
            state.naverMap = action.payload.naverMap
        },
        handleLocation(state, action){
            state.location = action.payload.location
        },
        handleIndex(state, action){
            state.index = action.payload.index
        },
        handleSide(state, action){
            state.sideFold = action.payload.sideFold
        },
        handleSearch(state, action){
            state.searchData = action.payload.data
        },
        handlePolyline(state, action){
            state.polyline = action.payload.polyline
        },
        handleDestination(state, action){
            state.destination = action.payload.data
        }
    }
})

export const mapActions = mapSlice.actions
export default mapSlice
