import { createSlice } from "@reduxjs/toolkit";

const NoteTypeBox = createSlice({
    name:"openTheBox",

    initialState:{
        isOpen:false,
        SelectOption:"Note Type"
    },

    reducers:{
        OpenTheBox:(state)=>{
            state.isOpen = !state.isOpen
        },

        CloseTheBox:(state)=>{
            state.isOpen = false
        },

        SelectedOption:(state,action)=>{
            state.SelectOption = action.payload
            state.isOpen = false
        }
    }
})

export const {OpenTheBox,CloseTheBox,SelectedOption} = NoteTypeBox.actions
export default NoteTypeBox.reducer