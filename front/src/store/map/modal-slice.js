import {createSlice} from "@reduxjs/toolkit";

const mapModalSlice = createSlice({
    name: "mapModal",
    initialState:{
        talkWriteModal:{
            open:false,
            id:""
        },
        talkModal:{
            open:false,
            id:""
        }
    },
    reducers:{
        handleTalkWrite(state, action){
            state.talkWriteModal = {id: action.payload.id, open: action.payload.open}
        },
        handleTalk(state, action){
            state.talkModal = {id: action.payload.id, open: action.payload.open}
        },
    }
})

export const mapModalActions = mapModalSlice.actions
export default mapModalSlice
