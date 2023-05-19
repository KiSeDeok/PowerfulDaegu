import {createSlice} from "@reduxjs/toolkit";

const saveLocationSlice = createSlice({
    name: "saveLocation",
    initialState:{
        selectedDelete:[]
    },
    reducers:{
        handleSelectDelete(state, action){
            const temp = JSON.parse(JSON.stringify(state.selectedDelete));
            const index = temp.findIndex(item => item.id === action.payload.id); // id값이 있는 요소의 인덱스를 찾습니다.
            if (index !== -1) {
                temp.splice(index, 1); // 해당 인덱스의 요소를 삭제합니다.
            }
            else{
                temp.push({id:action.payload.id})
            }

            state.selectedDelete = temp
        }
    }
})

export const saveLocationActions = saveLocationSlice.actions
export default saveLocationSlice
